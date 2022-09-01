package com.ssghot.ssg.recentlyViewedProduct.service;

import com.ssghot.ssg.cart.repository.ICartRepository;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoInput;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoOutput;
import com.ssghot.ssg.recentlyViewedProduct.repository.IRecentlyViewedProductRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import com.ssghot.ssg.wish_list.domain.WishList;
import com.ssghot.ssg.wish_list.repository.IWishListRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@RequiredArgsConstructor
@Service
public class RecentlyViewedProductServiceImpl implements IRecentlyViewedProductService{

    private final IUserRepository iUserRepository;
    private final IProductRepository iProductRepository;
    private final IRecentlyViewedProductRepository iRecentlyViewedProductRepository;
    private final ICartRepository iCartRepository;
    private final IWishListRepository iWishListRepository;

    private final IStockRepository iStockRepository;
    @Override
    public Map<String, Object>addView(RecentlyViewedProductDtoInput recentlyViewedProductDtoInput) {
        Map<String,Object> result = new HashMap<>();
        Optional<User> user = iUserRepository.findById(recentlyViewedProductDtoInput.getUserId());
        if(user.isEmpty()){
            result.put("code",400);
            result.put("Message","해당 유저가 존재하지 않습니다.");
            return result;
        }
        Optional<Product> product = iProductRepository.findById(recentlyViewedProductDtoInput.getProductId());
        if(product.isEmpty()){
            result.put("code",400);
            result.put("Message","해당 제품이 존재하지 않습니다.");
            return result;
        }
        Optional<RecentlyViewedProduct> view = iRecentlyViewedProductRepository.findByUserIdAndProductId(user.get().getId(), product.get().getId());
        if(view.isPresent()){
            iRecentlyViewedProductRepository.save(RecentlyViewedProduct.builder()
                    .id(view.get().getId())
                    .product(view.get().getProduct())
                    .user(view.get().getUser())
                    .build());
            result.put("code",201);
            result.put("Message","해당 유저의 제품이 존재합니다. 제일 첫번째 인덱스로 이동합니다.");
            return result;
        }
        RecentlyViewedProduct save = iRecentlyViewedProductRepository.save(recentlyViewedProductDtoInput.toEntity(product.get(), user.get()));
        result.put("code",200);
        result.put("Message","해당 유저의 제품보기가 등록되었습니다.");
        result.put("result",save);
        return result;
    }

    @Override
    public void deleteView(Long id) {
        iRecentlyViewedProductRepository.deleteById(id);
    }

    @Override
    public Map<String, Object> viewByUserId(Long id) {
        Map<String,Object> result = new HashMap<>();
        Optional<User> user = iUserRepository.findById(id);
        if(user.isEmpty()){
            result.put("code",1);
            result.put("Message","해당 유저가 존재하지 않습니다.");
            return result;
        }
        List<RecentlyViewedProduct> views = iRecentlyViewedProductRepository.findAllByUserIdOrderByUpdatedDateDesc(id);
        List<WishList> wishLists = iWishListRepository.findAllByUserId(user.get().getId());
        List<RecentlyViewedProductDtoOutput> recentlyViewedProductDtoOutputs = new ArrayList<>();

        for (RecentlyViewedProduct view:views) {
            RecentlyViewedProductDtoOutput viewDto = RecentlyViewedProductDtoOutput.builder()
                    .id(view.getId())
                    .product(view.getProduct())
                    .isWished(false)
                    .build();
            for (WishList wishList: wishLists) {
                if(wishList.getProduct().getId() == view.getProduct().getId()){
                    viewDto.setIsWished(true);
                    break;
                }
            }
            recentlyViewedProductDtoOutputs.add(viewDto);
        }
        result.put("code",200);
        result.put("views",recentlyViewedProductDtoOutputs);
        return result;
    }
}
