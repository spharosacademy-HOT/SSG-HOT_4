package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.dto.*;
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
    @Override
    public Stock addStock(Stock stock) {
//        List<Stock> stockList = iStockRepository.findAll();
//        stockList.forEach(stocks -> {
//            if(stocks.getProduct().getId() == stock.getProduct().getId()
//            && stocks.getOptionFirst().getId() == stock.getOptionFirst().getId()
//            && stocks.getOptionSecond().getId() == stock.getOptionSecond().getId()) {
//                System.out.println("stocks.getQty() = " + stocks.getQty());
//                System.out.println("stock.getQty() = " + stock.getQty());
//                int addQty = stocks.addQty(stock.getQty());
//                System.out.println("stocks.getQty() = " + stocks.getQty());
//                System.out.println("stocks.getId() = " + stocks.getId());
//                iStockRepository.save(Stock.builder()
//                        .id(stocks.getId())
//                        .qty(addQty)
//                        .product(stocks.getProduct())
//                        .optionFirst(stocks.getOptionFirst())
//                        .optionSecond(stocks.getOptionSecond())
//                        .build()
//                );
//            } else {
//                iStockRepository.save(Stock.builder()
//                        .id(stock.getId())
//                        .qty(stock.getQty())
//                        .product(stock.getProduct())
//                        .optionFirst(stock.getOptionFirst())
//                        .optionSecond(stock.getOptionSecond())
//                        .build()
//                );
//            }
//        });

        return iStockRepository.save(stock);
    }

    // 2. 재고 수정하기
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

    // 3. 재고 전체 조회하기
    @Override
    public List<StockDtoOutputProductIdName> getAllStock() {

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

        List<Stock> stockList = iStockRepository.findAll();
        List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();

        stockList.forEach(
                stock -> {
                    stockDtoOutputProductIdNameList.add(
                            StockDtoOutputProductIdName.builder()
                                    .stockId(stock.getId())
                                    .qty(stock.getQty())
                                    .optionFirstId(stock.getOptionFirst().getId())
                                    .optionSecondId(stock.getOptionSecond().getId())
                                    .productId(stock.getProduct().getId())
                                    .build()
                    );
                }
        );
        return stockDtoOutputProductIdNameList;

    }

    // 4. 재고 단건 조회하기
    @Override
    public Stock getOneStock(Long id) {

        Optional<Stock> stock = iStockRepository.findById(id);
        if(stock.isPresent()){
            return stock.get();
        }

        return null;
    }

    // 5-1. 옵션2와 재고 조회하기
    @Override
    public List<StockDtoOutputOptSecondQty> getOptSecondAndQty(int optionFirstId, Long productId) {

        List<Stock> stockList = iStockRepository.findOptionSecondAndStockQty(optionFirstId, productId);
        List<StockDtoOutputOptSecondQty> stockDtoOutputOptSecondQtyList = new ArrayList<>();
        stockList.forEach(stock -> {
            stockDtoOutputOptSecondQtyList.add(
                    StockDtoOutputOptSecondQty.builder()
                            .stockId(stock.getId())
                            .optionSecond(stock.getOptionSecond())
                            .qty(stock.getQty())
                            .discountPrice(stock.getProduct().getDiscountPrice())
                            .productId(stock.getProduct().getId())
                            .productName(stock.getProduct().getName())
                            .optionFirst(stock.getOptionFirst())
                            .titleImgUrl(stock.getProduct().getTitleImgUrl())
                            .build()
            );
        });

        return stockDtoOutputOptSecondQtyList;
    }

    // 5-2. 옵션1과 재고 조회하기
    @Override
    public List<StockDtoOutputOptFirstQty> getOptFirstAndQty(int optionSecondId, Long productId) {
        List<Stock> stockList = iStockRepository.findOptionFirstAndStockQty(optionSecondId, productId);
        List<StockDtoOutputOptFirstQty> stockDtoOutputOptFirstQties = new ArrayList<>();
        stockList.forEach(stock -> {
            stockDtoOutputOptFirstQties.add(
                    StockDtoOutputOptFirstQty.builder()
                            .stockId(stock.getId())
                            .optionFirst(stock.getOptionFirst())
                            .qty(stock.getQty())
                            .discountPrice(stock.getProduct().getDiscountPrice())
                            .optionSecond(stock.getOptionSecond())
                            .productDetail(stock.getProduct().getDetail())
                            .productId(stock.getProduct().getId())
                            .productName(stock.getProduct().getName())
                            .titleImgUrl(stock.getProduct().getTitleImgUrl())
                            .build()
            );
        });

        return stockDtoOutputOptFirstQties;
    }

    // 5-3. 옵션2와 재고 조회하기 (심플)
    @Override
    public List<StockDtoOutputOptSecondQtySimple> getOptSecondAndQtySimple(int optionFirstId, Long productId) {

        List<Stock> stockList = iStockRepository.findOptionSecondAndStockQty(optionFirstId, productId);
        List<StockDtoOutputOptSecondQtySimple> stockDtoOutputOptSecondQtyList = new ArrayList<>();
        stockList.forEach(stock -> {
            stockDtoOutputOptSecondQtyList.add(
                    StockDtoOutputOptSecondQtySimple.builder()
                            .stockId(stock.getId())
                            .id(stock.getOptionSecond().getId())
                            .name(stock.getOptionSecond().getName())
                            .qty(stock.getQty())
                            .build()
            );
        });

        return stockDtoOutputOptSecondQtyList;
    }

    // 5-4. 옵션1과 재고 조회하기 (심플)
    @Override
    public List<StockDtoOutputOptFirstQtySimple> getOptFirstAndQtySimple(int optionSecondId, Long productId) {
        List<Stock> stockList = iStockRepository.findOptionFirstAndStockQty(optionSecondId, productId);
        List<StockDtoOutputOptFirstQtySimple> stockDtoOutputOptFirstQties = new ArrayList<>();
        stockList.forEach(stock -> {
            stockDtoOutputOptFirstQties.add(
                    StockDtoOutputOptFirstQtySimple.builder()
                            .stockId(stock.getId())
                            .id(stock.getOptionFirst().getId())
                            .name(stock.getOptionFirst().getName())
                            .qty(stock.getQty())
                            .build()
            );
        });

        return stockDtoOutputOptFirstQties;
    }
}
