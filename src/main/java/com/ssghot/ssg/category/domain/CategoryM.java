package com.ssghot.ssg.category.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssghot.ssg.product.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategoryM {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name; // 중분류 이름

    @ManyToOne//(fetch = FetchType.LAZY)
    //@JsonBackReference
    private Category category;

    @OneToMany(mappedBy = "categoryM")
    @JsonManagedReference
    private List<Product> productList = new ArrayList<>();

//    @ManyToOne
//    private CategoryProductList categoryProductList;

}
