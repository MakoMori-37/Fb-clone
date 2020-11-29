import React from 'react'
import './LeftItem.css'

function LeftItem({item, itemdetail}) {
    return (
        <div className='leftitem' >
            <img src={item} alt=''/>
            <p>{itemdetail}</p>
        </div>
    )
}

export default LeftItem
