import React from 'react'
import serviceDatas from '../../datas/js/serviceDatas';
import ServiceRecommendCard from './ServiceRecommendCard';

function ServiceRecommend() {
    return ( 
        <>
            <h3 className="category-title">SSG 서비스 추천</h3>
            <ul>
                {
                    serviceDatas && serviceDatas.map(item =>(
                            <ServiceRecommendCard item={item} key={item.id} />
                    ))
                }
            </ul>
        </>
     );
}

export default ServiceRecommend;