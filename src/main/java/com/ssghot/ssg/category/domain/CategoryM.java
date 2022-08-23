package com.ssghot.ssg.category.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Category category;

//    @ManyToOne
//    private CategoryProductList categoryProductList;

}
