package com.ssghot.ssg.cart.service;

import com.ssghot.ssg.cart.domain.Cart;
import com.ssghot.ssg.cart.dto.CartDtoInput;
import com.ssghot.ssg.cart.dto.CartDtoOutput;
import com.ssghot.ssg.cart.repository.ICartRepository;
import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class CartServiceImpl implements ICartService{
    private final ICartRepository iCartRepository;
    private final IProductRepository iProductRepository;
    private final IUserRepository iUserRepository;

    @Override
    public ResultDtoOutput<CartDtoOutput> addCart(CartDtoInput cartDtoInput) {
        Optional<User> user = iUserRepository.findById(cartDtoInput.getUserId());
        Optional<Product> product = iProductRepository.findById(cartDtoInput.getProductId());

        // 유저 정보와 제품 정보가 존재할 경우
        if(user.isPresent() && product.isPresent()){
            Optional<Cart> cart = iCartRepository.findByUserAndProduct(user.get(), product.get());
            // 사용자가 기존의 카트에 담겨 있을 경우
            if(cart.isPresent()){
                int oldCount = cart.get().getCount();
                int newCount = cartDtoInput.getCount() + oldCount;
                int replaceCount = iCartRepository.replaceCount(cart.get().getId(), newCount);
                if(replaceCount==1){
                return  new ResultDtoOutput<>(200,"상품의 개수가 카트에 추가되었습니다.",CartDtoOutput.builder().count(newCount).build());
                }
                return  new ResultDtoOutput<>(204,"오류가 났습니다.",null);
            }

            // 아닌 경우
            Cart saveCart = iCartRepository.save(cartDtoInput.toEntity(product.get(), user.get()));
            return getCartDtoOutput(200,"상품이 유저 카트에 추가되었습니다.",saveCart);

        }
        return  getCartDtoOutput(204,"상품 혹은 유저 정보가 없습니다.",null);
    }

    @Override
    public ResultDtoOutput<CartDtoOutput> editCart(CartDtoInput cartDtoInput) {

        return null;
    }

    @Override
    public ResultDtoOutput<CartDtoOutput> getCartById(Long id) {
        Optional<Cart> cart = iCartRepository.findById(id);
        if(cart.isPresent()){
          return getCartDtoOutput(200,"카트 정보를 가져왔습니다.",cart.get());
        }
        return getCartDtoOutput(204,"카트 정보가 없습니다.",null);
    }

    @Override
    public ResultsDtoOutput<List<CartDtoOutput>> getCartByUserId(Long userId) {
        boolean isValid = iUserRepository.existsById(userId);
        if(isValid){
            List<Cart> carts = iCartRepository.findByUserId(userId);
            return getCartsDtoOutputs(200,"유저별 카트 정보를 가져왔습니다.",carts);
        }
        return getCartsDtoOutputs(204,"유저 정보가 없습니다",null);
    }

    @Override
    public ResultsDtoOutput<List<CartDtoOutput>> getAll() {
        List<Cart> carts = iCartRepository.findAll();
        if(carts.isEmpty()) {
            return getCartsDtoOutputs(204,"상품 목록을 가져오지 못했습니다.",null);
        }
        return getCartsDtoOutputs(200,"상품 목록을 가져왔습니다.",carts);
    }

    @Override
    public void deleteCart(Long id) {

    }

    private ResultDtoOutput<CartDtoOutput> getCartDtoOutput(int status, String message, Cart cart){
        if(cart!=null) {
            return new ResultDtoOutput<>(status, message
                    , CartDtoOutput.builder()
                    .id(cart.getId())
                    .userId(cart.getUser().getId())
                    .count(cart.getCount())
                    .product(cart.getProduct())
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
                            .product(cart.getProduct())
                            .createdDate(cart.getCreatedDate())
                            .updatedDate(cart.getUpdatedDate())
                            .build()
            ).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status, message, collect.size(), collect);
        }
        return new ResultsDtoOutput<>(status, message, 0,null);
    }
}


