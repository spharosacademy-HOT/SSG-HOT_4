package com.ssghot.ssg.recentlyViewedProduct.service;

import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoInput;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoOutput;
import com.ssghot.ssg.recentlyViewedProduct.repository.IRecentlyViewedProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RecentlyViewedProductServiceImple implements IRecentlyViewedProductService{

    private final IRecentlyViewedProductRepository iRecentlyViewedProductRepository;

    /*
        1. 최근 본 상품 등록하기
        2. 최근 본 상품 삭제하기
        3. 최근 본 상품 전체 조회하기
     */

    // 1. 최근 본 상품 등록하기

    @Override
    public RecentlyViewedProduct addRecentlyViewedProduct(RecentlyViewedProductDtoInput recentlyViewedProductDtoInput) {
        RecentlyViewedProduct recentlyViewedProduct = iRecentlyViewedProductRepository.save(
                RecentlyViewedProduct.builder()
                        .product(recentlyViewedProductDtoInput.getProduct())
                        .user(recentlyViewedProductDtoInput.getUser())
                        .isDeleted("N")
                        .build()
        );

        return recentlyViewedProduct;
    }

    // 2. 최근 본 상품 삭제하기
    @Override
    public RecentlyViewedProduct deleteRecentlyViewedProduct(Long id, RecentlyViewedProductDtoInput recentlyViewedProductDtoInput) {
        Optional<RecentlyViewedProduct> recentlyViewedProduct = iRecentlyViewedProductRepository.findById(id);
        if(recentlyViewedProduct.isPresent()){
            return iRecentlyViewedProductRepository.save(
                    RecentlyViewedProduct.builder()
                            .id(id)
                            .isDeleted("Y")
                            .product(recentlyViewedProduct.get().getProduct())
                            .user(recentlyViewedProduct.get().getUser())
                            .build()
            );
        }
        return null;
    }

    // 3. 최근 본 상품 전체 조회하기
    @Override
    public List<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProduct() {
        List<RecentlyViewedProduct> recentlyViewedProductList = iRecentlyViewedProductRepository.findAll();
        List<RecentlyViewedProductDtoOutput> recentlyViewedProductDtoOutputList = new ArrayList<>();

        recentlyViewedProductList.forEach(
                recentlyViewedProduct -> {
                    if(recentlyViewedProduct.getIsDeleted().equals("N")){
                        recentlyViewedProductDtoOutputList.add(
                                RecentlyViewedProductDtoOutput.builder()
                                        .id(recentlyViewedProduct.getId())
                                        .productId(recentlyViewedProduct.getProduct().getId())
                                        .userId(recentlyViewedProduct.getUser().getId())
                                        .isDeleted(recentlyViewedProduct.getIsDeleted())
                                        .build()
                        );
                    }
                }
        );
        return recentlyViewedProductDtoOutputList;
    }
}
