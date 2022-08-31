package com.ssghot.ssg.optionList.controller;

import com.ssghot.ssg.optionList.domain.OptionFirst;
import com.ssghot.ssg.optionList.domain.OptionSecond;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.dto.*;
import com.ssghot.ssg.optionList.service.IOptionFirstService;
import com.ssghot.ssg.optionList.service.IOptionSecondService;
import com.ssghot.ssg.optionList.service.IStockService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OptionListController {

    private final IStockService iStockService;
    private final IOptionFirstService iOptionFirstService;
    private final IOptionSecondService iOptionSecondService;

    /*
        1-1. 옵션1 등록
        1-2. 옵션1 수정
        1-3. 옵션1 조회

        2-1. 옵션2 등록
        2-2. 옵션2 수정
        2-3. 옵션2 조회

        3-1. 재고 등록
        3-2. 재고 수정
        3-3. 재고 전체 조회
        3-4. 재고 단건 조회

        4-1. 옵션2와 재고 조회하기
        4-2. 옵션1과 재고 조회하기
        4-3. 옵션2와 재고 조회하기 (심플)
        4-4. 옵션1과 재고 조회하기 (심플)

     */

    // 1-1. 옵션1 등록
    @PostMapping("/optionfirst")
    public OptionFirst addOptionFirst(@RequestBody OptionFirst optionFirst){
        return iOptionFirstService.addOptionFirst(optionFirst);
    }

    // 1-2. 옵션1 수정
    @PutMapping("/optionfirst/{id}")
    public OptionFirst editOptionFirst(@PathVariable int id, @RequestBody OptionFirst optionFirst){
        return iOptionFirstService.editOptionFirst(id, optionFirst);
    }

    // 1-3. 옵션1 조회
    @GetMapping("/optionfirst")
    public List<OptionFirst> getAllOptionFirst(){
        return iOptionFirstService.getAllOptionFirst();
    }


    // 2-1. 옵션2 등록
    @PostMapping("/optionsecond")
    public OptionSecond addOptionSecond(@RequestBody OptionSecond optionSecond){
        return iOptionSecondService.addOptionSecond(optionSecond);
    }

    // 2-2. 옵션2 수정
    @PutMapping("/optionsecond/{id}")
    public OptionSecond editOptionSecond(@PathVariable int id, @RequestBody OptionSecond optionSecond){
        return iOptionSecondService.editOptionSecond(id, optionSecond);
    }

    // 2-3. 옵션2 조회
    @GetMapping("/optionsecond")
    public List<OptionSecond> getAllOptionSecond(){
        return iOptionSecondService.getAllOptionSecond();
    }

    // 3-1. 재고 등록
    @PostMapping("/stock")
    public Stock addStock(@RequestBody Stock stock){
        return iStockService.addStock(stock);
    }

    // 3-2. 재고 수정
    @PutMapping("/stock/{id}")
    public Stock editStock(@PathVariable Long id, @RequestBody Stock stock){
        return iStockService.editStock(id, stock);
    }

    // 3-3. 재고 전체 조회
    @GetMapping("/stock")
    public List<StockDtoOutputProductIdName> getAllStock(){
        return iStockService.getAllStock();
    }

    // 3-4. 재고 단건 조회
    @GetMapping("/stock/{id}")
    public Stock getOneStock(@PathVariable Long id){
        return iStockService.getOneStock(id);
    }

    // 4-1. 옵션2와 재고 조회하기
    @GetMapping("/option1/option2/{id}/{productId}")
    public List<StockDtoOutputOptSecondQty> getOption2AndStockQty(@PathVariable int id, @PathVariable Long productId){
        return iStockService.getOptSecondAndQty(id, productId);
    }

    //4-2. 옵션1과 재고 조회하기
    @GetMapping("/option2/option1/{id}/{productId}")
    public List<StockDtoOutputOptFirstQty> getOption1AndStockQty(@PathVariable int id, @PathVariable Long productId){
        return iStockService.getOptFirstAndQty(id, productId);
    }

    // 4-3. 옵션2와 재고 조회하기 (심플)
    @GetMapping("/option1/option2/simple/{id}/{productId}")
    public List<StockDtoOutputOptSecondQtySimple> getOption2AndStockQtySimple(@PathVariable int id, @PathVariable Long productId){
        return iStockService.getOptSecondAndQtySimple(id, productId);
    }

    //4-4. 옵션1과 재고 조회하기 (심플)
    @GetMapping("/option2/option1/simple/{id}/{productId}")
    public List<StockDtoOutputOptFirstQtySimple> getOption1AndStockQtySimple(@PathVariable int id, @PathVariable Long productId){
        return iStockService.getOptFirstAndQtySimple(id, productId);
    }
}
