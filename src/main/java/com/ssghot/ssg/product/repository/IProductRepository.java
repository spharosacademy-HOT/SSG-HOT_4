package com.ssghot.ssg.product.repository;

import com.ssghot.ssg.product.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product, Long> {



}
