import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"



const LoginForm = (props) => {
    return (<div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} validate={[required]} name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} validate={[required]} name={"password"} type={"password"} component={Input}/>
            </div>
            <div>
                <Field component={Input}  name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) =>{
       props.login(formData.email,formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Navigate to ={"/profile"}/>
    }


    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)