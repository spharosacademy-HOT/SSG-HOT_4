import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import CategoryViewer from './CategoryViewer';

function CategoryGroup({cateData, viewIsTrue,cateNumber, setCateNumber, isClick, setIsClick, cateId, setRowData, rowData}) {

    const [getNum , setGetNum] = useState(1)
    const [viewerData, setViewerData] = useState([])
    const [viewerView, setViewerView] = useState(false)
    const [differ, setDiffer] = useState(false)
    useEffect(() => {
        
        let tempData = false;
        cateData.category.map((item) => {
            if(item?.id == getNum){
                tempData = item?.categoryMList;
            }
        });

        //setViewerData(cateData.category[(getNum % 4) !== 0 ? (getNum % 4) -1 : 3].categoryMList)
        setViewerData(tempData)
        setCateNumber(cateId)

    }, [getNum])
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
                            setDiffer={setDiffer}
                        
                            // Custom
                            setRowData={setRowData}
                            row={cateData?.row}
                        />
                    ))
                }
            </ul>
           <CategoryViewer item={viewerData} isTrue={viewerView} differ={differ} rowData={rowData} row={cateData?.row}/>
        </>
    );
}

export default CategoryGroup;