import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../../components/common/widgets/button/LikeButton';
import ProductPurchaseItem from './ProductPurchaseItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { addMyCart, getMyCart } from "../../../store/apis/cart";
import { cartState } from "../../../store/atom/cartState";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from 'axios';
import { baseURL } from '../../../store/apis/apiClient';
import { addOption } from '../../../store/apis/product';

function ProductPurchaseBar({stockList}) {
    let params = useParams();
    const id = params.productId;
    const token = localStorage.getItem("token")
    const [sizeName, setSizeName] = useState("선택하세요(사이즈)")
    const [colorName, setColorName] = useState("선택하세요(색상)");
    const [cartData, setCartData] = useRecoilState(cartState);
    const [show, setShow] = useState(false);
    const [stockChoice, setStockChoice] = useState(false);
    const [sizeDatas, setSizeDatas] = useState([]);
    const [sizeChoice, setSizeChoice] = useState(false);
    const [purchaseList, setPurChaseList] = useState([])
    const [deleteId, setDeleteId] = useState('')
    const [totalPrice, setTotalPrice]  = useState(0);
    // console.log('목록들',purchaseList)
    const handleShow = () => {
      setShow(true);
      console.log(show);
    };
    const [barState,setBarState] = useState(0)
    const handlePresent = () =>{
        setBarState(1)
    }
    const handlePurchase = () =>{
        setBarState(2)
    }
    const handleClose = () =>{
        setBarState(0)
    }
    const handleStockChoice = () =>{
        setStockChoice(!stockChoice)
    }
    const handleSizeChoice = () =>{
        setSizeChoice(!sizeChoice)
    }
    const handleColor = (itemId,itemName) =>{
        setColorName(itemName)
        setSizeName("선택하세요(사이즈)")
        setStockChoice(!stockChoice)
        axios.get(`${baseURL}/option1/option2/${itemId}/${id}`).then((Response) =>{
            setSizeDatas(Response.data)
            console.log(sizeDatas)
        })
    }
    const handleAppendStock = (itemId, itemName, item, price) =>{
        setSizeChoice(!sizeChoice)
        setSizeName(itemName)
        purchaseList.includes(item) ?
            alert('동일한 옵션 상품이 이미 선택되어 있습니다.')
            : setPurChaseList([item,...purchaseList])
            setTotalPrice(totalPrice + price)
    }
      //장바구니 담고 장바구니 새로 가져오기
    const goCart = () => {
        const itemData = {
        stockId: id,
        count: 3,
        };
        addMyCart(itemData).then((res) => {
        console.log(res);
        alert(res.data.message);
        getMyCart().then((res) => {
            setCartData(res.data);
            console.log("다시가져오기");
        });
        });
    };
    useEffect(()=>{
        const newPurchaseList  = purchaseList.filter((item)=>item.stockId !== deleteId)
        setPurChaseList(newPurchaseList)
    },[deleteId])
    
    return ( 
        <>
            <div className={barState === 0 ?
                'product-purchase-bar'
                // 'product-purchase-like'
                // 'product-purchase-buy'
                : barState === 1 ?
                'product-purchase-like'
                : 'product-purchase-buy'}>
                <ul>
                    <li className='product-choice'>
                        {/* 찜하기 컴포넌트 만들어서 넣기 */}
                        <div>
                            <LikeButton/>
                        </div>
                    </li>
                    <li className='product-present'>
                        <div onClick={handlePresent}>
                            선물하기
                        </div>
                    </li>
                    <li className='product-purchase'>
                        <div onClick={handlePurchase}>
                            구매하기
                        </div>
                    </li>
                    <li className='product-basket'>
                        <div>
                            <div onClick={goCart}>장바구니</div>
                        </div>
                    </li>
                    <li className='product-buy'>
                        <div>
                            {token? (
                                <Link to={`/product/purchase`}>
                                    바로구매
                                </Link>
                            ):
                            (
                                <Link to={`/login`}>
                                    바로구매
                                </Link>
                            )}
                        </div>
                    </li>
                </ul>
                <div className={barState === 1 ? 'product-present-long': 'product-present-long-none'}>
                    {
                        token?(
                            <Link to={`/product/purchase`}>
                                선물하기
                            </Link>
                        ):(
                            <Link to={`/login`}>
                                바로구매
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className={barState === 0 ? 'purchase-info-zero'
                            : 'purchase-info-one'}>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} onClick={handleClose}/>
                </div>
                <div onClick={handleStockChoice} className='product-add'>
                    <div>{colorName}</div>
                    <div><FontAwesomeIcon icon={faAngleDown}/></div>
                </div>
                <div onClick={handleSizeChoice} className='size-add product-add'>
                    <div>{sizeName}</div>
                    <div><FontAwesomeIcon icon={faAngleDown}/></div>
                </div>
                {
                    purchaseList && purchaseList.map((purchase)=>(
                        <ProductPurchaseItem purchase={purchase} key={purchase.stockId} setDeleteId={setDeleteId}/>
                    ))
                }
                {/* <ProductPurchaseItem purchaseList={purchaseList} /> */}
                <div className='product-total-price'>
                    총 합계 <span>{totalPrice}</span>원
                </div>
            </div>
            <div className={stockChoice ? 'stock-choice-open' : 'stock-choice-close'}>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} onClick={handleStockChoice}/>
                </div>
                <div>
                    {
                        stockList && stockList.map(item =>(
                            <div key={item.id} className='stock-list' onClick={()=>{handleColor(item.id,item.name)}}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={sizeChoice ? 'size-choice-open' : 'size-choice-close'}>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} onClick={handleSizeChoice}/>
                </div>
                <div>
                    {
                        sizeDatas && sizeDatas.map(item =>(
                            <div key={item.stockId} className={item.qty ? 'stock-list' : 'non-stock-list'} onClick={item.qty ? ()=>{handleAppendStock(item.id,item.optionSecond.name,item,item.discountPrice)} : undefined}>
                                {item.optionSecond.name}{item.qty ? <span>(남은 수량 : {item.qty})</span> : <span>(품절)</span>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
     );
}
export default ProductPurchaseBar;