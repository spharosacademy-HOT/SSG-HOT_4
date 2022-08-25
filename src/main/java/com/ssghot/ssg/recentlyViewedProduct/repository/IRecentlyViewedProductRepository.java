package com.ssghot.ssg.recentlyViewedProduct.repository;

import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IRecentlyViewedProductRepository extends JpaRepository<RecentlyViewedProduct, Long> {
    List<RecentlyViewedProduct> findAllByUserId(Long userId);

    List<RecentlyViewedProduct> findAllByProductId(Long productId);
}
