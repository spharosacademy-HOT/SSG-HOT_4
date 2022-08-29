import React from 'react';

function ServiceRecommendCard({item}) {
    return ( 
        <>
            <li>
                <img src={item.imgUrl} alt="" />
                <p>{item.name}</p>
            </li>
        </>
     );
}

export default ServiceRecommendCard;