import React from 'react'

function QnaImg({imgUrl}) {
    return ( 
        <div className='qnaImg'>
            <img src={imgUrl && imgUrl} alt=""/>
        </div>
     );
}

export default QnaImg;