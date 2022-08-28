import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import CategoryViewer from './CategoryViewer';
import { baseURL } from '../../store/apis/apiClient';

function CategoryGroup({setIsClick}) {
    const [viewerView, setViewerView] = useState(false)
    const [categoryIds, setCategoryId] = useState()

    useEffect(()=>{
        axios
          .get(`${baseURL}/category`)
          .then((Response) =>{
            setCategoryId(Response.data)
          })
    },[])
    console.log('첫번째',categoryIds)
    return ( 
        <>
            <ul className='category-align'>
                {
                    categoryIds && categoryIds.map(item => (
                        <CategoryItem item={item} setViewerView={setViewerView} setIsClick={setIsClick} key={item.id}/>
                    ))
                }

            </ul>
           {/* <CategoryViewer item={viewerData} isTrue={viewerView} getNum={getNum}/> */}
           {
            categoryIds && categoryIds.map(item =>(
                <CategoryViewer item={item.id} key={item.id} isTrue={viewerView}/>
            ))
           }
        </>
    );
}

export default CategoryGroup;