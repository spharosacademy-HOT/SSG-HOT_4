package com.ssghot.ssg.qna.dto;

import com.ssghot.ssg.qna.domain.Qna;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class QnaEditDtoInput {

    private Long id;
    private Long userId;
    private String title;
    private String contents;

    public Qna toEntity(Qna qna){
        return Qna.builder()
                .id(getId())
                .secret(qna.isSecret())
                .user(qna.getUser())
                .contents(getContents())
                .title(getTitle())
                .type(qna.getType())
                .product(qna.getProduct())
                .answer(qna.isAnswer())
                .children(qna.getChildren())
                .parent(qna.getParent())
                .build();
    }
}
