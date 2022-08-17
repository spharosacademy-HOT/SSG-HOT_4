import React from 'react'

function ThemeRecommendCard({item}) {
    return ( 
        <>
            <img src={item.imgUrl} alt="" />
            <p>{item.name}</p>
        </>
     );
}

export default ThemeRecommendCard;