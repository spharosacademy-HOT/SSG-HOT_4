package com.ssghot.ssg.recentlyViewedProduct.service;

import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoInput;

import java.util.Map;

public interface IRecentlyViewedProductService {

    /*
        1. 최근 본 상품 등록하기
        2. 최근 본 상품 삭제하기
        3. 최근 본 상품 전체 조회하기
     */

    // 1. 최근 본 상품 등록하기
    Map<String,Object> addView(RecentlyViewedProductDtoInput recentlyViewedProductDtoInput);

    // 2. 최근 본 상품 삭제하기
    void deleteView(Long id);

    // 3. 최근 본 상품 전체 조회하기 (슬라이스 적용 X)
    Map<String,Object> viewByUserId(Long id);

    // 4. 최근 본 상품 전체 조회하기 (슬라이스 적용 O)
//    Slice<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProductSlice(String keyword, Pageable pageable);
}
