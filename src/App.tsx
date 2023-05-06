import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import state, {StateType} from "./Redux/state";
import Dialogs from "./components/Dialogs/Dialogs";

type AppPropsType = {
    state: StateType
    addPost: (postMessage: string) => void

    updateNewPostText: (text: string) => void
}


const App: React.FC<AppPropsType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path="/dialogs" component={Dialogs}/>*/}
                {/*<Route path="/profile" component={Profile}/>*/}

                <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagesPage.dialogs}
                                                              messages={props.state.messagesPage.messages}/>}/>
                <Route path="/profile"
                       render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}
                                              pofilePage={props.state.profilePage}
                                              newPostText={props.state.profilePage.newPostText}
                                              updateNewPostText={props.updateNewPostText}/>}/>

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;
