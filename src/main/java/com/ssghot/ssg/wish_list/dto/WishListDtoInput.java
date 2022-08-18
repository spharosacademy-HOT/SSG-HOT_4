package com.ssghot.ssg.wish_list.dto;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.wish_list.domain.WishList;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class WishListDtoInput {
    private Long productId;
    private Long userId;
    public WishList toEntity(Product product, User user){
        return WishList.builder()
                .user(user)
                .product(product)
                .build();
    }

}
