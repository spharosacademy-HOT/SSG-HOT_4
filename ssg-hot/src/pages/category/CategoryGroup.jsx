import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import CategoryViewer from './CategoryViewer';
import { baseURL } from '../../store/apis/apiClient';

function CategoryGroup({categoryId, viewIsTrue, cateNumber, setCateNumber, isClick, setIsClick, cateId}) {

    const [getNum , setGetNum] = useState(1)
    const [viewerData, setViewerData] = useState([])
    const [viewerView, setViewerView] = useState(false)
    const [differ, setDiffer] = useState(false)
    const [categoryMId, setCategoryMId] = useState([])
    // useEffect(() => {
   
    //     setViewerData(cateData[getNum-1].content)
    //     setCateNumber(cateId)

    // }, [getNum])
    // console.log('id',cateData)
    useEffect(() =>{
        axios
            .get(`${baseURL}/category/${categoryId.id}`)
            .then((Response)=>{
                setCategoryMId(Response.data.categoryMList)
            })
    },[])
    // console.log(categoryMId)
    return ( 
        <>
            <ul className='category-align'>
                {/* {
                    cateData && cateData.map(item =>(
                        <CategoryItem
                            item={item}
                            key={item.id}
                            // getNum = {getNum}
                            cateNumber = {cateNumber}
                            setGetNum = {setGetNum}
                            setViewerView={setViewerView}
                            isClick={isClick}
                            setIsClick={setIsClick}
                            setDiffer={setDiffer}/>
                    ))
                } */}
                {
                    // categoryMId && categoryMId.map(item =>(
                    //     <CategoryItem item={item} key={item.id}/>
                    // ))
                    <CategoryItem categoryId={categoryId} setViewerView={setViewerView} setIsClick={setIsClick}/>
                }
            </ul>
           {/* <CategoryViewer item={viewerData} isTrue={viewerView} differ={differ} getNum={getNum}/> */}
           {
            categoryMId && categoryMId.map(item =>(
                <CategoryViewer item={item} key={item.id} isTrue={viewerView}/>
            ))
           }
        </>
    );
}

export default CategoryGroup;