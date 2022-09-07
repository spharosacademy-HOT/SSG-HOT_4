package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.dto.CategoryDtoInput;
import com.ssghot.ssg.category.dto.CategoryDtoOutput;
import com.ssghot.ssg.category.dto.CategoryListDto;

import java.util.List;

public interface ICategoryService {

    /*
        1. 카테고리 대분류 등록하기
        2. 카테고리 대분류 수정하기
        3. 카테고리 대분류 전체 조회하기
        4. 카테고리 대분류 단일 조회하기
     */

    // 1. 카테고리 대분류 등록하기
    Category addCategory(CategoryDtoInput categoryDtoInput);

    // 2. 카테고리 대분류 수정하기
    Category editCategory(Long categoryId, CategoryDtoInput categoryDtoInput);

    // 3. 카테고리 대분류 전체 조회하기
    List<CategoryListDto> getAllCategory();

    // 4. 카테고리 대분류 단일 조회하기
    CategoryDtoOutput getOneCategory(Long categoryId);

    List<Category> getAllCategory1();


}
