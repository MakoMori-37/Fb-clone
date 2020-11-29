import React from 'react'
import './UserStory.css'

function UserStory({storypic, storypicuser, namestory}) {
    return (
        <div className='userstory' >
            <img src={storypic} alt='' />
            <div className="picstory">
            <img src={storypicuser} alt='' />

            </div>
            <div className="namestory">
            <p>{namestory}</p>
            </div>
        </div>
    )
}

export default UserStory
