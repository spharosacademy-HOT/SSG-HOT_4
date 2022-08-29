import React, { useState } from 'react'

function ProductDeliveryMyAddress({item}) {
    const [select,setSelect] = useState(false)
    const selectHandle = () => {
        setSelect(true)
    }
    return ( 
        <>
        <label htmlFor="my-address">
            <div className={select ? 'purchase-delivery-my-address-clicked' : 'purchase-delivery-my-address'}>
                <div className='my-delivery-title'>
                    <input type="radio" name="my-address" onClick={selectHandle}/> {item.alias}
                </div>
                <div className='my-delivery-address'>
                    [{item.zipcode}]{item.street}
                </div>
                <div className='my-delivery-info'>
                    {item.taker}/{item.phone}
                </div>
            </div>
        </label>
        </>
     );
}

export default ProductDeliveryMyAddress;