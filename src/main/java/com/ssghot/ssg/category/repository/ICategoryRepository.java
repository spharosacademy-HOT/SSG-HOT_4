package com.ssghot.ssg.category.repository;

import com.ssghot.ssg.category.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> {

}
