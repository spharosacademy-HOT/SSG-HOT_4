package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.CategoryMDtoInput;
import com.ssghot.ssg.category.dto.CategoryMDtoOutput;
import com.ssghot.ssg.category.dto.CategoryMDtoOutputIdAndName;

import java.util.List;


public interface ICategoryMService {

    /*
        1. 카테고리 중분류 등록하기
        2. 카테고리 중분류 수정하기
        3. 카테고리 중분류 전체 조회하기
        4. 카테고리 중분류 단일 조회하기

        5. 카테고리 중분류 단일 조회하기(유저용)
     */

    // 1. 카테고리 중분류 등록하기
    CategoryM addCategoryM(CategoryMDtoInput categoryMDtoInput);

    // 2. 카테고리 중분류 수정하기
    CategoryM editCategoryM(Long id, CategoryMDtoInput categoryMDtoInput);

    // 3. 카테고리 중분류 전체 조회하기 (유저 정보 X)
    List<CategoryMDtoOutputIdAndName> getAllCategoryM(Long categoryLId);

    // 3. 카테고리 중분류 전체 조회하기 (유저 정보 O, 좋아요 정보 받기)
    List<CategoryMDtoOutputIdAndName> getAllCategoryMWithUserWished(Long categoryLId, Long userId);

    // 4. 카테고리 중분류 단일 조회하기
    CategoryMDtoOutput getOneCategoryM(Long categoryMId);


    CategoryMDtoOutput getOneCategoryMWithUser(Long id, Long userId);
}
