package com.ssghot.ssg.qna.dto;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.qna.domain.Qna;
import com.ssghot.ssg.qna.domain.Type;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class QnaAdminDtoInput {
    private String title;
    private String contents;
    private Long qnaId;
    private Long userId;
    public Qna toEntity(Qna qna, User user, Product product){
        return Qna.builder()
                .type(Type.ADMIN)
                .title(getTitle())
                .contents(getContents())
                .parent(qna)
                .user(user)
                .product(product)
                .build();
    }
}
