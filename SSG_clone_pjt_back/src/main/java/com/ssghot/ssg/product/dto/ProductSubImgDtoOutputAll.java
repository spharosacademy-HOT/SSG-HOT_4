package com.ssghot.ssg.product.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductSubImgDtoOutputAll {

    private Long id;

    private String subImgUrl;
    private String subImgTxt;

    private Long productId;
}
