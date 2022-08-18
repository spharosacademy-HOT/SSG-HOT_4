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
                        <li>
                            <ThemeRecommendCard item={item} key={item.id}/>
                        </li>
                    ))
                }
            </ul>
        </>
     );
}

export default ThemeRecommend;