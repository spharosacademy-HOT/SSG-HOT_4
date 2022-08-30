import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import CategoryViewer from './CategoryViewer';

function CategoryGroup({cateData, viewIsTrue,cateNumber, setCateNumber, isClick, setIsClick, cateId}) {

    const [getNum , setGetNum] = useState(1)
    const [viewerData, setViewerData] = useState([])
    const [viewerView, setViewerView] = useState(false)
    const [differ, setDiffer] = useState(false)
    useEffect(() => {
   
        setViewerData(cateData.category[getNum-1].categoryMList)
        setCateNumber(cateId)

    }, [getNum])
    console.log('cateData',cateData)
    
   
    return ( 
        <>
            <ul className='category-align'>
                {
                    cateData && cateData.category.map(item =>(
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
                }
            </ul>
           <CategoryViewer item={viewerData} isTrue={viewerView} differ={differ}/>
        </>
    );
}

export default CategoryGroup;