package com.ssghot.ssg.categoryProductList.controller;

import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoInput;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoOutput;
import com.ssghot.ssg.categoryProductList.service.ICategoryProductListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryProductListController {

    private final ICategoryProductListService iCategoryProductListService;

    /*
        1. 카테고리-상품 등록하기
        2. 카테고리-상품 수정하기
        3. 카테고리-상품 전체 조회하기
        4. 카테고리-상품 단일 조회하기
     */

    // 1. 카테고리-상품 등록하기
    @PostMapping("/categoryproduct")
    public CategoryProductList addCategoryProductList(@RequestBody CategoryProductListDtoInput categoryProductListDtoInput){
        return iCategoryProductListService.addCategoryProductList(categoryProductListDtoInput);
    }

    // 2. 카테고리-상품 수정하기
    @PutMapping("/categoryproduct/{id}")
    public CategoryProductList editCategoryProductList(@PathVariable Long id,
                                                       @RequestBody CategoryProductListDtoInput categoryProductListDtoInput){

        return iCategoryProductListService.editCategoryProductList(id, categoryProductListDtoInput);
    }

    // 3. 카테고리-상품 전체 조회하기
    @GetMapping("/categoryproduct")
    public List<CategoryProductListDtoOutput> getAllCategoryProductList(){
        return iCategoryProductListService.getAllCategoryProductList();
    }

    // 4. 카테고리-상품 단일 조회하기
    @GetMapping("/categoryproduct/{id}")
    public CategoryProductListDtoOutput getOneCategoryProductList(@PathVariable Long id){
        return iCategoryProductListService.getOneCategoryProductList(id);
    }
}
