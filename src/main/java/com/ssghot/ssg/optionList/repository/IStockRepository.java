package com.ssghot.ssg.optionList.repository;

import com.ssghot.ssg.optionList.domain.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IStockRepository extends JpaRepository<Stock, Long> {
}
