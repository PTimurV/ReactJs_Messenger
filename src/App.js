import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                {/*<div className="app-wrapper-content">*/}
                {/*    <Route component={Dialogs}/>*/}
                {/*    <Route component={Profile}/>*/}
                {/*</div>*/}
                <div className="app-wrapper-content">
                    <Routes>
                        <Route  path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route  path="/profile/:userId?" element={<ProfileContainer />}/>
                        <Route  path="/users/" element={<UsersContainer />}/>
                        <Route  path="/login" element={<Login />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
