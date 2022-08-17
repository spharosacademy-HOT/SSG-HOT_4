package com.ssghot.ssg.product.service;

import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.ProductSubImgDtoInput;
import com.ssghot.ssg.product.dto.ProductSubImgDtoOutputAll;
import com.ssghot.ssg.product.dto.ProductSubImgDtoOutputOnlyId;

import java.util.List;

public interface IProductSubImgService {

    /*
        1. 서브 이미지 등록하기
        2. 서브 이미지 수정하기
        3-1. 서브 이미지 전체 조회하기 (아이디만)
        3-2. 서브 이미지 전체 조회하기 (전체 컬럼)
        4. 서브 이미지 단일 조회하기
     */

    // 1. 서브 이미지 등록하기
    ProductSubImg addProductSubImg(ProductSubImgDtoInput productSubImgDtoInput);

    // 2. 서브 이미지 수정하기
    ProductSubImg editProductSubImg(Long id, ProductSubImgDtoInput productSubImgDtoInput);

    // 3-1. 서브 이미지 전체 조회하기 (아이디만)
    List<ProductSubImgDtoOutputOnlyId> getAllOnlyId();

    // 3-2. 서브 이미지 전체 조회하기 (전체 컬럼)
    List<ProductSubImgDtoOutputAll> getAll();

    // 4. 서브 이미지 단일 조회하기
    ProductSubImgDtoOutputAll getOne(Long productSubImgId);
}
