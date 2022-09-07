import React,{useState} from 'react';
import { useParams, Link} from 'react-router-dom';
import QnaDesc from './QnaDesc';
import QnaImg
 from './QnaImg';





function QnaItem({item}) {
    let params = useParams();
    
    return ( <>
        <Link to={`/qna/${params.productId}`}>" 문의하기
        <QnaDesc
            id={item.product.id}
            name={item.product.brandName}
            info={item.product.detail}
            code={item.product.productCode}/>

        <QnaImg imgUrl={item.product.titleImgUrl}/>
        </Link>
    </> );
}

export default QnaItem;