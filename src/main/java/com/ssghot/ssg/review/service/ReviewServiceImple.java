package com.ssghot.ssg.review.service;

import com.ssghot.ssg.review.domain.Review;
import com.ssghot.ssg.review.dto.ReviewDtoInput;
import com.ssghot.ssg.review.dto.ReviewDtoOutput;
import com.ssghot.ssg.review.repository.IReviewRepository;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ReviewServiceImple implements IReviewService{

    private final IReviewRepository iReviewRepository;
    private final IUserRepository iUserRepository;
    private final IProductRepository iProductRepository;

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
                        .orderItem(reviewDtoInput.getOrderItem())
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
                            .orderItem(review.get().getOrderItem())
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
                            .orderItemId(review.getOrderItem().getId())
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
                    .orderItemId(review.get().getOrderItem().getId())
                    .userId(review.get().getUser().getId())
                    .build();
        }

        return null;
    }
}
