package com.ssghot.ssg.optionList.domain;

import com.ssghot.ssg.common.CommonDTO;
import com.ssghot.ssg.product.domain.Product;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class Stock extends CommonDTO {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int qty;

    @ManyToOne
    private OptionFirst optionFirst;

    @ManyToOne
    private OptionSecond optionSecond;

    @ManyToOne
    private Product product;

    //=== qty 증가 ===///
    public int addQty(int qty){
        this.qty += qty;

        return this.qty;
    }
}
