package com.ssghot.ssg.category.controller;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.*;
import com.ssghot.ssg.category.service.ICategoryMService;
import com.ssghot.ssg.category.service.ICategoryService;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {
    private final IUserService iUserService;
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
    public List<CategoryListDto> getAllCategory(){
        return iCategoryService.getAllCategory();
    }

    @GetMapping("/category2")
    public List<Category> getAll2(){
        return iCategoryService.getAllCategory1();
    }

    // 3-2. 카테고리 중분류 전체 조회하기
    @GetMapping("/categorym")
    public List<CategoryMDtoOutputIdAndName> getAllCategoryM(){
        return iCategoryMService.getAllCategoryM();
    }

    // 4-1. 카테고리 대분류 단일 조회하기
    @GetMapping("/category/{id}")
    public CategoryDtoOutput getOneCategory(@PathVariable Long id){
        return iCategoryService.getOneCategory(id);
    }
    // 4-2. 카테고리 중분류 단일 조회하기
    @GetMapping("/categorym/{id}")
    public CategoryMDtoOutput getOneCategoryM(@PathVariable Long id, @RequestHeader HttpHeaders headers){
        log.info(headers.toSingleValueMap().toString());
        Long userId = iUserService.getUserByTokenFix(headers);
//        Long userId = iUserService.getUserByToken(request);
        if(userId != null)
        return iCategoryMService.getOneCategoryMWithUser(id,userId);

        return iCategoryMService.getOneCategoryM(id);
    }
}
