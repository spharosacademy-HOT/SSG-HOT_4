package com.ssghot.ssg.users.domain;

import com.ssghot.ssg.common.CommonDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
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

    @Column(columnDefinition = "varchar(255) default 'FRIENDS'")
    private String memberLevel;

    @PrePersist
    public void prePersist() {
        this.memberLevel = this.memberLevel == null ? "FRIENDS" : this.memberLevel;
    }
}
