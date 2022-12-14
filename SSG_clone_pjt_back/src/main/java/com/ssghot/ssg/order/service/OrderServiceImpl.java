package com.ssghot.ssg.order.service;

import com.ssghot.ssg.cart.repository.ICartRepository;
import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.order.domain.Order;
import com.ssghot.ssg.order.dto.OrderDtoInput;
import com.ssghot.ssg.order.dto.OrderDtoInputDetail;
import com.ssghot.ssg.order.dto.OrderDtoOutput;
import com.ssghot.ssg.order.dto.OrderDtoOutputList;
import com.ssghot.ssg.order.repository.IOrderRepository;
import com.ssghot.ssg.orderItem.domain.OrderItem;
import com.ssghot.ssg.orderItem.dto.OrderItemDtoInput;
import com.ssghot.ssg.orderItem.service.IOrderItemService;
import com.ssghot.ssg.userCoupon.domain.UserCoupon;
import com.ssghot.ssg.userCoupon.dto.UserCouponEditDtoInput;
import com.ssghot.ssg.userCoupon.repository.IUserCouponRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//@Slf4j
@RequiredArgsConstructor
@Service
public class OrderServiceImpl implements IOrderService{
    private final IUserRepository iUserRepository;
    private final IOrderRepository iOrderRepository;
    private final IUserCouponRepository iUserCouponRepository;
    private final IOrderItemService iOrderItemService;
    private final IStockRepository iStockRepository;
    private final ICartRepository iCartRepository;
    @Override
    public ResultDtoOutput<OrderDtoOutput> addOrder(OrderDtoInput orderDtoInput) {
        Optional<User> user = iUserRepository.findById(orderDtoInput.getUserId());


        if(user.isPresent()) {
            if(orderDtoInput.getCouponId()!=null) {

                Optional<UserCoupon> userCoupon = iUserCouponRepository.findById(orderDtoInput.getCouponId());
                // ????????? ????????? ??????
                if (userCoupon.isPresent() && !userCoupon.get().isValid()) {
                    // ??????
                    UserCouponEditDtoInput couponEditDtoInput = UserCouponEditDtoInput.builder()
                            .id(userCoupon.get().getId())
                            .valid(true)
                            .build();
                    // ?????? ???
                    UserCoupon newUserCoupon = iUserCouponRepository.save(couponEditDtoInput.toEntity(userCoupon.get()));
                    Order orderEntity = orderDtoInput.toEntity(newUserCoupon, user.get());
                    return saveOrder(orderDtoInput, orderEntity);
                }
            }
            // ????????? ???????????? ?????? ??????
            Order orderEntity = orderDtoInput.toEntity(null, user.get());
            return saveOrder(orderDtoInput, orderEntity);

        }
        return getOrderDtoOutput(400,"???????????????",null);
    }


    @Override
    public ResultsDtoOutput<List<OrderDtoOutput>> getAll() {
        List<Order> orders = iOrderRepository.findAll();
        return getOrderDtoOutputList(200,"?????? ????????? ???????????????.",orders);
    }

    @Override
    public ResultsDtoOutput<List<OrderDtoOutputList>> getOrdersByUserId(Long userId) {
        // ?????? ????????????
        iOrderItemService.bulkUpdate();
        List<Order> orders = iOrderRepository.findAllByUserIdOrderByCreatedDateDesc(userId);

        if(orders.isEmpty()){
            return getOrderDtoOutputListByUserId(400,"??????????????? ???????????? ???????????????.",null);
        }
        return getOrderDtoOutputListByUserId(200,"????????? ??????????????? ??????????????????.",orders);
    }

    @Override
    public ResultDtoOutput<OrderDtoOutput> getOrdersByUserIdAndOrderId(OrderDtoInputDetail orderDtoInputDetail) {
        Optional<Order> order = iOrderRepository.findByIdAndUserId(orderDtoInputDetail.getId(), orderDtoInputDetail.getUserId());
        if(order.isPresent()){
            return getOrderDtoOutput(200,"????????? ?????? ?????? ????????? ??????????????????.",order.get());
        }
        return getOrderDtoOutput(400,"????????? ?????? ?????? ??????????????? ???????????? ???????????????.",null);
    }

    @Override
    public ResultDtoOutput<OrderDtoOutput> getOrderById(Long id) {
        Optional<Order> order = iOrderRepository.findById(id);
        if(order.isPresent()){
            return getOrderDtoOutput(200,"????????? ?????? ?????????????????????.",order.get());
        }
        return getOrderDtoOutput(400,"?????? ?????? ????????? ????????????.",null);
    }

    @Override
    public void deleteOrderById(Long id) {
        Optional<Order> order = iOrderRepository.findById(id);
        // ?????? ?????? ???????????? ???????????? ??????
        if(order.isPresent()){
            List<OrderItem> orderItems = order.get().getOrderItems();
            for (OrderItem orderItem: orderItems) {
                int result = iStockRepository.replaceStockCountInc(orderItem.getStock().getId(), orderItem.getCount());
            }

            // ????????? ???????????? ?????? ??????
            if(order.get().getUserCoupon()!=null){
                Optional<UserCoupon> userCoupon = iUserCouponRepository.findById(order.get().getUserCoupon().getId());
                if(userCoupon.isPresent()){
                    UserCouponEditDtoInput couponEditDtoInput = UserCouponEditDtoInput.builder()
                            .id(userCoupon.get().getId())
                            .valid(false)
                            .build();
                    // ?????? ???
                    iUserCouponRepository.save(couponEditDtoInput.toEntity(userCoupon.get()));
                }
            }



        }

        iOrderRepository.deleteById(id);
    }


    private ResultDtoOutput<OrderDtoOutput> saveOrder(OrderDtoInput orderDtoInput, Order orderEntity) {
        List<OrderItem> items = new ArrayList<>();

        for (OrderItemDtoInput orderItem:orderDtoInput.getOrderItems()) {
            Stock stock = iOrderItemService.findStockByStockId(orderItem.getStockId());
            if(stock.getQty()>=orderItem.getStockCount())
            {
                // ?????? ?????? ??????
                iCartRepository.deleteByUserIdAndStockId(orderDtoInput.getUserId(), stock.getId());

                OrderItem item = orderItem.toEntity(stock);
                int result = iStockRepository.replaceStockCountDec(stock.getId(), orderItem.getStockCount());
                if(result==1){
                    items.add(item);
                }
                if(result!=1){
                    return getOrderDtoOutput(400,"?????? id??? ????????? ?????????????????? ??????????????????.",null);
                }

            }
            else {
                return getOrderDtoOutput(404, "?????? ????????? ?????? ????????? ???????????? ????????????.", null);
            }
        }
        for (OrderItem order: items) {
            orderEntity.addOrderItem(order);
        }
        Order saveOrder = iOrderRepository.save(orderEntity);
        return getOrderDtoOutput(200,"???????????????!",saveOrder);
    }


    private ResultDtoOutput<OrderDtoOutput> getOrderDtoOutput(int status, String message, Order order){
        if(order!=null){
            return new ResultDtoOutput<>(status,message,apply(order));
        }
        return new ResultDtoOutput<>(status,message,null);
    }

    private ResultsDtoOutput<List<OrderDtoOutput>> getOrderDtoOutputList(int status, String message, List<Order> orders){
        if(orders!=null){
            List<OrderDtoOutput> collect = orders.stream().map(this::apply).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status,message,collect.size(),collect);
        }
        return new ResultsDtoOutput<>(status,message,0,null);
    }

    private ResultsDtoOutput<List<OrderDtoOutputList>> getOrderDtoOutputListByUserId(int status, String message, List<Order> orders){
        if(orders!=null){
            List<OrderDtoOutputList> collect = orders.stream().map(this::applyByUserID).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status,message,collect.size(),collect);
        }
        return new ResultsDtoOutput<>(status,message,0,null);
    }
    private OrderDtoOutput apply(Order order) {
        return OrderDtoOutput.builder()
                .id(order.getId())
                .amountPaid(order.getAmountPaid())
                .couponId((order.getUserCoupon() == null) ? 0 : order.getUserCoupon().getId())
                .createdDate(order.getCreatedDate())
                .deliveryAddress(order.getDeliveryAddress())
                .deliveryHomePone(order.getDeliveryHomePhone())
                .deliveryInfo(order.getDeliveryInfo())
                .deliveryName(order.getDeliveryName())
                .deliveryPay(order.getDeliveryPay())
                .deliveryTaker(order.getDeliveryTaker())
                .orderName(order.getOrderName())
                .orderEmail(order.getOrderEmail())
                .orderInfo(order.getOrderInfo())
                .orderPhone(order.getOrderPhone())
                .orderItems(iOrderItemService.getOrderItemDtoOutputList(order.getOrderItems()))
                .deliveryAddress2(order.getDeliveryAddress2())
                .deliveryPhone(order.getDeliveryPhone())
                .orderTotal(order.getOrderTotal())
                .deliveryZipcode(order.getDeliveryZipcode())
                .envoice(order.getEnvoice())
                .paymentOption(order.getPaymentOption())
                .updatedDate(order.getUpdatedDate())
                .userId(order.getUser().getId())
                .build();
    }

    private OrderDtoOutputList applyByUserID(Order order) {
        return OrderDtoOutputList.builder()
                .id(order.getId())
                .createdDate(order.getCreatedDate())
                .orderItems(iOrderItemService.getOrderItemDtoOutputList(order.getOrderItems()))
                .updatedDate(order.getUpdatedDate())
                .userId(order.getUser().getId())
                .build();
    }
}
