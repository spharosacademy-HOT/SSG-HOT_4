package com.ssghot.ssg.optionList.repository;

import com.ssghot.ssg.optionList.domain.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface IStockRepository extends JpaRepository<Stock, Long> {

    List<Stock> findAllByProductId(Long productId);


    Stock findByProductId(Long productId);

    @Transactional
    @Modifying
    @Query("update Stock s set s.qty = s.qty + :count where s.id = :id")
    int replaceStockCountInc(Long id,int count);

    @Transactional
    @Modifying
    @Query("update Stock s set s.qty = s.qty - :count where s.id = :id")
    int replaceStockCountDec(Long id,int count);
}
