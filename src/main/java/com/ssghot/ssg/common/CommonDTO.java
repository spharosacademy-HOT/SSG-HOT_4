package com.ssghot.ssg.common;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class CommonDTO {

    // 등록일
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdDate;

    // 수정일
    @LastModifiedDate
    private LocalDateTime updatedDate;

    // 삭제 여부 체크
    private String deleteYn;

}