package com.ssghot.ssg.optionList.repository;

import com.ssghot.ssg.optionList.domain.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

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

    //    @Query("select s from Stock s join s.optionfirst o where o.id = :ofid")
    @Query("select s from Stock s where s.optionFirst.id = :oprtionfirstid")
    List<Stock> findOptionSecondAndStockQty(@Param("oprtionfirstid") int id);

    @Query("select s from Stock s where s.optionSecond.id = :oprtionsecondid")
    List<Stock> findOptionFirstAndStockQty(@Param("oprtionsecondid") int id);

    Optional<Stock> findByProductIdAndOptionFirstIdAndOptionSecondId(Long productId,int optionFirstId, int optionSecondId);
//    @Query("select s from Stock s where s.product.id = :productId and s.optionFirst.id = :optionFirstId and s.optionSecond.id = :optionSecondId")
//    Optional<Stock> findStockByProductIdAndOptionFirstIdAndOptionSecondId(Long productId,int optionFirstId, int optionSecondId);
}
