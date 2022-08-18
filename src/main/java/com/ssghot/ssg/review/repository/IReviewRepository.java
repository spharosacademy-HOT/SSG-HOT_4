package com.ssghot.ssg.review.repository;

import com.ssghot.ssg.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReviewRepository extends JpaRepository<Review, Long> {


}
