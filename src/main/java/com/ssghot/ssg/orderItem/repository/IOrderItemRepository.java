package com.ssghot.ssg.orderItem.repository;

import com.ssghot.ssg.orderItem.domain.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

public interface IOrderItemRepository extends JpaRepository<OrderItem,Long> {

    @Modifying
    @Transactional
    @Query("update OrderItem o set o.deliveryInfo = :update where o.deliveryInfo >= :now")
    int bulkDeliveryInfo(LocalDateTime update,LocalDateTime now);

}
