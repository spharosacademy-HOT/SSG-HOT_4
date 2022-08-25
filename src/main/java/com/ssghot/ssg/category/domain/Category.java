package com.ssghot.ssg.category.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Category {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name; // 대분류 이름
    private String imgUrl; // 이미지

    //jpa 순환 참조오류
    @OneToMany//(mappedBy = "category")
    //@JsonManagedReference
    private List<CategoryM> categoryMList;
}
