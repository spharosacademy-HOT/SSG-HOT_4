import React from 'react'

function SmileClub() {
    return ( 
        <>
            <div className='smile-club'>
                <img src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&w=750" alt="" />
            </div>
            <div className='smile-club-message'>
                {/* 있으면 출력 */}
                <span>직접 써보신 분들이 많아요! 1,384명의 고객 리뷰가 있습니다.</span>
            </div>
        </>
     );
}

export default SmileClub;