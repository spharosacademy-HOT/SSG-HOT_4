package com.ssghot.ssg.qna.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

import javax.persistence.*;

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
    @Column(nullable = false)
    private String type;

    // 제목
    @Column(nullable = false)
    private String title;

    // 내용
    @Lob
    @Column(nullable = false)
    private String contents;

    // 답변 등록시 알림
    @Column(nullable = false)
    private String phone;
    
    // 비밀글 설정하기
    @Column(columnDefinition = "boolean default false")
    private boolean secret;

    @ManyToOne
    private User user;

    @ManyToOne
    private Product product;
    
}
