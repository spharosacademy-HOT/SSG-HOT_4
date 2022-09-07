package com.ssghot.ssg.product.dto;

import com.ssghot.ssg.product.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductSubImgDtoInput {

    private Long id;

    private String subImgUrl;
    private String subImgTxt;

    private Product product;

}
