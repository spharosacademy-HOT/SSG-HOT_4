package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.dto.CategoryDtoInput;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<Category> getAllCategory() {


        return iCategoryRepository.findAll();
    }

    // 4. 카테고리 대분류 단일 조회하기
    @Override
    public Category getOneCategory(Long categoryId) {
        return iCategoryRepository.findById(categoryId).get();
    }
}
