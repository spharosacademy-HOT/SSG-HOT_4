import React from 'react';

function ProductReviewCard() {
    return ( 
        <>
            <div className='product-review-card'>
                <div className='review-star'>
                    <div>
                        <div>별점&nbsp;</div>
                        <div>| 일반</div>
                    </div>
                    <div>
                        <div>신고하기</div>
                    </div>
                </div>
                <div>
                    <div>
                        2022.07.11 &nbsp;|&nbsp;&nbsp;
                    </div>
                    <div>
                        tndk**** &nbsp;|&nbsp;&nbsp;
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
                    정말 싸게 샀어요 아이가 좋아해요
                </div>
            </div>
            <hr />
        </>
     );
}

export default ProductReviewCard;