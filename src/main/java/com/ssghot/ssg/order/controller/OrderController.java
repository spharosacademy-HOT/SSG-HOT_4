package com.ssghot.ssg.order.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.order.dto.OrderDtoInput;
import com.ssghot.ssg.order.dto.OrderDtoInputDetail;
import com.ssghot.ssg.order.dto.OrderDtoOutput;
import com.ssghot.ssg.order.dto.OrderDtoOutputList;
import com.ssghot.ssg.order.service.IOrderService;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final IOrderService iOrderService;
    private final IUserService iUserService;

    @PostMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<OrderDtoOutput> addOrder(@RequestBody OrderDtoInput orderDtoInput, HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        orderDtoInput.setUserId(userId);
        return iOrderService.addOrder(orderDtoInput);
    }
    @GetMapping
    public ResultsDtoOutput<List<OrderDtoOutput>> getAll(){
        return iOrderService.getAll();
    }

    @GetMapping("/user/detail")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<OrderDtoOutput> getOrderByUserIdAndOrderId(@RequestBody OrderDtoInputDetail orderDtoInputDetail, HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        orderDtoInputDetail.setUserId(userId);
        return iOrderService.getOrdersByUserIdAndOrderId(orderDtoInputDetail);
    }
    @GetMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultsDtoOutput<List<OrderDtoOutputList>> getOrdersByUserId(HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        return iOrderService.getOrdersByUserId(userId);
    }
    @GetMapping("/{id}")
    public ResultDtoOutput<OrderDtoOutput> getOrderByUserIdAndOrderId(@PathVariable Long id){
        return iOrderService.getOrderById(id);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteUserCoupon(@PathVariable Long id){
        iOrderService.deleteOrderById(id);
    }
}
