package com.ssghot.ssg.category.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class CategoryDtoOutputOnlyIdAndName2 {

    private Long id;
    private String name; // 대분류 이름
    private String imgUrl;

    private List<CategoryMDtoOutputIdAndName2> categoryMList;
}
