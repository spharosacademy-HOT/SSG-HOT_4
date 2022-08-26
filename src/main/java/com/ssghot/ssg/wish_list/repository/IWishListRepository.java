package com.ssghot.ssg.wish_list.repository;

import com.ssghot.ssg.wish_list.domain.WishList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IWishListRepository extends JpaRepository<WishList,Long> {
    List<WishList> findAllByUserId(Long userId);
    Optional<WishList> findByProductIdAndUserId(Long productId, Long userId);

    List<WishList> findAllByProductId(Long productId);
}
