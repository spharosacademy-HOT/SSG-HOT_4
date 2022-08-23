package com.ssghot.ssg.cart.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartEditStockDtoInput {
    private Long id;
    private Long stockId;
    private Long userId;
}
