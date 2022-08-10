package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.CategoryMDtoInput;

import java.util.List;


public interface ICategoryMService {

    /*
        1. 카테고리 중분류 등록하기
        2. 카테고리 중분류 수정하기
        3. 카테고리 중분류 전체 조회하기
        4. 카테고리 중분류 단일 조회하기
     */

    // 1. 카테고리 중분류 등록하기
    CategoryM addCategoryM(CategoryMDtoInput categoryMDtoInput);

    // 2. 카테고리 중분류 수정하기
    CategoryM editCategoryM(Long id, CategoryMDtoInput categoryMDtoInput);

    // 3. 카테고리 중분류 전체 조회하기
    List<CategoryM> getAllCategoryM();

    // 4. 카테고리 중분류 단일 조회하기
    CategoryM getOneCategoryM(Long categoryMId);

}
