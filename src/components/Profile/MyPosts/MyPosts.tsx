import React, {useRef} from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/state";
import {AddPostType} from "../Profile";




export type PropsType ={
    posts:Array<PostsType>
    newPostText:string


}
const MyPosts:React.FC<PropsType&AddPostType> = (props) => {

    let postsElements = props.posts.map(p=><Post message={p.message} likeCount={p.likesCount}/>)

    let newPostElement =useRef<HTMLInputElement>(null)

    let addPost =()=>{
       if(newPostElement.current !==null){
           props.addPost(newPostElement.current.value)
           // alert(newPostElement.current.value)
           // newPostElement.current.value = ''

       }
    }

    let onPostChange =()=>{
        // @ts-ignore
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // console.log(text)
    }


    return (

        <div className={c.postBlock}>
             <h2>
                <div>MyPosts</div>
            </h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={c.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;