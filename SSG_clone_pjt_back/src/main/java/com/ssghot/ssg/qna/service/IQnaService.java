package com.ssghot.ssg.qna.service;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.qna.dto.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IQnaService {

    /*
        1. qna 생성
        2. 전체 조회
        3. 상품별 조회
        4. 유저별 조회
        5. 상세 조회
        6. qna 수정
        7. qna 삭제
        8. qna 대댓글
     */

    ResultDtoOutput<QnaDtoOutput> addQna(QnaDtoInput qnaDtoInput);

    ResultsDtoOutput<List<QnaDtoOutput>> getAll();

    ResultsDtoOutput<List<QnaDtoOutput>> getQnaByProductId(Long productId);

    Page<QnaDtoOutput> getQnaByProductId2(Long productId, Pageable pageable);

    ResultsDtoOutput<List<QnaDtoOutput>> getQnaByUserId(Long userId);
    ResultDtoOutput<QnaDtoOutput> getQnaById(Long id);

    ResultDtoOutput<QnaDtoOutput> editQna(QnaEditDtoInput qnaEditDtoInput);

    void deleteQna(Long id);

    ResultDtoOutput<QnaAdminDtoOutput> addReply(QnaAdminDtoInput qnaAdminDtoInput);


}
