package com.ssghot.ssg.cart.dto;

import com.ssghot.ssg.product.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartDtoOutput {
    private Long id;
    private Long userId;
    private Product product;
    private int count;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

}
