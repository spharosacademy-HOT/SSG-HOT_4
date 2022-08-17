package com.ssghot.ssg.post.review.repository;

import com.ssghot.ssg.post.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReviewRepository extends JpaRepository<Review, Long> {
}
