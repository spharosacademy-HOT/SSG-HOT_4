import React from 'react';
import CommonHeader from "../../../../components/layout/header/CommonHeader.jsx";
import PlusShipContent from './PlusShipContent.jsx';

function PlusShip() {
    return (  <>
     <CommonHeader title="배송지 추가" />
     <PlusShipContent/>
    </>);
}

export default PlusShip;
