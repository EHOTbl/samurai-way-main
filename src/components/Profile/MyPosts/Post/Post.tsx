import React from "react";
import c from "./Post.module.css";


type propsTypePosts ={
    message:string
    likeCount:string
}

const Post = (props:propsTypePosts) => {
    return (
        <div>
            <div className={c.posts}>
                <div className={c.item}>
                    <img src="https://cdn.wallpapersafari.com/14/47/MSs0P3.jpg" alt=""/>
                    {props.message}

                    <div>
                        <span>Like {props.likeCount}</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Post;