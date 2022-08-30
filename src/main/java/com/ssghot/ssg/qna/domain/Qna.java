package com.ssghot.ssg.qna.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@EqualsAndHashCode(callSuper=false)
public class Qna extends CommonDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 유형
    @Enumerated(EnumType.STRING)
    private Type type;

    // 제목
    @Column(nullable = false)
    private String title;

    // 내용
    @Column(nullable = false)
    private String contents;


    // 비밀글 설정하기
    @Column(columnDefinition = "boolean default false")
    private boolean secret;

    @Column(columnDefinition = "boolean default false")
    private boolean answer;

    @ManyToOne
    @JsonIgnore
    private User user;

    @ManyToOne
    @JsonIgnore
    private Product product;




//    @JoinColumn(name = "parent_id")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Qna parent;

    @OneToMany(mappedBy = "parent", orphanRemoval = true)
    @JsonIgnore
    @Builder.Default
    private List<Qna> children = new ArrayList<>();
}
