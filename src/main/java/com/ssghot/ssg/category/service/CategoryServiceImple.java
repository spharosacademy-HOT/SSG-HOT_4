package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.CategoryDtoInput;
import com.ssghot.ssg.category.dto.CategoryDtoOutput;
import com.ssghot.ssg.category.dto.CategoryDtoOutputOnlyIdAndName2;
import com.ssghot.ssg.category.dto.CategoryMDtoOutputIdAndName2;
import com.ssghot.ssg.category.repository.ICategoryMRepository;
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
    private final ICategoryMRepository iCategoryMRepository;

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
                    .imgUrl(categoryDtoInput.getImgUrl())
                    .build()
            );
        }
        return null;
    }

    // 3. 카테고리 대분류 전체 조회하기
    @Override
    public List<CategoryDtoOutputOnlyIdAndName2> getAllCategory() {

        List<Category> categoryList = iCategoryRepository.findAll();
        List<CategoryDtoOutputOnlyIdAndName2> categoryDtoOutputOnlyIdAndNameList2 = new ArrayList<>();

        categoryList.forEach(
                category -> {

                    List<CategoryM> categoryMList = iCategoryMRepository.findAllByCategoryId(category.getId());
                    List<CategoryMDtoOutputIdAndName2> categoryMDtoOutputIdAndNameList2 = new ArrayList<>();

                    categoryMList.forEach(categoryM -> {
                        categoryMDtoOutputIdAndNameList2.add(
                                CategoryMDtoOutputIdAndName2.builder()
                                        .id(categoryM.getId())
                                        .name(categoryM.getName())
                                        .build()
                        );
                    });

                    categoryDtoOutputOnlyIdAndNameList2.add(
                            CategoryDtoOutputOnlyIdAndName2.builder()
                                    .id(category.getId())
                                    .name(category.getName())
                                    .imgUrl(category.getImgUrl())
                                    .categoryMList(categoryMDtoOutputIdAndNameList2)
                                    .build()
                    );
                }
        );
//        for(int i=1; i<categoryDtoOutputOnlyIdAndNameList2.size(); i++){
//
//        }

        return categoryDtoOutputOnlyIdAndNameList2;
    }

    // 4. 카테고리 대분류 단일 조회하기
    @Override
    public CategoryDtoOutput getOneCategory(Long categoryId) {

        Optional<Category> category = iCategoryRepository.findById(categoryId);
        CategoryDtoOutput categoryDtoOutput = null;

        List<CategoryM> allByCategoryId = iCategoryMRepository.findAllByCategoryId(category.get().getId());

        if (category.isPresent()) {
            categoryDtoOutput = CategoryDtoOutput.builder()
                    .id(category.get().getId())
                    .name(category.get().getName())
                    .categoryMList(iCategoryMRepository.findAllByCategoryId(category.get().getId()))
                    .build();
        }

        return categoryDtoOutput;
    }

    @Override
    public List<Category> getAllCategory1() {
        return iCategoryRepository.findAll();
    }
}
