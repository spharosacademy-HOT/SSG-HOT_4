package com.ssghot.ssg.product.repository;

import com.ssghot.ssg.product.domain.ProductSubImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductSubImgRepository extends JpaRepository<ProductSubImg, Long> {

    List<ProductSubImg> findAllByProductId(Long productId);

    // "select m from Member m left join fetch m.team
    // SELECT m FROM Member m LEFT OUTER JOIN m.team t
    @Query("select p from ProductSubImg p left join p.product t")
    List<Long> allByProductId(Long productId);
    List<ProductSubImg> findOnlyAllByProductId(Long productId);

    ProductSubImg findByProductId(Long productId);
}
