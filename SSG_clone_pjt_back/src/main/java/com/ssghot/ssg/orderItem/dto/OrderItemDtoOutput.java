package com.ssghot.ssg.orderItem.dto;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.orderItem.domain.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDtoOutput {
    private Long id;
    private Stock stock;
    private int count;
    private int price;
    private String deliveryStatus;
    private LocalDateTime deliveryInfo;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    public OrderItemDtoOutput toEntity(OrderItem orderItem){
        return OrderItemDtoOutput.builder()
                .createdDate(orderItem.getCreatedDate())
                .id(orderItem.getId())
                .updatedDate(orderItem.getUpdatedDate())
                .price(orderItem.getPrice())
                .stock(orderItem.getStock())
                .count(orderItem.getCount())
                .deliveryStatus(orderItem.getDeliveryStatus())
                .deliveryInfo(orderItem.getDeliveryInfo())
                .build();
    }
}
