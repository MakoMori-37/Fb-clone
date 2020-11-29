import React from 'react'
import './Message.css'

function Message({msspic, mssname}) {
    return (
        <div className='message__containerbox' >
            <div className="box__pic">
            <img src={msspic} alt=""/>

            <div className="dotgreen"></div>
            </div>
             <p>{mssname}</p>
        </div>
    )
}

export default Message
