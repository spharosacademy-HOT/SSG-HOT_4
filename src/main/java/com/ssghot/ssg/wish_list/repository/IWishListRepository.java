package com.ssghot.ssg.wish_list.repository;

import com.ssghot.ssg.wish_list.domain.WishList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IWishListRepository extends JpaRepository<WishList,Long> {
    List<WishList> findAllByUserId(Long userId);
}
