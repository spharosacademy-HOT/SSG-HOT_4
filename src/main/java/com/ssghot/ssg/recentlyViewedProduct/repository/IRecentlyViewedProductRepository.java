package com.ssghot.ssg.recentlyViewedProduct.repository;

import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRecentlyViewedProductRepository extends JpaRepository<RecentlyViewedProduct, Long> {
}
