package com.ssghot.ssg.review.service;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.review.domain.Review;
import com.ssghot.ssg.review.dto.ReviewDtoInput;
import com.ssghot.ssg.review.dto.ReviewDtoOutput;
import com.ssghot.ssg.review.dto.ReviewDtoOutputOption;
import com.ssghot.ssg.review.repository.IReviewRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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

        Optional<User> user = iUserRepository.findById(reviewDtoInput.getUser().getId());
        Optional<Product> product = iProductRepository.findById(reviewDtoInput.getProduct().getId());

        if(user.isPresent() && product.isPresent()) {
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
        return null;
    }

    // 2. 리뷰 수정하기
    @Override
    public Review editReview(Long id, ReviewDtoInput reviewDtoInput) {
        Optional<Review> review = iReviewRepository.findById(id);

        Optional<User> user = iUserRepository.findById(reviewDtoInput.getUser().getId());
        Optional<Product> product = iProductRepository.findById(reviewDtoInput.getProduct().getId());

        if(review.isPresent() && user.isPresent() && product.isPresent()){
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

//    // 4. 리뷰 전체 조회하기 (페이징 적용 X)
//    @Override
//    public List<ReviewDtoOutput> getAllReview() {
//        List<Review> reviewList = iReviewRepository.findAll();
//        List<ReviewDtoOutput> reviewDtoOutputList = new ArrayList<>();
//
//        reviewList.forEach(
//            review -> {
//                reviewDtoOutputList.add(
//                    ReviewDtoOutput.builder()
//                            .id(review.getId())
//                            .title(review.getTitle())
//                            .content(review.getContent())
//                            .imgUrl(review.getImgUrl())
//                            .imgUrl2(review.getImgUrl2())
//                            .star(review.getStar())
//                            .viewCount(review.getViewCount())
//                            .productId(review.getProduct().getId())
//                            .orderItemId(review.getOrderItem().getId())
//                            .userId(review.getUser().getId())
//                            .build()
//            );
//        });
//
//        return reviewDtoOutputList;
//    }

    // 4. 리뷰 전체 조회하기 (페이징 적용 O)
    @Override
    public Page<ReviewDtoOutput> getAllReview(Long productId, Pageable pageable) {
        Page<Review> reviewList = iReviewRepository.findAllByProductId(productId, pageable);

        return reviewList.map(review -> {
            return ReviewDtoOutput.builder()
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
                    .build();
        });
    }

    // 5. 리뷰 단건 조회하기
    @Override
    public ReviewDtoOutputOption getOneReview(Long id) {
        Optional<Review> review = iReviewRepository.findById(id);

        if(review.isPresent()){
            ReviewDtoOutputOption reviewDtoOutputOption = ReviewDtoOutputOption.builder()
                    .id(review.get().getId())
                    .title(review.get().getTitle())
                    .content(review.get().getContent())
                    .imgUrl(review.get().getImgUrl())
                    .imgUrl2(review.get().getImgUrl2())
                    .star(review.get().getStar())
                    .viewCount(review.get().getViewCount())
                    .productId(review.get().getProduct().getId())
                    .orderItem(review.get().getOrderItem())
                    .userId(review.get().getUser().getId())
                    .build();
            return reviewDtoOutputOption;
        }

        return null;
    }
}
