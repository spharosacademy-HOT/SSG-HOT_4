package com.ssghot.ssg.category.dto;

import com.ssghot.ssg.category.domain.Category;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryMDtoOutput2 {

    private Long id;
    private String name; // 중분류 이름

    private Category category;
}
