package com.ssghot.ssg.order.repository;

import com.ssghot.ssg.order.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IOrderRepository extends JpaRepository<Order,Long> {
    Optional<Order> findByIdAndUserId(Long id, Long userId);
    List<Order> findAllByUserId(Long userId);
}
