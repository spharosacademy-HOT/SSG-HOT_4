package com.ssghot.ssg.cart.service;

import com.ssghot.ssg.cart.domain.Cart;
import com.ssghot.ssg.cart.dto.*;
import com.ssghot.ssg.cart.repository.ICartRepository;
import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.optionList.domain.OptionFirst;
import com.ssghot.ssg.optionList.domain.OptionSecond;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class CartServiceImpl implements ICartService{
    private final ICartRepository iCartRepository;
    private final IStockRepository iStockRepository;
    private final IUserRepository iUserRepository;

    @Override
    public ResultDtoOutput<CartDtoOutput> addCart(CartDtoInput cartDtoInput) {
        Optional<User> user = iUserRepository.findById(cartDtoInput.getUserId());
        Optional<Stock> stock = iStockRepository.findById(cartDtoInput.getStockId());

        // 유저 정보와 제품 정보가 존재할 경우
        if(user.isPresent() && stock.isPresent()){
            Optional<Cart> cart = iCartRepository.findByUserAndStock(user.get(), stock.get());
            // 사용자가 기존의 카트에 담겨 있을 경우
            if(cart.isPresent()){
                int oldCount = cart.get().getCount();
                int newCount = cartDtoInput.getCount() + oldCount;
                int replaceCount = iCartRepository.replaceCount(cart.get().getId(), newCount);
                if(replaceCount==1){
                return  new ResultDtoOutput<>(200,"상품의 개수가 카트에 추가되었습니다.",CartDtoOutput.builder().count(newCount).build());
                }
                return  new ResultDtoOutput<>(404,"오류가 났습니다.",null);
            }

            // 아닌 경우
            Cart saveCart = iCartRepository.save(cartDtoInput.toEntity(stock.get(), user.get()));
            return getCartDtoOutput(200,"상품이 유저 카트에 추가되었습니다.",saveCart);

        }
        return  getCartDtoOutput(404,"상품 혹은 유저 정보가 없습니다.",null);
    }

    @Override
    public ResultDtoOutput<CartDtoOutput> editCountCart(CartEditDtoInput cartEditDtoInput) {
        // 유저 정보와 제품 정보가 존재할 경우
            Optional<Cart> cart = iCartRepository.findById(cartEditDtoInput.getId());
            // 사용자가 기존의 카트에 담겨 있을 경우
            if(cart.isPresent()){
                int replaceCount = iCartRepository.replaceCount(cartEditDtoInput.getId(), cartEditDtoInput.getCount());
                if(replaceCount==1){
                    return  new ResultDtoOutput<>(200,"상품의 개수가 수정되었습니다.",CartDtoOutput.builder().count(cartEditDtoInput.getCount()).build());
                }
                return  new ResultDtoOutput<>(404,"오류가 났습니다.",null);
            }

        return  getCartDtoOutput(404,"카트 정보가 없습니다.",null);
    }

    @Override
    public ResultDtoOutput<CartDtoOutput> getCartById(Long id) {
        Optional<Cart> cart = iCartRepository.findById(id);
        if(cart.isPresent()){
          return getCartDtoOutput(200,"카트 정보를 가져왔습니다.",cart.get());
        }
        return getCartDtoOutput(404,"카트 정보가 없습니다.",null);
    }

    @Override
    public ResultsDtoOutput<List<CartByUserDtoOutput>> getCartByUserId(Long userId) {
        boolean isValid = iUserRepository.existsById(userId);
        if(isValid){
            List<Cart> carts = iCartRepository.findByUserId(userId);

            List<OptionListDtoOutputList> optionListDtoOutputsUpdated = new ArrayList<>();
//            List<OptionListDtoOutput> optionListDtoOutputs = new ArrayList<>();
            for (Cart cart: carts) {

                List<Stock> allByProductId = iStockRepository.findAllByProductId(cart.getStock().getProduct().getId());

                List<OptionFirst> optionFirsts = new ArrayList<>();
                List<OptionSecond> optionSeconds = new ArrayList<>();
                // 첫번째 값 넣기
                optionFirsts.add(cart.getStock().getOptionFirst());
                optionSeconds.add(cart.getStock().getOptionSecond());

                for (Stock stock : allByProductId) {
                    optionFirsts.add(stock.getOptionFirst());
                    optionSeconds.add(stock.getOptionSecond());
                }
                List<OptionFirst> optionFirstFinal = deduplication(optionFirsts, OptionFirst::getId);
                List<OptionSecond> optionSecondsFinal = deduplication(optionSeconds, OptionSecond::getId);

                OptionListDtoOutputList optionList = OptionListDtoOutputList.builder()
                        .optionFirsts(optionFirstFinal)
                        .optionSeconds(optionSecondsFinal)
                        .build();
                optionListDtoOutputsUpdated.add(optionList);
            }
            return getCartsDtoOutputs(200,"유저별 카트 정보를 가져왔습니다.",carts,optionListDtoOutputsUpdated);
        }
        return getCartsDtoOutputs(404,"유저 정보가 없습니다",null,null);
    }

    @Override
    public ResultsDtoOutput<List<CartDtoOutput>> getAll() {
        List<Cart> carts = iCartRepository.findAll();
        if(carts.isEmpty()) {
            return getCartsDtoOutputs(404,"카트 목록을 가져오지 못했습니다.",null);
        }
        return getCartsDtoOutputs(200,"카트 목록을 가져왔습니다.",carts);
    }

    @Override
    public void deleteCart(Long id) {
        iCartRepository.deleteById(id);
    }

    @Override
    public ResultDtoOutput<CartDtoOutput> editStockCart(CartEditStockDtoInput cartEditStockDtoInput) {
        Optional<Stock> stock = iStockRepository.findById(cartEditStockDtoInput.getStockId());
        Optional<User> user = iUserRepository.findById(cartEditStockDtoInput.getUserId());
        Optional<Cart> cart = iCartRepository.findById(cartEditStockDtoInput.getId());
        if(stock.isPresent() && user.isPresent() && cart.isPresent()){
            int result = iCartRepository.replaceStock(cartEditStockDtoInput.getId(), stock.get().getId());
            if(result==1){
                return getCartDtoOutput(200,"재고가 변경되었습니다.",null);
            }
            return getCartDtoOutput(400,"재고가 변경되지 않았습니다.",null);
        }

        return getCartDtoOutput(400,"재고가 존재하지 않았습니다.",null);
    }

    @Override
    public ResultDtoOutput<CartDtoOutput> editStockCartV2(CartEditV2DtoInput cartEditV2DtoInput) {
        Optional<User> user = iUserRepository.findById(cartEditV2DtoInput.getUserId());

        Optional<Stock> stock = iStockRepository.findByProductIdAndOptionFirstIdAndOptionSecondId(cartEditV2DtoInput.getProductId(),cartEditV2DtoInput.getOptionFirstId(), cartEditV2DtoInput.getOptionSecondId());

        if(user.isEmpty()){
            return getCartDtoOutput(400,"유저정보가 존재하지 않습니다.",null);
        }
        if(stock.isEmpty()){
            return getCartDtoOutput(400,"해당 옵션 1,2 상품 조합의  스턱이 존재하지 않습니다.",null);
        }
        int result = iCartRepository.replaceStock(cartEditV2DtoInput.getCartId(), stock.get().getId());
        if(result==1){
            return getCartDtoOutput(200,"재고가 변경되었습니다.",null);
        }
        return getCartDtoOutput(400,"재고가 변경되지 않았습니다.",null);
    }

    @Override
    public Map<String, Object> findCartByProductId(Long userId, Long productId) {
        List<Stock> stocks = iStockRepository.findAllByProductId(productId);
        Map<String,Object> result = new HashMap<>();
        if(stocks==null){
            result.put("code",400);
            result.put("Message","해당 재고가 아직 등록되지 않았습니다.");
            return result;
        }
        if(stocks.size()==1){
            Optional<User> user = iUserRepository.findById(userId);
            if(user.isEmpty()){
                result.put("code",401);
                result.put("Message","유저 정보가 존재하지 않습니다.");
                return result;
            }

            Optional<Cart> cart = iCartRepository.findByUserAndStock(user.get(), stocks.get(0));

            if(cart.isPresent()) {
                int oldCount = cart.get().getCount();
                int newCount = 1 + oldCount;
                int replaceCount = iCartRepository.replaceCount(cart.get().getId(), newCount);
                if (replaceCount == 1) {
                    result.put("code", 201);
                    result.put("Message", "한 번 더 담으셨네요! 장바구니 수량이 " + newCount + "개가 되었습니다.");
                    return result;
                }
                result.put("code", 402);
                result.put("Message", "장바구니 수량이 변경되지 않았습니다.");
                return result;
            }

            iCartRepository.save(Cart.builder()
                    .count(1)
                    .stock(stocks.get(0))
                    .user(user.get())
                    .build());
            result.put("code", 200);
            result.put("Message", "장바구니에 상품이 담겼습니다.");
            return result;
            }


        if(stocks.size()>1){
            result.put("code",202);
            result.put("Message","이 상품은 옵션이 있는 상품 입니다. 상품상세에서 옵션을 선택해주세요.");
            return result;
        }
        result.put("code",403);
        result.put("Message","에러.");
        return result;
    }

    private ResultDtoOutput<CartDtoOutput> getCartDtoOutput(int status, String message, Cart cart){
        if(cart!=null) {
            return new ResultDtoOutput<>(status, message
                    , CartDtoOutput.builder()
                    .id(cart.getId())
                    .userId(cart.getUser().getId())
                    .count(cart.getCount())
                    .stock(cart.getStock())
                    .createdDate(cart.getCreatedDate())
                    .updatedDate(cart.getUpdatedDate())
                    .build());
        }
        return new ResultDtoOutput<>(status,message,null);
    }
    private ResultsDtoOutput<List<CartDtoOutput>> getCartsDtoOutputs(int status, String message,List<Cart> carts) {
        if(carts!=null) {
            List<CartDtoOutput> collect = carts.stream().map(cart ->
                    CartDtoOutput.builder()
                            .id(cart.getId())
                            .userId(cart.getUser().getId())
                            .count(cart.getCount())
                            .stock(cart.getStock())
                            .createdDate(cart.getCreatedDate())
                            .updatedDate(cart.getUpdatedDate())
                            .build()
            ).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status, message, collect.size(), collect);
        }
        return new ResultsDtoOutput<>(status, message, 0,null);
    }

    private ResultsDtoOutput<List<CartByUserDtoOutput>> getCartsDtoOutputs(int status, String message, List<Cart> carts,List<OptionListDtoOutputList> optionListDtoOutputsUpdated) {
        if(carts!=null) {
            final int[] i = {-1};
            List<CartByUserDtoOutput> collect = carts.stream().map(cart ->
                    {
                        i[0]++;
                        return CartByUserDtoOutput.builder()
                                .id(cart.getId())
                                .userId(cart.getUser().getId())
                                .count(cart.getCount())
                                .stock(cart.getStock())
                                .optionList(optionListDtoOutputsUpdated.get(i[0]))
                                .createdDate(cart.getCreatedDate())
                                .updatedDate(cart.getUpdatedDate())
                                .build();
                    }

            ).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status, message, collect.size(), collect);
        }
        return new ResultsDtoOutput<>(status, message, 0,null);
    }

    /**
     * @param list 중복이 있는 리스트
     * @param key 중복 여부를 판단하는  키값
     * @param <T> 제네릭 타입
     * @return List
     */
    public <T> List<T> deduplication(List<T> list, Function<? super T,?> key){
        return list.stream().filter(deduplication(key)).collect(Collectors.toList());
    }

    public <T> Predicate<T> deduplication(Function<? super T,?> key){
        Set<Object> set = ConcurrentHashMap.newKeySet();
        return predicate ->set.add(key.apply(predicate));
    }
}


