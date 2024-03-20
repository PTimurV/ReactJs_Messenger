import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {
    let postsElement = props.postData.map(p => <Post message={p.message} count={p.likesCount}/>)


    let onAddPost = (values) => {
       props.addPost(values.newPostBody)
    }


    return (
        <div className={s.posts}>
            <div>
                MyPosts
            </div>
            <AddNewPostForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>)
}

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostBody"} placeholder={"Post message"} validate={[required, maxLength10]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )

}





AddNewPostForm = reduxForm({form: "AddNewPostForm"})(AddNewPostForm)
export default MyPosts