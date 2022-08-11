package com.ssghot.ssg.cart.dto;

import com.ssghot.ssg.cart.domain.Cart;
import com.ssghot.ssg.optionList.domain.Stock;
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
    private Long stockId;
    private Long userId;
    private int count;
    public Cart toEntity(Stock stock, User user){
        return Cart.builder()
                .stock(stock)
                .count(count)
                .user(user)
                .build();
    }
}

