package com.ssghot.ssg.review.service;

import com.ssghot.ssg.review.domain.Review;
import com.ssghot.ssg.review.dto.ReviewDtoInput;
import com.ssghot.ssg.review.dto.ReviewDtoOutput;
import com.ssghot.ssg.review.dto.ReviewDtoOutputOption;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IReviewService {

    /*
        1. 리뷰 등록하기
        2. 리뷰 수정하기
        3. 리뷰 삭제하기
        4. 리뷰 전체 조회하기
        5. 리뷰 단건 조회하기
     */

    // 1. 리뷰 등록하기
    Review addReview(ReviewDtoInput reviewDtoInput);

    // 2. 리뷰 수정하기
    Review editReview(Long id, ReviewDtoInput reviewDtoInput);

    // 3. 리뷰 삭제하기

//    // 4. 리뷰 전체 조회하기 (페이지 적용 X)
//    List<ReviewDtoOutput> getAllReview();

    // 4. 리뷰 전체 조회하기 (페이지 적용 O)
    Page<ReviewDtoOutput> getAllReview(Long productId, Pageable pageable);

    // 5. 리뷰 단건 조회하기
    ReviewDtoOutputOption getOneReview(Long id);
}
