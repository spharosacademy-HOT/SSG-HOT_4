package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.CategoryMDtoInput;
import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryMServiceImple implements ICategoryMService{

    private final ICategoryMRepository iCategoryMRepository;
    private final ICategoryRepository iCategoryRepository;

    /*
        1. 카테고리 중분류 등록하기
        2. 카테고리 중분류 수정하기
        3. 카테고리 중분류 전체 조회하기
        4. 카테고리 중분류 단일 조회하기
     */

    // 1. 카테고리 중분류 등록하기
    @Override
    public CategoryM addCategoryM(CategoryMDtoInput categoryMDtoInput) {

        return iCategoryMRepository.save(
                CategoryM.builder()
                        .name(categoryMDtoInput.getName())
                        .category(categoryMDtoInput.getCategory())
                        .build()
        );
    }

    // 2. 카테고리 중분류 수정하기
    @Override
    public CategoryM editCategoryM(Long id, CategoryMDtoInput categoryMDtoInput) {
        CategoryM categoryM = iCategoryMRepository.findById(id).get();
        if(categoryM != null){
           iCategoryMRepository.save(CategoryM.builder()
                           .id(id)
                           .name(categoryMDtoInput.getName())
                           .category(categoryMDtoInput.getCategory())
                   .build());
           return categoryM;
        }

        return null;
    }

    // 3. 카테고리 중분류 전체 조회하기
    @Override
    public List<CategoryM> getAllCategoryM() {
        return iCategoryMRepository.findAll();
    }

    // 4. 카테고리 중분류 단일 조회하기
    @Override
    public CategoryM getOneCategoryM(Long categoryMId) {
        return iCategoryMRepository.findById(categoryMId).get();
    }
}
