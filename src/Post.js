import React from 'react'
import "./Post.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function Post({ profilePic , image , username , timeStamp , message}) {
    return <div className="post">
                <div className="post__top">
                    <Avatar src={profilePic} className="post__avatar"  />
                        <div className="post__topInfo" >
                            <h3> {username} </h3>
                            <p> {timeStamp} </p>
                        </div>
                </div>
                <div className="post__bottom">
                    <p> {message} </p>
                </div>

                <div className="post__image">
                    <img src={image} alt="new-post" />
                </div>

                <div className="post__options" >
                    <div className="post__option" >
                        < ThumbUpIcon />
                        <p> Like </p>
                    </div>
                    <div className="post__option" >
                        < ChatBubbleOutlineIcon />
                        <p> Comment</p>
                    </div>
                    <div className="post__option" >
                        < NearMeIcon />
                        <p> Share </p>
                    </div>
                    <div className="post__option" >
                        < AccountCircleIcon />
                        < ExpandMoreIcon />
                    </div>

                </div>

            </div>
}

export default Post;
