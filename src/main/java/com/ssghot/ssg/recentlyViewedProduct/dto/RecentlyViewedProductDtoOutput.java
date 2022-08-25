package com.ssghot.ssg.recentlyViewedProduct.dto;

import com.ssghot.ssg.product.domain.Product;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecentlyViewedProductDtoOutput {

    private Long id;
    private Long userId;
    private String isDeleted;

    private Product product;
}
