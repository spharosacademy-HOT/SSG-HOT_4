package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.dto.StockDtoOutputProductIdName;

import java.util.List;

public interface IStockService {

    /*
        1. 재고 등록하기
        2. 재고 수정하기
        3. 재고 조회하기
     */

    // 1. 재고 등록하기
    Stock addStock(Stock stock);

    // 2. 재고 수정하기
    Stock editStock(Long id, Stock stock);

    // 3. 재고 조회하기
    List<StockDtoOutputProductIdName> getAllStock();
}
