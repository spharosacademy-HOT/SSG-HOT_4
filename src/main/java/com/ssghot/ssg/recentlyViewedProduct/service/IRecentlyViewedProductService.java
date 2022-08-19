package com.ssghot.ssg.recentlyViewedProduct.service;

import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoInput;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoOutput;

import java.util.List;

public interface IRecentlyViewedProductService {

    /*
        1. 최근 본 상품 등록하기
        2. 최근 본 상품 삭제하기
        3. 최근 본 상품 전체 조회하기
     */

    // 1. 최근 본 상품 등록하기
    RecentlyViewedProduct addRecentlyViewedProduct(RecentlyViewedProductDtoInput recentlyViewedProductDtoInput);

    // 2. 최근 본 상품 삭제하기
    RecentlyViewedProduct deleteRecentlyViewedProduct(Long id, RecentlyViewedProductDtoInput recentlyViewedProductDtoInput);

    // 3. 최근 본 상품 전체 조회하기
    List<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProduct();

    List<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProductByUserId(Long userId);
}
