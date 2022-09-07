package com.ssghot.ssg.qna.dto;

import com.ssghot.ssg.qna.domain.Type;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QnaAdminDtoOutput {
    private Long id;
    private String title;
    private String contents;
    private Long parentId;
    private Type type;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

}
