package com.ssghot.ssg.product.service;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.dto.ProductDtoInputAll;
import com.ssghot.ssg.product.dto.ProductDtoOutputAll;
import com.ssghot.ssg.product.dto.ProductDtoOutputIdName;
import com.ssghot.ssg.product.dto.ProductDtoOutputStockByProductId;

import java.util.List;

public interface IProductService {

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3. 상품 전체 조회하기
        4. 상품 단일 조회하기
        5. 상품-재고 현황 조회하기
        6. 상품 Id, Name 조회하기
     */

    // 1. 상품 등록하기
    Product addProduct(ProductDtoInputAll productDtoInputAll);

    // 2. 상품 수정하기
    Product editProduct(Long id, ProductDtoInputAll productDtoInputAll);

    // 3. 상품 전체 조회하기
    List<ProductDtoOutputAll> getProductAll();

    // 4. 상품 단일 조회하기
    Product getProductOne(Long productId);

    // 5. 상품-재고 현황 조회하기
    ProductDtoOutputStockByProductId getStockByProductId(Long id);

    // 6. 상품 Id, Name 조회하기
    ProductDtoOutputIdName getProductIdName(Long productId);

}
