package com.ssghot.ssg.categoryProductList.service;

import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoInput;
import com.ssghot.ssg.categoryProductList.repository.ICategoryProductListRepository;
import com.ssghot.ssg.product.repository.IProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CategoryProductListServiceImple implements ICategoryProductListService{

    private final ICategoryProductListRepository iCategoryProductListRepository;
    private final ICategoryRepository iCategoryRepository;
    private final ICategoryMRepository iCategoryMRepository;
    private final IProductRepository iProductRepository;

    /*
        1. 카테고리-상품 등록하기
        2. 카테고리-상품 수정하기
        3. 카테고리-상품 전체 조회하기
        4. 카테고리-상품 단일 조회하기
     */

    // 1. 카테고리-상품 등록하기
    @Override
    public CategoryProductList addCategoryProductList(CategoryProductListDtoInput categoryProductListDtoInput) {
        log.info("{}", categoryProductListDtoInput);
        CategoryProductList categoryProductList = iCategoryProductListRepository.save(CategoryProductList.builder()
                        .product(iProductRepository.findById(categoryProductListDtoInput.getProductId()).get())
                        .category(iCategoryRepository.findById(categoryProductListDtoInput.getCategoryId()).get())
                        .categoryM(iCategoryMRepository.findById(categoryProductListDtoInput.getCategoryMId()).get())
                .build());
        log.info("{}", categoryProductList);
        return categoryProductList;
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
