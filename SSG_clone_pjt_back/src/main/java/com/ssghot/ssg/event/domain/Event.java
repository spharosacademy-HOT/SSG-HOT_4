package com.ssghot.ssg.event.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.users.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Event extends CommonDTO {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private String imgUrl;
    private String imgUrl2;
    private String startDate;
    private String endDate;

    @ManyToOne
    private User user;
}
