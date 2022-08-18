package com.ssghot.ssg.orderItem.repository;

import com.ssghot.ssg.orderItem.domain.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderItemRepository extends JpaRepository<OrderItem,Long> {
}
