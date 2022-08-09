package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.CategoryM;

import java.util.List;


public interface ICategoryMService {

    /*
        1. 카테고리 중분류 등록하기
        2. 카테고리 중분류 수정하기
        3. 카테고리 중분류 전체 조회하기
        4. 카테고리 중분류 단일 조회하기
     */

    // 1. 카테고리 중분류 등록하기
    CategoryM addCategoryM(CategoryM categoryM);

    // 2. 카테고리 중분류 수정하기
    CategoryM editCategoryM(Long id, CategoryM categoryM);

    // 3. 카테고리 중분류 전체 조회하기
    List<CategoryM> getAllCategoryM();

    // 4. 카테고리 중분류 단일 조회하기
    CategoryM getOneCategoryM(Long categoryMId);

}
