package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.dto.*;

import java.util.List;

public interface IStockService {

    /*
        1. 재고 등록하기
        2. 재고 수정하기
        3. 재고 전체 조회하기
        4. 재고 단건 조회하기

        5-1. 옵션2와 재고 조회하기
        5-2. 옵션1과 재고 조회하기
        5-3. 옵션2와 재고 조회하기 (심플)
        5-4. 옵션1과 재고 조회하기 (심플)

     */

    // 1. 재고 등록하기
    Stock addStock(Stock stock);

    // 2. 재고 수정하기
    Stock editStock(Long id, Stock stock);

    // 3. 재고 전체 조회하기
    List<StockDtoOutputProductIdName> getAllStock();

    // 4. 재고 단건 조회하기
    Stock getOneStock(Long id);

    // 5-1. 옵션2와 재고 조회하기
    List<StockDtoOutputOptSecondQty> getOptSecondAndQty(int optionFirstId);

    // 5-2. 옵션1과 재고 조회하기
    List<StockDtoOutputOptFirstQty> getOptFirstAndQty(int optionSecondId);

    // 5-3. 옵션2와 재고 조회하기 (심플)
    List<StockDtoOutputOptSecondQtySimple> getOptSecondAndQtySimple(int optionFirstId);

    // 5-4. 옵션1과 재고 조회하기 (심플)
    List<StockDtoOutputOptFirstQtySimple> getOptFirstAndQtySimple(int optionSecondId);
}
