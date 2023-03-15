import React from "react";
import classes from "./Profile.module.css";
const Profile = () => {
    return (<div className={classes.content}>
        <div><img
            src="https://imageio.forbes.com/specials-images/imageserve/63f76a39c20b7b002a093b40/0x0.jpg?format=jpg&width=1200"
            alt="main img"/></div>
        <div>
            ava+descr
        </div>
        <div>
            MyPosts
            <div>
                New posts
            </div>
        </div>
        <div className={classes.posts}>
            <div className={classes.item}>Post1</div>
            <div className={classes.item}>Post2</div>
        </div>
    </div>)
}

export default Profile;