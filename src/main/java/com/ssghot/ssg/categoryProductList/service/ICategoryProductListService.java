package com.ssghot.ssg.categoryProductList.service;

import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoInput;

import java.util.List;

public interface ICategoryProductListService {

    /*
        1. 카테고리-상품 등록하기
        2. 카테고리-상품 수정하기
        3. 카테고리-상품 전체 조회하기
        4. 카테고리-상품 단일 조회하기
     */

    // 1. 카테고리-상품 등록하기
    CategoryProductList addCategoryProductList(CategoryProductListDtoInput categoryProductListDtoInput);

    // 2. 카테고리-상품 수정하기
    CategoryProductList editCategoryProductList(Long id, CategoryProductListDtoInput categoryProductListDtoInput);

    // 3. 카테고리-상품 전체 조회하기
    List<CategoryProductList> getAllCategoryProductList();

    // 4. 카테고리-상품 단일 조회하기
    CategoryProductList getOneCategoryProductList(Long id);

}
