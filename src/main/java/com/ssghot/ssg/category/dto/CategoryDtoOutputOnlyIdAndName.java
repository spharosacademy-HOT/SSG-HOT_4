package com.ssghot.ssg.category.dto;

import com.ssghot.ssg.category.domain.CategoryM;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class CategoryDtoOutputOnlyIdAndName {

    private Long id;
    private String name; // 대분류 이름

    private List<CategoryM> categoryMList;
}
