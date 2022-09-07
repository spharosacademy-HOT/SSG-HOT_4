import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
    faCaretDown,

} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from 'recoil';
import { categoryMState, categoryState } from '../../store/atom/purchaseState';
import { useNavigate } from 'react-router-dom';

function ProductNav() {
    // const [isClick, setIsTrue] = useState(false)

    // const CateClick = () => {
    //     setIsTrue(!isClick)
    //     console.log(isClick)
    // }
    const categoryMName = useRecoilValue(categoryMState)
    const categoryName = useRecoilValue(categoryState)
    const navigate = useNavigate();
    return ( 
        <>
            {/* <div className="mcom_tit_renew  react-area">
			    <div id="mcom_path_cate" className="mcom_category">
                    <div className="cate_path">
                        <span className="depth previous">
                            <a href="/productList">
                                <span className="ctg_mn"><span className="ctg_txt">명품/잡화/쥬얼리</span></span>
                            </a>
                        </span>
                        <span className="depth current">
                            <button type="button" className="btn_more">
                                <strong className="ctg_txt">가방/지갑</strong>
                                <span><FontAwesomeIcon icon={faCaretDown}/></span>
                            </button>
                        </span>
                    </div>
				</div>
                <div>
                    하트, 공유
                </div>
                </div> */}
                <div className='product-nav'>
                    <div className="backBtn">
                        <button type="button" onClick={() => navigate(-1)}></button>
                    </div>
                    <div>{categoryName}</div>
                    <div>{categoryMName}</div>
                </div>
                <div className='product-nav-list'>
                    <div></div>
                    <div></div>
                </div>
        </>
     );
}

export default ProductNav;