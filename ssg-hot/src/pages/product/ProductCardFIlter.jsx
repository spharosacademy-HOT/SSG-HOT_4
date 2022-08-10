import React from 'react';
import ProductFilterType from './ProductFilterType';

function ProductCardFilter() {
    return ( 
        <>
            <div className="cmft_sort v2">
                <div className="cmft_sort_opts">
                    <ul className="cmft_sort_lst">
                        <li className="cmft_cell cmft_sort_ship pick-up-filter" id="filter_shpp">
                            <div className="cmft_sel_wrap">
                                <span className="cmft_inp_chk clickable" data-react-tarea="카테고리|바닥필터|배송_필터_선택|매장픽업">
                                    <input type="checkbox" id="ui_ship_view"  value="picku" />
                                </span>
                                <a href="/" className="clickable" data-react-tarea="카테고리|바닥필터|배송_필터_선택|매장픽업">
                                    <span className="cmft_txt">매장픽업</span>
                                </a>
                            </div>
                        </li>
                        <li className="cmft_cell cmft_sort_rank">
                            <div className="">
                                <a href="/" className="cmft_sort_tit cmft_sel_curent">
                                    <span className="cmft_txt">
                                        추천순
                                    </span>
                                </a>
                                <ul className="cmft_sel_lst">
                                    {/* 추천순 | 판매순 | 낮은가격순 | 높은가격순 | 할인율순 | 신상품순 | 리뷰많은순 */}
                                    <ProductFilterType/>
                                    <input type="hidden" name="sortType" id="sortType" value="" />
                                </ul>
                            </div>
                        </li>
                        <li className="cmft_cell cmft_sort_srch ">
                            <a href="/" className="cmft_sort_tit clickable" data-react-tarea="카테고리|바닥필터|필터더보기_선택">
                                <span className="cmft_txt">필터</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}

export default ProductCardFilter;