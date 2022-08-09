package com.ssghot.ssg.category.controller;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.CategoryDtoInput;
import com.ssghot.ssg.category.service.ICategoryMService;
import com.ssghot.ssg.category.service.ICategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ssghot")
@RequiredArgsConstructor
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
    public CategoryM addCategoryM(@RequestBody CategoryM categoryM){
        return iCategoryMService.addCategoryM(categoryM);
    }

    // 2-1. 카테고리 대분류 수정하기
    @PostMapping("/category/{id}")
    public Category editCategory(@PathVariable Long id, @RequestBody CategoryDtoInput categoryDtoInput){
        return iCategoryService.editCategory(id, categoryDtoInput);
    }
    // 2-2. 카테고리 중분류 수정하기
    @PostMapping("/categoryM/{id}")
    public CategoryM editCategoryM(@PathVariable Long id, @RequestBody CategoryM categoryM){
        return iCategoryMService.editCategoryM(id, categoryM);
    }

    // 3-1. 카테고리 대분류 전체 조회하기
    @GetMapping("/category")
    public List<Category> getAllCategory(){
        return iCategoryService.getAllCategory();
    }
    // 3-2. 카테고리 중분류 전체 조회하기
    @GetMapping("/categorym")
    public List<CategoryM> getAllCategoryM(){
        return iCategoryMService.getAllCategoryM();
    }

    // 4-1. 카테고리 대분류 단일 조회하기
    @GetMapping("/category/{id}")
    public Category getOneCategory(@PathVariable Long id){
        return iCategoryService.getOneCategory(id);
    }
    // 4-2. 카테고리 중분류 단일 조회하기
    @GetMapping("/categorym/{id}")
    public CategoryM getOneCategoryM(@PathVariable Long id){
        return iCategoryMService.getOneCategoryM(id);
    }
}
