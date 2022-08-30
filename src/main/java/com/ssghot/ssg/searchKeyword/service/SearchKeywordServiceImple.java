package com.ssghot.ssg.searchKeyword.service;

import com.ssghot.ssg.searchKeyword.domain.SearchKeyword;
import com.ssghot.ssg.searchKeyword.dto.SearchKeywordDtoInput;
import com.ssghot.ssg.searchKeyword.dto.SearchKeywordDtoOutput;
import com.ssghot.ssg.searchKeyword.repository.ISearchKeywordRepository;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchKeywordServiceImple implements ISearchKeywordService{

    private final ISearchKeywordRepository iSearchKeywordRepository;

    private final IUserRepository iUserRepository;
    /*
        1. 검색어 등록
        2. 검색어 삭제
        3. 검색어 전체 조회
     */

    // 1. 검색어 등록
    @Override
    public SearchKeyword addSearchKeyword(SearchKeywordDtoInput searchKeywordDtoInput) {
        return iSearchKeywordRepository.save(
                SearchKeyword.builder()
//                        .id(searchKeywordDtoInput.getSearchKeywordId())
                        .searchKeyword(searchKeywordDtoInput.getSearchKeyword())
                        .user(iUserRepository.findById(searchKeywordDtoInput.getUserId()).get())
                        .build()
        );
    }

    // 2. 검색어 삭제
    @Override
    public void deleteSearchKeyword(Long id) {
        iSearchKeywordRepository.deleteById(id);
    }

    // 3. 검색어 전체 조회
    @Override
    public List<SearchKeywordDtoOutput> getAllSearchKeyword() {

        List<SearchKeyword> searchKeywordList = iSearchKeywordRepository.findAll();
        List<SearchKeywordDtoOutput> searchKeywordDtoOutputList = new ArrayList<>();

        searchKeywordList.forEach(searchKeyword -> {
            searchKeywordDtoOutputList.add(
            SearchKeywordDtoOutput.builder()
                    .searchKeywordId(searchKeyword.getId())
                    .searchKeyword(searchKeyword.getSearchKeyword())
                    .userId(searchKeyword.getUser().getId())
                    .userName(searchKeyword.getUser().getName())
                    .build()
            );
        });

        return searchKeywordDtoOutputList;
    }
}
