import React from 'react'

function ProductFilterType() {
    return ( 
        <>
            <li className="clickable on" data-react-tarea="카테고리|바닥필터|정렬_필터_선택|추천순">
                <a href="/productList"><span className="cmft_txt">추천순</span></a>
            </li>
        </>
     );
}

export default ProductFilterType;