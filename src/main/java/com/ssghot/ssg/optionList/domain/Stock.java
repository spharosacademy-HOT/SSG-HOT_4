package com.ssghot.ssg.optionList.domain;

import com.ssghot.ssg.product.domain.Product;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Stock {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int qty;

    @ManyToOne
    private OptionFirst optionFirst;

    @ManyToOne
    private OptionSecond optionSecond;

    @ManyToOne
    private Product product;
}
