package com.ssghot.ssg.review.controller;

import com.ssghot.ssg.review.domain.Review;
import com.ssghot.ssg.review.dto.ReviewDtoInput;
import com.ssghot.ssg.review.dto.ReviewDtoOutput;
import com.ssghot.ssg.review.dto.ReviewDtoOutputOption;
import com.ssghot.ssg.review.service.IReviewService;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReviewController {

    private final IReviewService iReviewService;
    private final IUserService iUserService;

    /*
        1. 리뷰 등록하기
        2. 리뷰 수정하기
        3. 리뷰 삭제하기
        4. 리뷰 전체 조회하기
        5. 리뷰 단건 조회하기
     */

    // 1. 리뷰 등록하기
    @PostMapping("/review")
    @PreAuthorize("hasRole('ROLE_USER')")
    public Review addReview(@RequestBody ReviewDtoInput reviewDtoInput, HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        User user = new User();
        user.setId(userId);
        reviewDtoInput.setUser(user);
        return iReviewService.addReview(reviewDtoInput);
    }

    // 2. 리뷰 수정하기
    @PutMapping("/review/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public Review editReview(@PathVariable Long id, @RequestBody ReviewDtoInput reviewDtoInput, HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        User user = new User();
        user.setId(userId);
        reviewDtoInput.setUser(user);
        return iReviewService.editReview(id, reviewDtoInput);
    }

//    // 3. 리뷰 전체 조회하기 (페이지 적용 X)
//    @GetMapping("/review")
//    public List<ReviewDtoOutput> getAllReview(){
//        return iReviewService.getAllReview();
//    }

    // 3. 리뷰 전체 조회하기 (페이지 적용 O)
    @GetMapping("/review/product/{productId}")
    public Page<ReviewDtoOutput> getAllReview(@PathVariable Long productId, @PageableDefault(size = 10) Pageable pageable){
        return iReviewService.getAllReview(productId, pageable);
    }

    // 4. 리뷰 단건 조회하기
    @GetMapping("/review/{id}")
    public ReviewDtoOutputOption getOneReview(@PathVariable Long id){
        return iReviewService.getOneReview(id);
    }
}
