package com.ssghot.ssg.categoryProductList.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryProductListDtoOutput {

    private Long id;

//    private Product product;
    private Long productId;

//    private Category category;
    private Long categoryId;

//    private CategoryM categoryM;
    private Long categoryMId;

}
