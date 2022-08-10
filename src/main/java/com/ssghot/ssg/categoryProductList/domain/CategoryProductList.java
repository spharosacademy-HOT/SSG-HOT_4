package com.ssghot.ssg.categoryProductList.domain;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.product.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategoryProductList {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    @ManyToOne
    private Category category;

    @ManyToOne
    private CategoryM categoryM;
}
