package com.ssghot.ssg.searchKeyword.repository;

import com.ssghot.ssg.searchKeyword.domain.SearchKeyword;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ISearchKeywordRepository extends JpaRepository<SearchKeyword, Long> {
    List<SearchKeyword> findAllByUserId(Long userId);
}
