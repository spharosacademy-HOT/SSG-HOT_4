package com.ssghot.ssg.product.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductSubImg {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subImgUrl;
    private String subImgTxt;

    @ManyToOne
    private Product product;

}