package com.ssghot.ssg.orderItem.service;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.orderItem.domain.OrderItem;
import com.ssghot.ssg.orderItem.dto.OrderItemDtoInput;
import com.ssghot.ssg.orderItem.dto.OrderItemDtoOutput;
import com.ssghot.ssg.orderItem.repository.IOrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//@Slf4j
@RequiredArgsConstructor
@Service
public class OrderItemServiceImpl implements IOrderItemService{
    private final IOrderItemRepository iOrderItemRepository;
    private final IStockRepository iStockRepository;
    @Override
    public OrderItem addOrderItem(OrderItemDtoInput orderItemDtoInput) {
        Optional<Stock> stock = iStockRepository.findById(orderItemDtoInput.getStockId());
        if(stock.isPresent()){
            OrderItem orderItem = iOrderItemRepository.save(orderItemDtoInput.toEntity(stock.get()));
            return orderItem;
        }
        return null;
    }

    @Override
    public Stock findStockByStockId(Long stockId) {
        Optional<Stock> stock = iStockRepository.findById(stockId);
        if(stock.isPresent()){
            return stock.get();
        }
        return null;
    }

    @Override
    public List<OrderItemDtoOutput> getOrderItemDtoOutputList(List<OrderItem> orderItems) {
        List<OrderItemDtoOutput> collect = orderItems.stream().map(orderItem -> OrderItemDtoOutput.builder()
                .createdDate(orderItem.getCreatedDate())
                .id(orderItem.getId())
                .updatedDate(orderItem.getUpdatedDate())
                .price(orderItem.getPrice())
                .stock(orderItem.getStock())
                .count(orderItem.getCount())
                .deliveryStatus(orderItem.getDeliveryStatus())
                .deliveryInfo(orderItem.getDeliveryInfo())
                .build()).collect(Collectors.toList());
        return collect;
    }

    @Override
    public int bulkUpdate() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime update = now.plusDays(2);
        return iOrderItemRepository.bulkDeliveryInfo(update,now);
    }
}
