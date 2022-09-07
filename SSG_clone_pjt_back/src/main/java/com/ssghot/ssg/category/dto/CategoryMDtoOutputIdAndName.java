package com.ssghot.ssg.category.dto;

import com.ssghot.ssg.product.dto.ProductDtoOutputAll;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class CategoryMDtoOutputIdAndName {

    private Long id;
    private String name; // 중분류 이름

    private CategoryDtoOutputLargeId category;
    private List<ProductDtoOutputAll> productList;
}
