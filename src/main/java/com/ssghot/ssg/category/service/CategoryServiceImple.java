package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.*;
import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
//@Slf4j
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
    public List<CategoryListDto> getAllCategory() {

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
//        System.out.println("categoryList.size() : " + categoryList.size());

//        ArrayList<Object> arrayList = new ArrayList<>();
//
//        int len = categoryList.size();
//        List<Category> categoryArr = new ArrayList<>();
//        int j =1;
//        for(int i=0 ;i<len;i++){
//
//            if(i%4==0){
//                CategoryListDto.builder().categoryList(categoryArr)
//                        .row(j).build();
//                j++;
//                break;
//            }
//            categoryArr.add(categoryList.get(i));
//        }
//
//
//        return categoryDtoOutputOnlyIdAndNameList2;

        ArrayList<Object> arrayList = new ArrayList<>();
        int len = categoryList.size();
        List<CategoryDtoOutputOnlyIdAndName2> categoryArr = new ArrayList<>();
        List<CategoryListDto> categoryListDtos = new ArrayList<>();
        int j = 1;
        for(int i=0; i<len; i++){
            categoryArr.add(categoryDtoOutputOnlyIdAndNameList2.get(i));
            if(i==3 || i==7 || i==11){
                CategoryListDto build = CategoryListDto.builder().category(categoryArr)
                        .row(j).build();
                j++;
                categoryArr = new ArrayList<>();
                categoryListDtos.add(build);
            }
        }
        CategoryListDto build = CategoryListDto.builder().category(categoryArr)
                .row(j).build();
        categoryListDtos.add(build);
//        CategoryListDtoOutput.builder().category(category).build();

        return categoryListDtos;
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
                    .categoryMList(allByCategoryId)
                    .build();
        }

        return categoryDtoOutput;
    }

    @Override
    public List<Category> getAllCategory1() {
        return iCategoryRepository.findAll();
    }
}
