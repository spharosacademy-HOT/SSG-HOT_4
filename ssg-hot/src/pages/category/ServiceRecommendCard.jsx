import React from 'react';

function ServiceRecommendCard({item}) {
    return ( 
        <>
            <img src={item.imgUrl} alt="" />
            <p>{item.name}</p>
        </>
     );
}

export default ServiceRecommendCard;