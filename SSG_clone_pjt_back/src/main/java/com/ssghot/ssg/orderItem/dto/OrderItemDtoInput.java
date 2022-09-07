package com.ssghot.ssg.orderItem.dto;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.orderItem.domain.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDtoInput {
    private Long stockId;
    private int stockCount;
    private int stockPrice;

    public OrderItem toEntity(Stock stock){
        return OrderItem.builder()
                .stock(stock)
                .count(getStockCount())
                .price(getStockPrice())
                .build();
    }
}
