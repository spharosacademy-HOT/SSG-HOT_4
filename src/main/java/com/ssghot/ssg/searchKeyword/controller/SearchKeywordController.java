package com.ssghot.ssg.searchKeyword.controller;

import com.ssghot.ssg.searchKeyword.domain.SearchKeyword;
import com.ssghot.ssg.searchKeyword.dto.SearchKeywordDtoInput;
import com.ssghot.ssg.searchKeyword.dto.SearchKeywordDtoOutput;
import com.ssghot.ssg.searchKeyword.service.ISearchKeywordService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SearchKeywordController {

    private final ISearchKeywordService iSearchKeywordService;

    /*
        1. 검색어 등록
        2. 검색어 삭제
        3. 검색어 전체 조회
     */

    // 1. 검색어 등록
    @PostMapping("/searchkeyword")
    public SearchKeyword addSearchKeyword(@RequestBody SearchKeywordDtoInput searchKeywordDtoInput){
        return iSearchKeywordService.addSearchKeyword(searchKeywordDtoInput);
    }

    // 2. 검색어 삭제
    @DeleteMapping("/searchkeyword/{id}")
    public void deleteSearchKeyword(@PathVariable Long id){
        iSearchKeywordService.deleteSearchKeyword(id);
    }

    // 3. 검색어 전체 조회
    @GetMapping("/searchkeyword")
    public List<SearchKeywordDtoOutput> getAllSearchKeyword(){
        return iSearchKeywordService.getAllSearchKeyword();
    }
}
