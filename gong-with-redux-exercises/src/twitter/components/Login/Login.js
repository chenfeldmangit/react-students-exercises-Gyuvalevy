import React, {useState} from "react";
import PropTypes from 'prop-types';
import Button from "../Common/Button";
import LoginForm from "./LoginForm";

const Login = (props) => {

    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const login = () => {
        setShowLogin(true);
        setShowSignUp(false);
    }

    const signUp = () => {
        setShowLogin(false);
        setShowSignUp(true);
    }

    return (
        <>
            {(showLogin || showSignUp)
                ? (<LoginForm isLogin={showLogin} action={showLogin ? props.tryLogin : props.signUp} error={props.error} />)
                : (
                    <div>
                        <Button onChangeFunc={login} text="Log in"/>
                        <Button onChangeFunc={signUp} text="Sign up"/>
                    </div>
                )
            }
        </>
    );
};

export default Login;

Login.propTypes = {
    tryLogin: PropTypes.func,
    signUp: PropTypes.func,
    error: PropTypes.string,
}