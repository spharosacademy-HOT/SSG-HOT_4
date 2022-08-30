package com.ssghot.ssg.searchKeyword.service;

import com.ssghot.ssg.searchKeyword.domain.SearchKeyword;
import com.ssghot.ssg.searchKeyword.dto.SearchKeywordDtoInput;
import com.ssghot.ssg.searchKeyword.dto.SearchKeywordDtoOutput;

import java.util.List;

public interface ISearchKeywordService {

    /*
        1. 검색어 등록
        2. 검색어 삭제
        3. 검색어 전체 조회
     */

    // 1. 검색어 등록
    SearchKeyword addSearchKeyword(SearchKeywordDtoInput searchKeywordDtoInput);

    // 2. 검색어 삭제
    void deleteSearchKeyword(Long id);

    // 3. 검색어 전체 조회
    List<SearchKeywordDtoOutput> getAllSearchKeyword();

}
