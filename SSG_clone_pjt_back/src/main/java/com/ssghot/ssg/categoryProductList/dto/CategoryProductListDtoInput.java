package com.ssghot.ssg.categoryProductList.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategoryProductListDtoInput {

    private Long id;

    private Long productId;

    private Long categoryId;

    private Long categoryMId;

}
