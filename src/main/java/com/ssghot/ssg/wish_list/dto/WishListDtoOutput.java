package com.ssghot.ssg.wish_list.dto;

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
public class WishListDtoOutput {
    private Long id;
    private Long userId;
    private Product product;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

}
