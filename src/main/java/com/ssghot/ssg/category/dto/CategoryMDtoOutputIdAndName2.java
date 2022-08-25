package com.ssghot.ssg.category.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryMDtoOutputIdAndName2 {

    private Long id;
    private String name; // 중분류 이름

//    private Category category;
}
