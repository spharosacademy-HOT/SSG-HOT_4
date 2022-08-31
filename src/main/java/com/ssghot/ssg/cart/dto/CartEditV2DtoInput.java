package com.ssghot.ssg.cart.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class CartEditV2DtoInput {
    private Long userId;
    private Long cartId;
    private Long productId;
    private int optionFirstId;
    private int optionSecondId;
}
