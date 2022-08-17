package com.ssghot.ssg.post.review.controller;

import com.ssghot.ssg.post.review.domain.Review;
import com.ssghot.ssg.post.review.dto.ReviewDtoInput;
import com.ssghot.ssg.post.review.dto.ReviewDtoOutput;
import com.ssghot.ssg.post.review.service.IReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ssghot")
public class ReviewController {

    private final IReviewService iReviewService;

    /*
        1. 리뷰 등록하기
        2. 리뷰 수정하기
        3. 리뷰 삭제하기
        4. 리뷰 전체 조회하기
        5. 리뷰 단건 조회하기
     */

    // 1. 리뷰 등록하기
    @PostMapping("/review")
    public Review addReview(@RequestBody ReviewDtoInput reviewDtoInput){
        return iReviewService.addReview(reviewDtoInput);
    }

    // 2. 리뷰 수정하기
    @PutMapping("/review/{id}")
    public Review editReview(@PathVariable Long id, @RequestBody ReviewDtoInput reviewDtoInput){
        return iReviewService.editReview(id, reviewDtoInput);
    }

    // 3. 리뷰 전체 조회하기
    @GetMapping("/review")
    public List<ReviewDtoOutput> getAllReview(){
        return iReviewService.getAllReview();
    }

    // 4. 리뷰 단건 조회하기
    @GetMapping("/review/{id}")
    public ReviewDtoOutput getOneReview(@PathVariable Long id){
        return iReviewService.getOneReview(id);
    }
}
