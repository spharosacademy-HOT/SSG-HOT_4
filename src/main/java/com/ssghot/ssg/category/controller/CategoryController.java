package com.ssghot.ssg.category.controller;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.*;
import com.ssghot.ssg.category.service.ICategoryMService;
import com.ssghot.ssg.category.service.ICategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {

    private final ICategoryService iCategoryService;
    private final ICategoryMService iCategoryMService;

    /*
        1-1. 카테고리 대분류 등록하기
        1-2. 카테고리 중분류 등록하기

        2-1. 카테고리 대분류 수정하기
        2-2. 카테고리 중분류 수정하기

        3-1. 카테고리 대분류 전체 조회하기
        3-2. 카테고리 중분류 전체 조회하기

        4-1. 카테고리 대분류 단일 조회하기
        4-2. 카테고리 중분류 단일 조회하기
     */

    // 1-1. 카테고리 대분류 등록하기
    @PostMapping("/category")
    public Category addCategory(@RequestBody CategoryDtoInput categoryDtoInput){
        return iCategoryService.addCategory(categoryDtoInput);
    }
    // 1-2. 카테고리 중분류 등록하기
    @PostMapping("/categorym")
    public CategoryM addCategoryM(@RequestBody CategoryMDtoInput categoryMDtoInput){
        return iCategoryMService.addCategoryM(categoryMDtoInput);
    }

    // 2-1. 카테고리 대분류 수정하기
    @PutMapping("/category/{id}")
    public Category editCategory(@PathVariable Long id, @RequestBody CategoryDtoInput categoryDtoInput){
        return iCategoryService.editCategory(id, categoryDtoInput);
    }
    // 2-2. 카테고리 중분류 수정하기
    @PutMapping("/categorym/{id}")
    public CategoryM editCategoryM(@PathVariable Long id, @RequestBody CategoryMDtoInput categoryMDtoInput){
        return iCategoryMService.editCategoryM(id, categoryMDtoInput);
    }

    // 3-1. 카테고리 대분류 전체 조회하기
    @GetMapping("/category")
    public List<CategoryDtoOutputOnlyIdAndName> getAllCategory(){
        return iCategoryService.getAllCategory();
    }
    // 3-2. 카테고리 중분류 전체 조회하기
    @GetMapping("/categorym")
    public List<CategoryMDtoOutput> getAllCategoryM(){
        return iCategoryMService.getAllCategoryM();
    }

    // 4-1. 카테고리 대분류 단일 조회하기
    @GetMapping("/category/{id}")
    public CategoryDtoOutput getOneCategory(@PathVariable Long id){
        return iCategoryService.getOneCategory(id);
    }
    // 4-2. 카테고리 중분류 단일 조회하기
    @GetMapping("/categorym/{id}")
    public CategoryMDtoOutput getOneCategoryM(@PathVariable Long id){
        return iCategoryMService.getOneCategoryM(id);
    }
}
