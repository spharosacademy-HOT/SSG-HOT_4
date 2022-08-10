package com.ssghot.ssg.categoryProductList.repository;

import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryProductListRepository extends JpaRepository<CategoryProductList, Long> {
}
