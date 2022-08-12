package com.ssghot.ssg.product.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductDtoOutputIdName {

    private Long id;
    private String name;
}
