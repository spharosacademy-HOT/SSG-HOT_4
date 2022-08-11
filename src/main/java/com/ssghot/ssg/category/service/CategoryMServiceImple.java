package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.CategoryMDtoInput;
import com.ssghot.ssg.category.dto.CategoryMDtoOutput;
import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public List<CategoryMDtoOutput> getAllCategoryM() {

        List<CategoryM> categoryMList = iCategoryMRepository.findAll();
        List<CategoryMDtoOutput> categoryMDtoOutputList = new ArrayList<>();

        categoryMList.forEach(
                categoryM -> {
                    categoryMDtoOutputList.add(
                            CategoryMDtoOutput.builder()
                                    .id(categoryM.getId())
                                    .name(categoryM.getName())
                                    .build()
                    );
                }
        );

        return categoryMDtoOutputList;
    }

    // 4. 카테고리 중분류 단일 조회하기
    @Override
    public CategoryMDtoOutput getOneCategoryM(Long categoryMId) {

        Optional<CategoryM> categoryM = iCategoryMRepository.findById(categoryMId);

        CategoryMDtoOutput categoryMDtoOutput = null;

        if(categoryM.isPresent()){
            categoryMDtoOutput = CategoryMDtoOutput.builder()
                    .id(categoryM.get().getId())
                    .name(categoryM.get().getName())
                    .build();
        }

        return categoryMDtoOutput;
    }
}
