import React from 'react'
import themeDatas from '../../datas/js/themeDatas';
import ThemeRecommendCard from './ThemeRecommendCard';

function ThemeRecommend() {
    return ( 
        <>
            <h3 className="category-title">테마추천</h3>
            <ul>
                {
                    themeDatas && themeDatas.map(item =>(

                            <ThemeRecommendCard item={item} key={item.id}/>

                    ))
                }
            </ul>
        </>
     );
}

export default ThemeRecommend;