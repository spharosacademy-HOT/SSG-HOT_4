package com.ssghot.ssg.qna.repository;

import com.ssghot.ssg.qna.domain.Qna;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface IQnaRepository extends JpaRepository<Qna,Long> {
    @EntityGraph(attributePaths = {"children","user"})
    List<Qna> findAllByProductIdAndParentId(Long productId, Long id);

    @EntityGraph(attributePaths = {"children","user"})
    Page<Qna> findAllByProductIdAndParentId(Long productId, Long id, Pageable pageable);

    @EntityGraph(attributePaths = {"children"})
    List<Qna> findAllByUserId(Long userId);


    @Override
    @EntityGraph(attributePaths = {"children"})
    List<Qna> findAll();

    @Transactional
    @Modifying
    @Query("update Qna q set q.answer = true where q.id = :id")
    int updateAnswer(Long id);
}
