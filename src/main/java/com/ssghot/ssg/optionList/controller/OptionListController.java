package com.ssghot.ssg.optionList.controller;

import com.ssghot.ssg.optionList.domain.OptionFirst;
import com.ssghot.ssg.optionList.domain.OptionSecond;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.dto.StockDtoOutputProductIdName;
import com.ssghot.ssg.optionList.service.IOptionFirstService;
import com.ssghot.ssg.optionList.service.IOptionSecondService;
import com.ssghot.ssg.optionList.service.IStockService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ssghot")
@RequiredArgsConstructor
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
        3-3. 재고 조회
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

    // 3-3. 재고 조회
    @GetMapping("/stock")
    public List<StockDtoOutputProductIdName> getAllStock(){
        return iStockService.getAllStock();
    }
}
