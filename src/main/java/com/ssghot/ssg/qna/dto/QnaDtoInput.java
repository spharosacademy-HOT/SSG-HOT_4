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
public class QnaDtoInput {
    private String type;
    private String title;
    private String contents;
    private boolean secret;
    private Long productId;
    private Long userId;

    public Qna toEntity(Product product, User user){
        return Qna.builder()
                .type(Type.valueOf(getType()))
                .title(getTitle())
                .contents(getContents())
                .secret(isSecret())
                .user(user)
                .product(product)
                .build();
    }
}
