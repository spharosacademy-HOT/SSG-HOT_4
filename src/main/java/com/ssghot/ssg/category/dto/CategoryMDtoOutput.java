package com.ssghot.ssg.category.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryMDtoOutput {

    private Long id;
    private String name; // 중분류 이름
}
