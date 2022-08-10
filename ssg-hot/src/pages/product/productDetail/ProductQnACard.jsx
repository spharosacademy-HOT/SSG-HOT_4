import React from 'react'

function ProductQnACard() {
    return ( 
        <>
            <div className='product-qna-card'>
                <div>
                    <ul>
                        <li>
                            <div>Q</div>
                            <div>답변완료</div>
                        </li>
                        <li>2022.08.08</li>
                        <li>| nick********</li>
                    </ul>
                </div>
                <div className='qna-title'>
                    <div>
                        2단계문의
                    </div>
                    <div>
                        <button>+</button>
                    </div>
                </div>
                {/* 클릭해야 열리는거 */}
                {/* <div className='qna-content'>
                    2단계도 무전분 제품인거죠?
                </div> */}
            </div>
        </>
     );
}

export default ProductQnACard;