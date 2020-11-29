import React from 'react'
import './Post.css'
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { RiShareForwardLine } from "react-icons/ri";

function Post({profile,profilename,time,caption,postpic, like, comment, share, botprofile}) {
    return (
        <div className='post' >
            <div className="post_head">
                <div className="postheaad__image">
                <img src={profile} alt='' />

                <div className="posthead__name">
                <p>{profilename}</p>
                <div className="priva">
                    <span>{time}</span>
                    <PublicOutlinedIcon/>
                </div>
                </div>
               

                </div>
                <div className="posthead__i">

                    <MoreHorizIcon/>
                </div>
              
            
            </div>

            <div className="caption">
                        <p>{caption}</p>
            </div>

            <div className="post__pic">
                <img src={postpic} alt='' />
            </div>

            <div className="post__bot">
                
                <div className="like">
                    <div className="emoticon">
                    <img src='/images/like.svg' alt='' />
                    <img src='/images/love.svg' alt='' />
                    <img src='/images/wow.svg' alt='' />
                    <span>{like}พัน</span>

                    </div>

                    <div className="commentsha">
                        <div className="comment">
                             <span>ความคิดเห็น {comment} รายการ</span>
                        </div>
                        <div className="share">
                        <span>แชร์ {share} ครั้ง</span>
                        </div>
                    </div>

                </div>

                <div className="post__underline"></div>


                <div className="but">
                    <div className="butlike"><BiLike alignmentBaseline='center' /><span>ถูกใจ</span>   </div>
                    <div className="butcomment"> <GoComment alignmentBaseline='center' /> <span>แสดงความคิดเห็น</span> </div>
                    <div className="butshare"> <RiShareForwardLine/> <span>แชร์</span> </div>
                 <div className="butprofile"> <img src={botprofile} alt='' /> 
                 <ArrowDropDownIcon/>
                 </div>

                </div>
            </div>
        </div>
    )
}

export default Post
