import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';


function VideoSidebar({ likes, shares, messages } ) {
    const [liked, setliked] = useState(false);  
    return(
        <div className="videosidebar">
            <div className="videosidebar__button">
                { liked ? (
                <FavoriteIcon font-size="large" onClick={(e) => setliked(false)}/>

                ) : (
                <FavoriteBorderIcon font-size="large" onClick={(e) => setliked(true)} />
                )}    
               <p> {liked ? likes + 1: likes}</p>
            </div>    
            <div className="videosidebar__button">    
                <CommentIcon />
                <p>{messages}</p>
            </div>
            <div className="videosidebar__button">
                < ShareIcon />
                <p>{shares}</p>
           </div>

        </div>
    )
}

export default VideoSidebar;