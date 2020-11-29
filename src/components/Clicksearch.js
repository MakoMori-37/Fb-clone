import React from 'react'
import './Clicksearch.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function Clicksearch({setSearch}) {
    return (
        <div className='clicksearch' >
            <div className="search__arrow"  >
            <ArrowBackIcon />
            </div>
            <div className="clicksearch__h">
                <p>การค้นหาล่าสุด</p>
                <span>แก้ไข</span>
            </div>

            <div className="clicksearch__detail">
            <div className="clicksearch__left">
                <div className="clicksearch__time">
                    <ScheduleOutlinedIcon/>
                </div>
                <span>Twice mina</span>
            </div>
            <CloseOutlinedIcon/>
            </div>

            <div className="clicksearch__detail">
            <div className="clicksearch__left">
                <div className="clicksearch__time">
                    <ScheduleOutlinedIcon/>
                </div>
                <span>minatozaki</span>
            </div>
            <CloseOutlinedIcon/>
            </div>

            <div className="clicksearch__detail">
            <div className="clicksearch__left">
                <div className="clicksearch__time">
                    <ScheduleOutlinedIcon/>
                </div>
                <span>sana</span>
            </div>
            <CloseOutlinedIcon/>
            </div>

            <div className="clicksearch__detail">
            <div className="clicksearch__left">
                <div className="clicksearch__time">
                    <ScheduleOutlinedIcon/>
                </div>
                <span>minju angle</span>
            </div>
            <CloseOutlinedIcon/>
            </div>

            <div className="clicksearch__detail">
            <div className="clicksearch__left">
                <div className="clicksearch__time">
                    <ScheduleOutlinedIcon/>
                </div>
                <span>nayeon</span>
            </div>
            <CloseOutlinedIcon/>
            </div>

            <div className="clicksearch__detail">
            <div className="clicksearch__left">
                <div className="clicksearch__time">
                    <ScheduleOutlinedIcon/>
                </div>
                <span>miyeon</span>
            </div>
            <CloseOutlinedIcon/>
            </div>

            <div className="clicksearch__detail">
            <div className="clicksearch__left">
                <div className="clicksearch__time">
                    <ScheduleOutlinedIcon/>
                </div>
                <span>gyuri</span>
            </div>
            <CloseOutlinedIcon/>
            </div>
        </div>
    )
}

export default Clicksearch
