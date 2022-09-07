package com.ssghot.ssg.category.dto;

import com.ssghot.ssg.category.domain.CategoryM;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDtoOutput {

    private Long id;
    private String name; // 대분류 이름
    private String imgUrl;

    private List<CategoryM> categoryMList;
}
