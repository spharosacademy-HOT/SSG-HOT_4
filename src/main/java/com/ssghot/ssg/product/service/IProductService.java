package com.ssghot.ssg.product.service;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.dto.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;

import java.util.List;

public interface IProductService {

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3-1. 상품 전체 조회하기 (전체 컬럼)
        3-2. 상품 전체 조회하기 (각각의 아이디만)
        3-3. 상품 전체 조회하기 (페이지)
        3-4. 상품 전체 조회하기 (슬라이스)
        4. 상품 단일 조회하기
        5. 상품-재고 현황 조회하기
        6. 상품 Id, Name 조회하기
     */

    // 1. 상품 등록하기
    Product addProduct(ProductDtoInputAll productDtoInputAll);

    // 2. 상품 수정하기
    Product editProduct(Long id, ProductDtoInputAll productDtoInputAll);

    // 3-1. 상품 전체 조회하기 (전체 컬럼)
    List<ProductDtoOutputAll> getProductAll();

    // 3-2. 상품 전체 조회하기 (각각의 아이디만)
    List<ProductDtoOutputAllAndEachId> getProductAllAndEachId();

    // 3-3. 상품 전체 조회하기 (페이지)
    Page<ProductDtoOutputAll> getProductAllPage(Pageable pageable);

    // 3-4. 상품 전체 조회하기 (슬라이스)
    Slice<ProductDtoOutputAll> getProductAllSlice(Pageable pageable);

    // 4. 상품 단일 조회하기
    ProductDtoOutputAllDetail getProductOne(Long productId);

    // 5. 상품-재고 현황 조회하기
    ProductDtoOutputStockByProductId getStockByProductId(Long id);

    // 6. 상품 Id, Name 조회하기
    ProductDtoOutputIdName getProductIdName(Long productId);

}
