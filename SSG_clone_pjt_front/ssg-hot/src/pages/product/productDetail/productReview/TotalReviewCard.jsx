import React from 'react'
import ItemImg from '../../../../components/common/widgets/itemList/recent/ItemImg';

function TotalReviewCard({item}) {
    return ( 
        <>
            <div className='total-review-card'>
                <div>
                    <ul>
                        <li>{item.star}</li>
                        <li>| 프리미엄</li>
                        <li>| {item.createdDate}</li>
                        <li>| {item.userId}</li>
                    </ul>
                </div>
                <div>
                    {
                        item.imgUrl &&
                        <>
                            <img src={item.imgUrl} alt="" />
                        </>
                    }
                    {
                        item.imgUrl2 &&
                        <>
                            <img src={item.imgUrl2} alt="" />
                        </>
                    }
                </div>
                <div>
                    <span>{item.content}</span>
                </div>
                <hr />
            </div>
        </>
     );
}

export default TotalReviewCard;