package com.ssghot.ssg.cart.dto;

import com.ssghot.ssg.optionList.domain.Stock;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartByUserDtoOutput {
    private Long id;
    private Long userId;
    private Stock stock;
    private int count;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private List<OptionListDtoOutput> optionList;
}
