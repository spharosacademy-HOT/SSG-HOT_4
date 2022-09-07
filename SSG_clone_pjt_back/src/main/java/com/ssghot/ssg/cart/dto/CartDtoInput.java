package com.ssghot.ssg.cart.dto;

import com.ssghot.ssg.cart.domain.Cart;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class CartDtoInput {
    private Long stockId;
    private Long userId;
    private int count;
    public Cart toEntity(Stock stock, User user){
        return Cart.builder()
                .stock(stock)
                .count(getCount())
                .user(user)
                .build();
    }
}

