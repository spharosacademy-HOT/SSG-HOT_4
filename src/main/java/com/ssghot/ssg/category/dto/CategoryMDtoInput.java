package com.ssghot.ssg.category.dto;

import com.ssghot.ssg.category.domain.Category;
import lombok.Data;

@Data
public class CategoryMDtoInput {

    private Long id;
    private String name; // 중분류 이름

    private Category category;
}
