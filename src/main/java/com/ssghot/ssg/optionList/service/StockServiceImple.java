package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.dto.StockDtoOutputProductIdName;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.dto.ProductDtoOutputIdName;
import com.ssghot.ssg.product.repository.IProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class StockServiceImple implements IStockService{

    private final IStockRepository iStockRepository;
    private final IProductRepository iProductRepository;

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
    public List<StockDtoOutputProductIdName> getAllStock() {
        List<Stock> stockList = iStockRepository.findAll();
        List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();

        List<Product> productList = iProductRepository.findAll();
        List<ProductDtoOutputIdName> productDtoOutputIdNameList = new ArrayList<>();

        productList.forEach(
                product -> {
                    productDtoOutputIdNameList.add(
                            ProductDtoOutputIdName.builder()
                                    .id(product.getId())
                                    .name(product.getName())
                                    .build()
                    );
                }
        );

        stockList.forEach(
                stock -> {
                    stockDtoOutputProductIdNameList.add(
                            StockDtoOutputProductIdName.builder()
                                    .id(stock.getId())
                                    .qty(stock.getQty())
                                    .optionFirstId(stock.getOptionFirst().getId())
                                    .optionSecondId(stock.getOptionSecond().getId())
                                    .productId(stock.getId())
                                    .build()
                    );
                }
        );
        return stockDtoOutputProductIdNameList;

    }
}
