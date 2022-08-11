package com.ssghot.ssg.cart.repository;

import com.ssghot.ssg.cart.domain.Cart;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface ICartRepository extends JpaRepository<Cart,Long> {
    Optional<Cart> findByUserAndProduct(User user, Product product);

     List<Cart> findByUserId(Long userId);

    @Transactional
    @Modifying
    @Query("update Cart c set c.count = :count where c.id = :id")
    int replaceCount(Long id,int count);

}
