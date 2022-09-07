package com.ssghot.ssg.category.dto;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryMDtoInput {

    private Long id;
    private String name; // 중분류 이름

    private Category category;
    private CategoryProductList categoryProductList;
}
