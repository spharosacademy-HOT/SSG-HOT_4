import React from 'react'

function PhoteReviewCard({item}) {
    return ( 
        <>  
            <div>
                <img src={item.imgUrl} alt="" />
            </div>
        </>
     );
}

export default PhoteReviewCard;