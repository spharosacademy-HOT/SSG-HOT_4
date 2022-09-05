package com.ssghot.ssg.qna.dto;

import com.ssghot.ssg.qna.domain.Qna;
import com.ssghot.ssg.qna.domain.Type;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QnaDtoOutput2 {
    private Long id;
    private Type type;
    private String title;
    private String contents;
    private boolean secret;
    private boolean answer;
    private String phone;
    private Long productId;
    private Long userId;
    private String email;
    private Long parentId;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    @Builder.Default
    private List<Qna> children = new ArrayList<>();
}
