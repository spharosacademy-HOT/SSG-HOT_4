package com.ssghot.ssg.users.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ssghot.ssg.common.CommonDTO;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@EqualsAndHashCode(callSuper=false)
@JsonIgnoreProperties({"hibernateLazyInitializer"})
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

    @Column(columnDefinition = "varchar(255) default 'ROLE_USER'")
    private String role;

    @Column(columnDefinition = "varchar(255) default 'FRIENDS'")
    private String memberLevel;

    @PrePersist
    public void prePersist() {
        this.memberLevel = this.memberLevel == null ? "FRIENDS" : this.memberLevel;
        this.role = this.role == null ? "ROLE_USER": this.role;
    }
    public List<String> getRoleList(){
        if(this.role.length() > 0){
            return Arrays.asList(this.role.split(","));
        }
        return new ArrayList<>();
    }

}
