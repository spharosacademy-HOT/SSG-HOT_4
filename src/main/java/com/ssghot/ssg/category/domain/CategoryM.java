package com.ssghot.ssg.category.domain;

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
public class CategoryM {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name; // 중분류 이름

    @ManyToOne
    private Category category;

//    @ManyToOne
//    private CategoryProductList categoryProductList;

}
