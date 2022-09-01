package com.ssghot.ssg.recentlyViewedProduct.repository;

import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IRecentlyViewedProductRepository extends JpaRepository<RecentlyViewedProduct, Long> {

    List<RecentlyViewedProduct> findAllByUserIdOrderByUpdatedDateDesc(Long userId);

    Optional<RecentlyViewedProduct> findByUserIdAndProductId(Long id, Long id1);
}
