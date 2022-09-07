package com.ssghot.ssg.recentlyViewedProduct.dto;

import com.ssghot.ssg.product.domain.Product;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecentlyViewedProductDtoOutput {

    private Long id;
    private Boolean isWished;
    private Product product;
}
