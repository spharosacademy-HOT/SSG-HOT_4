package com.ssghot.ssg.users.domain;

import com.ssghot.ssg.common.CommonDTO;
import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@EqualsAndHashCode(callSuper=false)
public class User extends CommonDTO {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String phone;

    @Column(columnDefinition = "boolean default false")
    private boolean isSlept;

    private String birthday;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "varchar(32) default 'FRIENDS'")
    private MemberLevel memberLevel;

}
