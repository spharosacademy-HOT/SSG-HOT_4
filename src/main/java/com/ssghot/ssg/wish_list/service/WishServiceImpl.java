package com.ssghot.ssg.wish_list.service;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import com.ssghot.ssg.wish_list.domain.WishList;
import com.ssghot.ssg.wish_list.dto.WishListDtoInput;
import com.ssghot.ssg.wish_list.dto.WishListDtoOutput;
import com.ssghot.ssg.wish_list.repository.IWishListRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class WishServiceImpl implements IWishListService{

    private final IUserRepository iUserRepository;
    private final IWishListRepository iWishListRepository;
    private final IProductRepository iProductRepository;
    @Override
    public ResultDtoOutput<WishListDtoOutput> addWish(WishListDtoInput wishListDtoInput) {
        Optional<User> user = iUserRepository.findById(wishListDtoInput.getUserId());
        Optional<Product> product = iProductRepository.findById(wishListDtoInput.getProductId());
        if(user.isPresent() && product.isPresent()){
            Optional<WishList> byProductIdAndUserId = iWishListRepository.findByProductIdAndUserId(product.get().getId(), user.get().getId());

            if(byProductIdAndUserId.isPresent()){
                iWishListRepository.deleteById(byProductIdAndUserId.get().getId());
                return getWishListDtoOutput(400,"좋아요 리스트가 삭제 되었습니다.",null);
            }

            WishList wishList = iWishListRepository.save(wishListDtoInput.toEntity(product.get(), user.get()));
            return getWishListDtoOutput(200,"좋아요 리스트에 추가 되었습니다.",wishList);
        }
        return getWishListDtoOutput(400,"실패",null);
    }

    @Override
    public ResultsDtoOutput<List<WishListDtoOutput>> getWishByUserId(Long userId) {
        List<WishList> wishListByUserId = iWishListRepository.findAllByUserId(userId);
        if(wishListByUserId.isEmpty()){
            return getWishListDtoOutputList(400,"유저별 좋아요 리스트가 존재하지 않습니다.",null);
        }
        return getWishListDtoOutputList(200,"유저별 좋아요 리스트를 조회하였습니다.",wishListByUserId);
    }

    @Override
    public ResultsDtoOutput<List<WishListDtoOutput>> getAll() {
        List<WishList> wishLists = iWishListRepository.findAll();
        if(wishLists.isEmpty()){
            return getWishListDtoOutputList(400,"wish 테이블에 값이 존재하지 않습니다.",null);
        }
        return getWishListDtoOutputList(200,"값들을 불러왔습니다.",wishLists);
    }

    @Override
    public void deleteWish(Long id) {
        iWishListRepository.deleteById(id);
    }

    private ResultDtoOutput<WishListDtoOutput> getWishListDtoOutput(int status, String message, WishList wishList){
        if(wishList!=null){
            return new ResultDtoOutput<>(status,message, WishListDtoOutput.builder()
                    .id(wishList.getId())
                    .userId(wishList.getUser().getId())
                    .product(wishList.getProduct())
                    .createdDate(wishList.getCreatedDate())
                    .updatedDate(wishList.getUpdatedDate())
                    .build());
        }

        return new ResultDtoOutput<>(status,message,null);
    }

    private ResultsDtoOutput<List<WishListDtoOutput>> getWishListDtoOutputList(int status, String message, List<WishList> wishLists){
        if(wishLists != null){
            List<WishListDtoOutput> collect = wishLists.stream().map(wishList ->
                    WishListDtoOutput.builder()
                            .id(wishList.getId())
                            .product(wishList.getProduct())
                            .userId(wishList.getUser().getId())
                            .createdDate(wishList.getCreatedDate())
                            .updatedDate(wishList.getUpdatedDate())
                            .build()).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status,message,collect.size(),collect);
        }
        return new ResultsDtoOutput<>(status,message,0,null);
    }
}
