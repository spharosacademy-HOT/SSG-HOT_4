package com.ssghot.ssg.order.dto;

import com.ssghot.ssg.orderItem.dto.OrderItemDtoOutput;
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
public class OrderDtoOutputList {
    private Long id;
    private Long userId;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private List<OrderItemDtoOutput> orderItems;
}
