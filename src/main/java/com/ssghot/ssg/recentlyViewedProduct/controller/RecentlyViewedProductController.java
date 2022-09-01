package com.ssghot.ssg.recentlyViewedProduct.controller;

import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoInput;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoOutput;
import com.ssghot.ssg.recentlyViewedProduct.service.IRecentlyViewedProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RecentlyViewedProductController {

    private final IRecentlyViewedProductService iRecentlyViewedProductService;

    /*
        1. 최근 본 상품 등록하기
        2. 최근 본 상품 삭제하기
        3. 최근 본 상품 전체 조회하기
     */

    // 1. 최근 본 상품 등록하기
    @PostMapping("/recentlyviewedproduct")
    @PreAuthorize("hasRole('ROLE_USER')")
    public RecentlyViewedProduct addRecentlyViewedProduct(@RequestBody RecentlyViewedProductDtoInput recentlyViewedProductDtoInput){
        return iRecentlyViewedProductService.addRecentlyViewedProduct(recentlyViewedProductDtoInput);
    }

    // 2. 최근 본 상품 삭제하기
    @PutMapping("/recentlyviewedproduct/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public RecentlyViewedProduct deleteRecentlyViewedProduct(@PathVariable Long id,
                                                             @RequestBody RecentlyViewedProductDtoInput recentlyViewedProductDtoInput){
        return iRecentlyViewedProductService.deleteRecentlyViewedProduct(id, recentlyViewedProductDtoInput);
    }

//    // 3. 최근 본 상품 전체 조회하기 (슬라이스 적용 X)
//    @GetMapping("/recentlyviewedproduct")
//    public List<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProduct(){
//        return iRecentlyViewedProductService.getAllRecentlyViewedProduct();
//    }

    // 4. 최근 본 상품 전체 조회하기 (슬라이스 적용 O)
    @GetMapping("/recentlyviewedproduct")
    @PreAuthorize("hasRole('ROLE_USER')")
    public Slice<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProduct(String isDeleted, Pageable pageable){
        return iRecentlyViewedProductService.getAllRecentlyViewedProductSlice(isDeleted, pageable);
    }

}
