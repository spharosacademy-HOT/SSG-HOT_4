package com.ssghot.ssg.order.repository;

public class OrderRepositoryImpl implements IOrderRepositoryCustom{
    @Override
    public Long updateDeliveryInfo() {
        return null;
    }

//    private final JPAQueryFactory jpaQueryFactory;
//    public OrderRepositoryImpl(EntityManager em){
//        this.jpaQueryFactory = new JPAQueryFactory(em);
//    }
//    @Override
//    public Long updateDeliveryInfo() {
//
//        long execute = jpaQueryFactory.update(orderItem).set(orderItem.deliveryInfo, new LocalDateTime(orderItem.deliveryInfo)).where(orderItem.).execute(); return execute;
//    }
}
