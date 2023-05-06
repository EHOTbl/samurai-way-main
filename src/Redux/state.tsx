// let posts:PostsType[] = [
//     {id: 1, message: "Hi,how are you", likesCount: '15'},
//     {id: 2, message: "It's second post", likesCount: '11'},
//     {id: 3, message: "TS", likesCount: '23'},
//     {id: 4, message: "TS2", likesCount: '23'},
//     {id: 5, message: "TS3", likesCount: '23'},
// ];
// let dialogs:DialogsType[] = [
//     {id: 1, name: "Dima"},
//     {id: 2, name: "Leha"},
//     {id: 3, name: "Sveta"},
//     {id: 4, name: "Ignat"},
//     {id: 5, name: "Oleg"},
//     {id: 6, name: "Olya"},
// ]
// let messages:Array<MessagesType> = [
//     {id: 1, message: "Hi"},
//     {id: 2, message: "Kamasutra"},
//     {id: 3, message: "Tester"},
//     {id: 4, message: "How are you"},
//     {id: 5, message: "UFO"},
//     {id: 6, message: "Join us"},
// ]


let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi,how are you", likesCount: '15'},
                {id: 2, message: "It's second post", likesCount: '11'},
                {id: 3, message: "TS", likesCount: '23'},
                {id: 4, message: "TS2", likesCount: '23'},
                {id: 5, message: "TS3", likesCount: '23'},
            ],
            newPostText:"StringProps"
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Dima", avatar:"../avatars/1.svg"},
                {id: 2, name: "Leha", avatar:"../avatars/2.svg"},
                {id: 3, name: "Sveta", avatar:"../avatars/3.svg"},
                {id: 4, name: "Ignat", avatar:"..//avatars/4.svg"},
                {id: 5, name: "Oleg", avatar:"../avatars/5.svg"},
                {id: 6, name: "Olya", avatar:"..//avatars/6.svg"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Kamasutra"},
                {id: 3, message: "Tester"},
                {id: 4, message: "How are you"},
                {id: 5, message: "UFO"},
                {id: 6, message: "Join us"},
            ]
        }
        , sidebar: {},
    },
    getState(){
        return this._state;
    },
    _callSubscriber(state:any){
        console.log("state changed")
    },
     addPost(){
        let newPost = {
            id:6,
            message:this._state.profilePage.newPostText,
            likesCount:0,
        }
        // @ts-ignore
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText =''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText:string){
        // @ts-ignore
        this._state.profilePage.newPostText =newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer:any){
        this._callSubscriber=observer
    }
}

// let renderedEntireTree=(state:any)=>{
//     }

export type PostsType = {
    id: number,
    message: string,
    likesCount: string
}
export type DialogsType = {
    id: string | number,
    name: string
    avatar:string
}


export type MessagesType = {
    id: string | number,
    message: string
}

export type profilePageType ={

}

export type StateType = {
    profilePage: {
        posts: Array<PostsType>,
        newPostText:string
    },
    messagesPage: {
        dialogs: DialogsType[],
        messages: Array<MessagesType>
    },
    sidebar: SidebarType

}


type SidebarType = {}

// let state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi,how are you", likesCount: '15'},
//             {id: 2, message: "It's second post", likesCount: '11'},
//             {id: 3, message: "TS", likesCount: '23'},
//             {id: 4, message: "TS2", likesCount: '23'},
//             {id: 5, message: "TS3", likesCount: '23'},
//         ],
//         newPostText:"StringProps"
//     },
//     messagesPage: {
//         dialogs: [
//             {id: 1, name: "Dima", avatar:"../avatars/1.svg"},
//             {id: 2, name: "Leha", avatar:"../avatars/2.svg"},
//             {id: 3, name: "Sveta", avatar:"../avatars/3.svg"},
//             {id: 4, name: "Ignat", avatar:"..//avatars/4.svg"},
//             {id: 5, name: "Oleg", avatar:"../avatars/5.svg"},
//             {id: 6, name: "Olya", avatar:"..//avatars/6.svg"},
//         ],
//         messages: [
//             {id: 1, message: "Hi"},
//             {id: 2, message: "Kamasutra"},
//             {id: 3, message: "Tester"},
//             {id: 4, message: "How are you"},
//             {id: 5, message: "UFO"},
//             {id: 6, message: "Join us"},
//         ]
//     }
//     , sidebar: {},
// }

// export let addPost =()=>{
//     let newPost = {
//         id:6,
//         message:state.profilePage.newPostText,
//         likesCount:0,
//     }
//     // @ts-ignore
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText =''
//     renderedEntireTree(state)
// }

// export let updateNewPostText =(newText:string)=>{
//
//     // @ts-ignore
//     state.profilePage.newPostText =newText;
//     renderedEntireTree(state)
// }

// export const subscribe=(observer:any)=>{
//     renderedEntireTree=observer
// }

export default store;