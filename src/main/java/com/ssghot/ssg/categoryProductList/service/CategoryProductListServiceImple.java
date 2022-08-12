package com.ssghot.ssg.categoryProductList.service;

import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoInput;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoOutput;
import com.ssghot.ssg.categoryProductList.repository.ICategoryProductListRepository;
import com.ssghot.ssg.product.repository.IProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
        Optional<CategoryProductList> categoryProductList = iCategoryProductListRepository.findById(id);
        if(categoryProductList.isPresent()){
            return iCategoryProductListRepository.save(
                CategoryProductList.builder()
                        .id(id)
                        .product(iProductRepository.findById(categoryProductListDtoInput.getProductId()).get())
                        .category(iCategoryRepository.findById(categoryProductListDtoInput.getCategoryId()).get())
                        .categoryM(iCategoryMRepository.findById(categoryProductListDtoInput.getCategoryMId()).get())
                        .build()
            );
        }
        return null;
    }

    // 3. 카테고리-상품 전체 조회하기
    @Override
    public List<CategoryProductListDtoOutput> getAllCategoryProductList() {

        List<CategoryProductList> categoryProductLists = iCategoryProductListRepository.findAll();
        List<CategoryProductListDtoOutput> categoryProductListDtoOutputs = new ArrayList<>();

        categoryProductLists.forEach(
                categoryProductList -> {
                    categoryProductListDtoOutputs.add(
                            CategoryProductListDtoOutput.builder()
                                    .id(categoryProductList.getId())
                                    .category(categoryProductList.getCategory())
                                    .categoryM(categoryProductList.getCategoryM())
                                    .product(categoryProductList.getProduct())
                                    .build()
                    );
                }
        );

//        return iCategoryProductListRepository.findAll();
        return categoryProductListDtoOutputs;
    }

    // 4. 카테고리-상품 단일 조회하기
    @Override
    public CategoryProductListDtoOutput getOneCategoryProductList(Long id) {

        Optional<CategoryProductList> categoryProductList = iCategoryProductListRepository.findById(id);
//        CategoryProductListDtoOutput categoryProductListDtoOutput = null;
        if(categoryProductList.isPresent()){
            return CategoryProductListDtoOutput.builder()
                    .id(id)
                    .category(categoryProductList.get().getCategory())
                    .categoryM(categoryProductList.get().getCategoryM())
                    .product(categoryProductList.get().getProduct())
                    .build();
        }
//        return iCategoryProductListRepository.findById(id).get();
        return null;
    }
}
