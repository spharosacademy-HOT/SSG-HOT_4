import React from 'react'
import {
    faExclamation,
    faTriangleExclamation
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductDetailInfo() {
    return ( 
        <>
            <div className='product-detail-info'>
                <div className='caution'>
                    <p>
                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                        직거래 유도 주의 안내
                    </p>
                    <p>
                        판매자가 쓱톡/문자 등을 이용하여 <br />
                        현금 입금을 유도하는 경우 사기 가능성이 있으니 거부하시고 <br />
                        SSG.COM 고객센터로 신고 해 주시기 바랍니다.
                    </p>
                </div>
                <div className='is-important-info'>
                    상세정보
                    <hr />
                </div>
                <div className='product-number'>
                    상품번호 : 1000277776158
                </div>
                <div className='product-notify'>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faExclamation}/>
                        </div>

                        <p>상품정보에 <br />문제가 있나요?</p>
                    </div>
                    <div>
                        <button>신고하기</button>
                    </div>
                </div>
                <hr />
            </div>
        </>
     );
}

export default ProductDetailInfo;