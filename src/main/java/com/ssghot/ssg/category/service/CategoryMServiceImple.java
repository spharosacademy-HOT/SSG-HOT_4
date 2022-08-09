package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.repository.ICategoryMRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryMServiceImple implements ICategoryMService{

    private final ICategoryMRepository iCategoryMRepository;

    /*
        1. 카테고리 중분류 등록하기
        2. 카테고리 중분류 수정하기
        3. 카테고리 중분류 전체 조회하기
        4. 카테고리 중분류 단일 조회하기
     */

    // 1. 카테고리 중분류 등록하기
    @Override
    public CategoryM addCategoryM(CategoryM categoryM) {
        return iCategoryMRepository.save(categoryM);
    }

    // 2. 카테고리 중분류 수정하기
    @Override
    public CategoryM editCategoryM(Long id, CategoryM categoryM) {
        CategoryM categoryM1 = iCategoryMRepository.findById(id).get();
        return iCategoryMRepository.save(categoryM1);
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
