import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


 let renderedEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(state)}/>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderedEntireTree(store.getState())
store.subscribe(renderedEntireTree)
