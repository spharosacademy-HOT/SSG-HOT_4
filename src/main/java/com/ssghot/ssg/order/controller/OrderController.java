package com.ssghot.ssg.order.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.order.dto.OrderDtoInput;
import com.ssghot.ssg.order.dto.OrderDtoInputDetail;
import com.ssghot.ssg.order.dto.OrderDtoOutput;
import com.ssghot.ssg.order.dto.OrderDtoOutputList;
import com.ssghot.ssg.order.service.IOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final IOrderService iOrderService;

    @PostMapping
    public ResultDtoOutput<OrderDtoOutput> addOrder(@RequestBody OrderDtoInput orderDtoInput){
        return iOrderService.addOrder(orderDtoInput);
    }
    @GetMapping
    public ResultsDtoOutput<List<OrderDtoOutput>> getAll(){
        return iOrderService.getAll();
    }

    @GetMapping("/user")
    public ResultDtoOutput<OrderDtoOutput> getOrderByUserIdAndOrderId(@RequestBody OrderDtoInputDetail orderDtoInputDetail){
        return iOrderService.getOrdersByUserIdAndOrderId(orderDtoInputDetail);
    }
    @GetMapping("/user/{id}")
    public ResultsDtoOutput<List<OrderDtoOutputList>> getOrdersByUserId(@PathVariable Long id){
        return iOrderService.getOrdersByUserId(id);
    }
    @GetMapping("/{id}")
    public ResultDtoOutput<OrderDtoOutput> getOrderByUserIdAndOrderId(@PathVariable Long id){
        return iOrderService.getOrderById(id);
    }

}
