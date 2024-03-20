import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {




    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>
        )

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <MessageItem text={message.message}/>
        )

    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return(<form onSubmit={props.handleSubmit}>
        <Field component={Textarea} validate={[maxLength50,required]} name={"newMessageBody"} placeholder='Enter your message'/>
        <div>
            <button>Send</button>
        </div>
    </form>)
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessage"})(AddMessageForm)
export default Dialogs