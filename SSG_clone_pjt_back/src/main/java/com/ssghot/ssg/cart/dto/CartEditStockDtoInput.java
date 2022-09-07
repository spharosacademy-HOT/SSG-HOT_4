package com.ssghot.ssg.cart.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class CartEditStockDtoInput {
    private Long id;
    private Long stockId;
    private Long userId;
}
