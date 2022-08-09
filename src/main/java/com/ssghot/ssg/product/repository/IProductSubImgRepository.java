package com.ssghot.ssg.product.repository;

import com.ssghot.ssg.product.domain.ProductSubImg;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IProductSubImgRepository extends JpaRepository<ProductSubImg, Long> {

    List<ProductSubImg> findAllByProductId(Long productId);
}
