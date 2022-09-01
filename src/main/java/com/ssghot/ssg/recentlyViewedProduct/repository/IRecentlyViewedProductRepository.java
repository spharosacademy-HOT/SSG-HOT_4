package com.ssghot.ssg.recentlyViewedProduct.repository;

import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IRecentlyViewedProductRepository extends JpaRepository<RecentlyViewedProduct, Long> {
    List<RecentlyViewedProduct> findAllByUserId(Long userId);

    List<RecentlyViewedProduct> findAllByProductId(Long productId);

    RecentlyViewedProduct findByProductId(Long productId);

    Page<RecentlyViewedProduct> findByIsDeleted(String keyword, Pageable pageable);

}
