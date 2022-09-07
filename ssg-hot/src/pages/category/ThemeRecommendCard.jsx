import React from 'react'

function ThemeRecommendCard({item}) {
    return ( 
        <>  
            <li>
                <img src={item.imgUrl} alt="" />
                <p>{item.name}</p>
            </li>
        </>
     );
}

export default ThemeRecommendCard;