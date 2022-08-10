package com.ssghot.ssg.product.dto;

import com.ssghot.ssg.product.domain.Product;
import lombok.Data;

@Data
public class ProductSubImgDtoInput {

    private String subImgUrl;
    private String subImgTxt;

    private Product product;

}
