package com.ssghot.ssg.cart.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.users.domain.User;
import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@EqualsAndHashCode(callSuper=false)
public class Cart extends CommonDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int count;

    @ManyToOne
    private User user;

    @ManyToOne
    private Stock stock;

}
