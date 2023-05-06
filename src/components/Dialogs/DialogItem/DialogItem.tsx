import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../Redux/state";



const DialogItem:React.FC<DialogsType> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar} src={props.avatar} alt=""/>
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    )
}

export default DialogItem;