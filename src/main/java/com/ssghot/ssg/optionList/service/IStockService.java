package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.Stock;

import java.util.List;

public interface IStockService {

    /*
        1. 옵션2 등록하기
        2. 옵션2 수정하기
        3. 옵션2 조회하기
     */

    // 1. 옵션2 등록하기
    Stock addStock(Stock stock);

    // 2. 옵션2 수정하기
    Stock editStock(Long id, Stock stock);

    // 3. 옵션2 조회하기
    List<Stock> getAllStock();
}
