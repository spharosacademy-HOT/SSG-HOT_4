package com.ssghot.ssg.product.repository;

import com.ssghot.ssg.product.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Long> {

//    List<Product> findAllByRecentlyViewedProductId(Long id);

    List<Product> findAllByCategoryMId(Long id);

//    List<Product> findAllByRecentlyViewedProductId(Long id);

    Page<Product> findByNameContaining(String keyword, Pageable pageable);

    Page<Product> findByNameContainingAndCategoryMId(String keyword, Long id, Pageable pageable);

    Page<Product> findByNameContainingAndDiscountPriceBetween(String keyword, int minPrice, int maxPrice, Pageable pageable);

    Page<Product> findByNameContainingAndAndCategoryMIdAndDiscountPriceBetween(String keyword, Long id, int minPrice, int maxPrice, Pageable pageable);
}
