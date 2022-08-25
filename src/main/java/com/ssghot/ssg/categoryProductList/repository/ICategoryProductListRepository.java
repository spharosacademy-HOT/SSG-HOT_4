package com.ssghot.ssg.categoryProductList.repository;

import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICategoryProductListRepository extends JpaRepository<CategoryProductList, Long> {

    Long findByProductId(Long productId);

    List<CategoryProductList> findAllByProductId(Long productId);
}
