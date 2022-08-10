import React from 'react'

function LogInSns() {
    return ( 

        <ul className="cmem_sns_login" style={{padding:"0px"}}>
            <li>
                <span className="ico_area">
                    <span className="sp_cmem_sns cmem_ico_naver"></span>
                </span>
                <span className="cmem_sns_name">네이버</span>
                
            </li>
            <li>
                <span className="ico_area">
                    <span className="sp_cmem_sns cmem_ico_kakao"></span>
                </span>
                <span className="cmem_sns_name">카카오</span>
            </li>
            <li>
                <span className="ico_area">
                    <span className="sp_cmem_sns cmem_ico_apple"></span>
                </span>
                <span className="cmem_sns_name">애플</span>
            </li>
            <li>
                <span className="ico_area">
                    <span className="sp_cmem_sns cmem_ico_phone"></span>
                </span>
                <span className="cmem_sns_name">휴대폰</span>
            </li>
        </ul>
     );
}

export default LogInSns;