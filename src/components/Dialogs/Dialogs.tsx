import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {DialogsType, MessagesType} from "../../Redux/state";


type DialogsAndMessagesType={
    dialogs:DialogsType[],
    messages:MessagesType[],

}

const Dialogs:React.FC<DialogsAndMessagesType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar ={d.avatar} />
                )}

            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message}/>)}

            </div>
        </div>
    )
}

export default Dialogs