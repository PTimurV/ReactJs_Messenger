import profileReducer from "./profile-reducer";
const SEND_MESSAGE = "SEND-MESSAGE";
let initinalState = {
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
    ]
}
const dialogsReducer = (state = initinalState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}]
            }

        default:
            return state
    }
}

export let sendMessageCreator = (body) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: body
    }
}

export default dialogsReducer