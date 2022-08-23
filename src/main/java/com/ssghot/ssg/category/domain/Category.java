package com.ssghot.ssg.category.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
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

    //jpa 순환 참조오류
    @OneToMany(mappedBy = "category")
    @JsonManagedReference
    private List<CategoryM> categoryMList = new ArrayList<>();
}
