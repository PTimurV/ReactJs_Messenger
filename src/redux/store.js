import ReactDOM from "react-dom/client";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'hi, tim', likesCount: 0},
                {id: 2, message: 'hi, aleks', likesCount: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Timuch'},
                {id: 2, name: 'Timuch2'},
                {id: 3, name: 'Timuch3'},
                {id: 4, name: 'Timuch4'},
                {id: 5, name: 'Timuch5'},
                {id: 6, name: 'Timuch6'},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'den rojdenia'},
                {id: 4, message: 'den tim'},
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber()
    }
}






export default store