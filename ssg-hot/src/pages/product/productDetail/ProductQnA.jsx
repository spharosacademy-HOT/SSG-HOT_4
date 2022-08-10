import React from 'react'
import ProductQnACard from './ProductQnACard';

function ProductQnA() {
    return ( 
        <>
            <div className='product-qna'>
                <div className='qna-header'>
                    <div>
                        Q&A 문의
                    </div>
                    <div>
                        문의하기
                    </div>
                </div>
                <hr />
                <div>
                    <ProductQnACard />
                </div>
            </div>
        </>
     );
}

export default ProductQnA;