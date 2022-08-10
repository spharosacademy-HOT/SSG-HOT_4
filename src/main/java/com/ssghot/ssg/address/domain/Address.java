package com.ssghot.ssg.address.domain;



import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Address extends CommonDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 주소 별칭
    @Column(nullable = false)
    private String alias;

    //  받는분
    @Column(nullable = false)
    private String taker;

    //  휴대전화
    @Column(nullable = false)
    private String phone;

    // 집전화
    @Column(columnDefinition = "varchar(13) default ''")
    private String homePhone;

    @Column(nullable = false)
    private String city;
    @Column(nullable = false)
    private String street;
    @Column(nullable = false)
    private String zipcode;

    // 기존 배송지 여부
    @Column(columnDefinition = "boolean default false")
    private boolean existed;

    @ManyToOne
    private User user;
    @PrePersist
    public void prePersist() {
        this.homePhone = this.homePhone == null ? "" : this.homePhone;
    }
}
