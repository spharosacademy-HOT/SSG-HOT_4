package com.ssghot.ssg.categoryProductList.dto;

import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.product.domain.Product;
import lombok.Data;

@Data
public class CategoryProductListDtoInput {

    private Long id;

    private Product product;

    private CategoryM categoryM;

}
