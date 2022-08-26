import React from 'react'
import QnaCode from './QnaCode';
import QnaContent from './QnaContent';
import QnaTitle from './QnaTitle';


function QnaDesc({name, info, code}) {
    return (  
 <div className='qnaItemDesc'>
    <QnaTitle name={name}/>
    <QnaContent info={info}/>
    <QnaCode code={code}/>
 </div>
    );
}

export default QnaDesc;