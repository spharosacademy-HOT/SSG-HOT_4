package com.ssghot.ssg.review.repository;

import com.ssghot.ssg.review.domain.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findAllByProductId(Long productId);

    Page<Review> findAllByProductId(Long productId, Pageable pageable);

}
