package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.dto.CategoryDtoInput;
import com.ssghot.ssg.category.dto.CategoryDtoOutput;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryServiceImple implements ICategoryService{

    private final ICategoryRepository iCategoryRepository;

    /*
        1. 카테고리 대분류 등록하기
        2. 카테고리 대분류 수정하기
        3. 카테고리 대분류 전체 조회하기
        4. 카테고리 대분류 단일 조회하기
     */

    // 1. 카테고리 대분류 등록하기
    @Override
    public Category addCategory(CategoryDtoInput categoryDtoInput) {

        return iCategoryRepository.save(
                Category.builder()
                        .name(categoryDtoInput.getName())
                        .build());
    }

    // 2. 카테고리 대분류 수정하기
    @Override
    public Category editCategory(Long categoryId, CategoryDtoInput categoryDtoInput) {
        Category category = iCategoryRepository.findById(categoryId).get();
//        Optional<Category> category = iCategoryRepository.findById(categoryDtoInput.getId());
        if(category != null){
            return iCategoryRepository.save(
                    Category.builder()
                    .id(categoryId)
                    .name(categoryDtoInput.getName())
                    .build()
            );
        }
        return null;
    }

    // 3. 카테고리 대분류 전체 조회하기
    @Override
    public List<CategoryDtoOutput> getAllCategory() {

        List<Category> categoryList = iCategoryRepository.findAll();
        List<CategoryDtoOutput> categoryDtoOutputList = new ArrayList<>();

        categoryList.forEach(
                category -> {
                    categoryDtoOutputList.add(
                            CategoryDtoOutput.builder()
                                    .id(category.getId())
                                    .name(category.getName())
                                    .build()
                    );
                }
        );

        return categoryDtoOutputList;
    }

    // 4. 카테고리 대분류 단일 조회하기
    @Override
    public CategoryDtoOutput getOneCategory(Long categoryId) {

        Optional<Category> category = iCategoryRepository.findById(categoryId);
        CategoryDtoOutput categoryDtoOutput = null;
        if (category.isPresent()) {
            categoryDtoOutput = CategoryDtoOutput.builder()
                    .id(category.get().getId())
                    .name(category.get().getName())
                    .build();
        }

        return categoryDtoOutput;
    }
}
