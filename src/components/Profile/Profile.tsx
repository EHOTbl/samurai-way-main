import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img
                src="https://imageio.forbes.com/specials-images/imageserve/63f76a39c20b7b002a093b40/0x0.jpg?format=jpg&width=1200"
                alt="main img"/></div>
            <div>
                ava+descr
            </div>
            <MyPosts hey='yo'/>
        </div>)
}

export default Profile;