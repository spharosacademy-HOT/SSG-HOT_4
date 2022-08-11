package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class StockServiceImple implements IStockService{

    private final IStockRepository iStockRepository;

    @Override
    public Stock addStock(Stock stock) {
        return iStockRepository.save(stock);
    }

    @Override
    public Stock editStock(Long id, Stock stock) {
        Optional<Stock> stockList = iStockRepository.findById(id);
        if(stockList.isPresent()){
            return iStockRepository.save(
                    Stock.builder()
                            .id(id)
                            .qty(stock.getQty())
                            .optionFirst(stock.getOptionFirst())
                            .optionSecond(stock.getOptionSecond())
                            .product(stock.getProduct())
                            .build()
            );
        }

        return null;
    }

    @Override
    public List<Stock> getAllStock() {
        return iStockRepository.findAll();
    }
}
