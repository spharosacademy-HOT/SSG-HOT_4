package com.ssghot.ssg.order.service;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.order.dto.OrderDtoInput;
import com.ssghot.ssg.order.dto.OrderDtoInputDetail;
import com.ssghot.ssg.order.dto.OrderDtoOutput;
import com.ssghot.ssg.order.dto.OrderDtoOutputList;

import java.util.List;

public interface IOrderService {
    /*
        1. 주문 생성
        2. 주문 조회
        3. 주문 상세 조회
        4. 유저별 주문 조회
        5. 유저별 주문 상세 조회
        6. 주문 수정
        7. 주문 취소
     */
    ResultDtoOutput<OrderDtoOutput> addOrder(OrderDtoInput orderDtoInput);

    ResultsDtoOutput<List<OrderDtoOutput>> getAll();

    ResultsDtoOutput<List<OrderDtoOutputList>> getOrdersByUserId(Long userId);

    ResultDtoOutput<OrderDtoOutput> getOrdersByUserIdAndOrderId(OrderDtoInputDetail orderDtoInputDetail);

    ResultDtoOutput<OrderDtoOutput> getOrderById(Long id);

    void deleteOrderById(Long id);

}
