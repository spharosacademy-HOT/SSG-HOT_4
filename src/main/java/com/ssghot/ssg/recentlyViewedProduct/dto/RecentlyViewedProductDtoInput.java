package com.ssghot.ssg.recentlyViewedProduct.dto;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import com.ssghot.ssg.users.domain.User;
import lombok.*;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class RecentlyViewedProductDtoInput {
    private Long productId;
    private Long userId;
    public RecentlyViewedProduct toEntity(Product product, User user){
        return RecentlyViewedProduct.builder()
                .product(product)
                .user(user)
                .build();
    }
}
