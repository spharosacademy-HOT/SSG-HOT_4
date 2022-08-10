package com.ssghot.ssg.product.service;

import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.ProductSubImgDtoInput;

import java.util.List;

public interface IProductSubImgService {

    /*
        1. 서브 이미지 등록하기
        2. 서브 이미지 수정하기
        3. 서브 이미지 전체 조회하기
        4. 서브 이미지 단일 조회하기
     */

    // 1. 서브 이미지 등록하기
    ProductSubImg addProductSubImg(ProductSubImgDtoInput productSubImgDtoInput);

    // 2. 서브 이미지 수정하기
    ProductSubImg editProductSubImg(Long id, ProductSubImgDtoInput productSubImgDtoInput);

    // 3. 서브 이미지 전체 조회하기
    List<ProductSubImg> getAll();

    // 4. 서브 이미지 단일 조회하기
    ProductSubImg getOne(Long productSubImgId);
}
