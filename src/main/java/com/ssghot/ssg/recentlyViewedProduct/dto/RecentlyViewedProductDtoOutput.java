package com.ssghot.ssg.recentlyViewedProduct.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecentlyViewedProductDtoOutput {

    private Long id;
    private Long productId;
    private Long userId;
    private String isDeleted;
}
