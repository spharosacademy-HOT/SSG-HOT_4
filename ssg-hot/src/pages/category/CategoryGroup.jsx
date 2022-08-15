import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';
import cateDatas from '../../datas/js/cateDatas';
import CategoryViewer from './CategoryViewer';

function CategoryGroup() {
    const [isTrue,setIsTrue] = useState(false)
    const isClicked = () =>{
        setIsTrue(!isTrue)
    }


    return ( 
        <>
            <ul className='category-align'>
                {
                    cateDatas && cateDatas.map(item =>(
                        <CategoryItem item={item} key={item.id}/>
                    )).slice(0, 4)
                }
            </ul>
            {
                cateDatas && cateDatas.map(item =>(
                    <CategoryViewer item={item.content} key={item.id}/>
                )).slice(0, 4)
            }
            <ul>
                {
                    cateDatas && cateDatas.map(item =>(
                        <CategoryItem item={item} key={item.id}/>
                    )).slice(4, 8)
                }
            </ul>
            {
                cateDatas && cateDatas.map(item =>(
                    <CategoryViewer item={item.content} key={item.id}/>
                )).slice(4, 8)
            }

            
        </>
    );
}

export default CategoryGroup;