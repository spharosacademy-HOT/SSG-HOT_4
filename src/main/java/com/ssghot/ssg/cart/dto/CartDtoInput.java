package com.ssghot.ssg.cart.dto;

import com.ssghot.ssg.cart.domain.Cart;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartDtoInput {
    private Long productId;
    private Long userId;
    private int count;
    public Cart toEntity(Product product, User user){
        return Cart.builder()
                .product(product)
                .count(count)
                .user(user)
                .build();
    }
}

