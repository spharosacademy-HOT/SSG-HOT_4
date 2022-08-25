package com.ssghot.ssg.review.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.orderItem.domain.OrderItem;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Review extends CommonDTO {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private int star;
    private int viewCount;

    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;

    @ManyToOne
    private OrderItem orderItem;

    @ManyToOne
    private User user;

}
