import s from "../Dialogs.module.css"

const MessageItem =(props)=>{
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export default MessageItem