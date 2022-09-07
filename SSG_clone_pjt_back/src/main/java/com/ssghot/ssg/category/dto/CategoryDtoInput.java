package com.ssghot.ssg.category.dto;

import lombok.Data;

@Data
public class CategoryDtoInput {

    private Long id;
    private String name; // 대분류 이름
    private String imgUrl;
}
