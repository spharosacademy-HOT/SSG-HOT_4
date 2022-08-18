package com.ssghot.ssg.recentlyViewedProduct.dto;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import lombok.Getter;

@Getter
public class RecentlyViewedProductDtoInput {

    private Product product;
    private User user;
    private String deleteYn;
}
