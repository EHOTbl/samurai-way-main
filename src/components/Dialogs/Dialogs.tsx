import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'> Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Lesha</NavLink>
                </div>
                <div className={s.dialog}>
                     <NavLink to='/dialogs/3'>Igor</NavLink>
                </div>
                <div className={s.dialog}>
                     <NavLink to='/dialogs/4'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                     <NavLink to='/dialogs/5'>Ignat</NavLink>
                </div>
                <div className={s.dialog}>
                     <NavLink to='/dialogs/6'>Oleg</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Kamasutra</div>
                <div className={s.message}>Tester</div>
            </div>
        </div>
    )
}

export default Dialogs