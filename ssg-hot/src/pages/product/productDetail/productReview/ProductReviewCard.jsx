import React from 'react';

function ProductReviewCard({item}) {
    return ( 
        <>
            <div className='product-review-card'>
                <div className='review-star'>
                    <div>
                        <div>{item.star}&nbsp;</div>
                        <div>| 일반</div>
                    </div>
                    <div>
                        <div>신고하기</div>
                    </div>
                </div>
                <div>
                    <div>
                        {item.createdDat} &nbsp;|&nbsp;&nbsp;
                    </div>
                    <div>
                        {item.userId} &nbsp;|&nbsp;&nbsp;
                    </div>
                    <div>
                        신세계몰
                    </div>
                </div>
                <div>
                    <div>
                        구매옵션
                    </div>
                    <div>
                        옵션선택:유기농주스 사과오렌지케일 125ml 24팩
                    </div>
                </div>
                <div className='review-content'>
                    {item.content}
                </div>
            </div>
            <hr />
        </>
     );
}

export default ProductReviewCard;