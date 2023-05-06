import React from "react";
import classes from "./Profile.module.css";
import MyPosts, {PropsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostsType} from "../../Redux/state";

export type AddPostType = {
    addPost: (postMessage: string) => void

    pofilePage: {
        posts: Array<PostsType>,
        newPostText: string
    }

    updateNewPostText: (text: string) => void
}

const Profile: React.FC<PropsType & AddPostType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} pofilePage={props.pofilePage}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.pofilePage.newPostText}/>
        </div>)
}

export default Profile;