package com.ssghot.ssg.post.review.service;

import com.ssghot.ssg.post.review.domain.Review;
import com.ssghot.ssg.post.review.dto.ReviewDtoInput;
import com.ssghot.ssg.post.review.dto.ReviewDtoOutput;
import com.ssghot.ssg.post.review.repository.IReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ReviewServiceImple implements IReviewService{

    private final IReviewRepository iReviewRepository;

    /*
        1. 리뷰 등록하기
        2. 리뷰 수정하기
        3. 리뷰 삭제하기
        4. 리뷰 전체 조회하기
        5. 리뷰 단건 조회하기
     */

    // 1. 리뷰 등록하기
    @Override
    public Review addReview(ReviewDtoInput reviewDtoInput) {
        return iReviewRepository.save(
                Review.builder()
                        .title(reviewDtoInput.getTitle())
                        .content(reviewDtoInput.getContent())
                        .imgUrl(reviewDtoInput.getImgUrl())
                        .imgUrl2(reviewDtoInput.getImgUrl2())
                        .star(0)
                        .viewCount(0)
                        .product(reviewDtoInput.getProduct())
                        .order(reviewDtoInput.getOrder())
                        .user(reviewDtoInput.getUser())
                        .build()
        );
    }

    // 2. 리뷰 수정하기
    @Override
    public Review editReview(Long id, ReviewDtoInput reviewDtoInput) {
        Optional<Review> review = iReviewRepository.findById(id);
        if(review.isPresent()){
            iReviewRepository.save(
                    Review.builder()
                            .id(id)
                            .title(reviewDtoInput.getTitle())
                            .content(reviewDtoInput.getContent())
                            .imgUrl(reviewDtoInput.getImgUrl())
                            .imgUrl2(reviewDtoInput.getImgUrl2())
                            .star(review.get().getStar())
                            .viewCount(review.get().getViewCount())
                            .product(review.get().getProduct())
                            .order(review.get().getOrder())
                            .user(review.get().getUser())
                            .build()
            );
        }

        return null;
    }

    // 4. 리뷰 전체 조회하기
    @Override
    public List<ReviewDtoOutput> getAllReview() {
        List<Review> reviewList = iReviewRepository.findAll();
        List<ReviewDtoOutput> reviewDtoOutputList = new ArrayList<>();

        reviewList.forEach(review -> {
            reviewDtoOutputList.add(
                    ReviewDtoOutput.builder()
                            .id(review.getId())
                            .title(review.getTitle())
                            .content(review.getContent())
                            .imgUrl(review.getImgUrl())
                            .imgUrl2(review.getImgUrl2())
                            .star(review.getStar())
                            .viewCount(review.getViewCount())
                            .productId(review.getProduct().getId())
                            .orderId(review.getOrder().getId())
                            .userId(review.getUser().getId())
                            .build()
            );
        });

        return reviewDtoOutputList;
    }

    // 5. 리뷰 단건 조회하기
    @Override
    public ReviewDtoOutput getOneReview(Long id) {
        Optional<Review> review = iReviewRepository.findById(id);
        if(review.isPresent()){
            return ReviewDtoOutput.builder()
                    .id(review.get().getId())
                    .title(review.get().getTitle())
                    .content(review.get().getContent())
                    .imgUrl(review.get().getImgUrl())
                    .imgUrl2(review.get().getImgUrl2())
                    .star(review.get().getStar())
                    .viewCount(review.get().getViewCount())
                    .productId(review.get().getProduct().getId())
                    .orderId(review.get().getOrder().getId())
                    .userId(review.get().getUser().getId())
                    .build();
        }

        return null;
    }
}
