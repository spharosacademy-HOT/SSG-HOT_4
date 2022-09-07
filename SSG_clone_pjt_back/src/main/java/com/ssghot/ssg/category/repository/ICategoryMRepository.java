package com.ssghot.ssg.category.repository;

import com.ssghot.ssg.category.domain.CategoryM;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICategoryMRepository extends JpaRepository<CategoryM, Long> {

    List<CategoryM> findAllByCategoryId(Long id);
}
