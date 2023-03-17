import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props:any) => {
    return (

        <div>
            {props.hey}
            MyPosts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi,how ary you" likeCount='15' />
            <Post message="It's second post" likeCount='25' />
            <Post message="TS" likeCount='5' />
        </div>

    )
}

export default MyPosts;