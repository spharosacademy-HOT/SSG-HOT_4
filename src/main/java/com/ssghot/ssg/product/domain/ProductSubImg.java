package com.ssghot.ssg.product.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class ProductSubImg {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subImgUrl;
    private String subImgTxt;

    @ManyToOne
    private Product product;

}