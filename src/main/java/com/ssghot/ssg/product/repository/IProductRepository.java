package com.ssghot.ssg.product.repository;

import com.ssghot.ssg.product.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Long> {

//    List<Product> findAllByRecentlyViewedProductId(Long id);

    List<Product> findAllByCategoryMId(Long id);
}
