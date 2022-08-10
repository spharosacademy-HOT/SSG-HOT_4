package com.ssghot.ssg.categoryProductList.service;

import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoInput;
import com.ssghot.ssg.categoryProductList.repository.ICategoryProductListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryProductListServiceImple implements ICategoryProductListService{

    private final ICategoryProductListRepository iCategoryProductListRepository;

    /*
        1. 카테고리-상품 등록하기
        2. 카테고리-상품 수정하기
        3. 카테고리-상품 전체 조회하기
        4. 카테고리-상품 단일 조회하기
     */

    // 1. 카테고리-상품 등록하기
    @Override
    public CategoryProductList addCategoryProductList(CategoryProductListDtoInput categoryProductListDtoInput) {
        return iCategoryProductListRepository.save(CategoryProductList.builder()
                        .product(categoryProductListDtoInput.getProduct())
                        .categoryM(categoryProductListDtoInput.getCategoryM())
                .build());
    }

    // 2. 카테고리-상품 수정하기
    @Override
    public CategoryProductList editCategoryProductList(Long id, CategoryProductListDtoInput categoryProductListDtoInput) {
        return null;
    }

    // 3. 카테고리-상품 전체 조회하기
    @Override
    public List<CategoryProductList> getAllCategoryProductList() {
        return iCategoryProductListRepository.findAll();
    }

    // 4. 카테고리-상품 단일 조회하기
    @Override
    public CategoryProductList getOneCategoryProductList(Long id) {
        return iCategoryProductListRepository.findById(id).get();
    }
}
