package com.ssghot.ssg.orderItem.service;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.orderItem.domain.OrderItem;
import com.ssghot.ssg.orderItem.dto.OrderItemDtoInput;
import com.ssghot.ssg.orderItem.dto.OrderItemDtoOutput;

import java.util.List;

public interface IOrderItemService {
    /*
        1. order 아이템 주문 추가
     */
    OrderItem addOrderItem(OrderItemDtoInput orderItemDtoInput);
    Stock findStockByStockId(Long stockId);

    List<OrderItemDtoOutput> getOrderItemDtoOutputList(List<OrderItem> orderItems);

    int bulkUpdate();
}
