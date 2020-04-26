import React, {useState} from "react";
import Button from "../Common/Button";
import EditBox from "../Common/EditBox";

const LoginForm = ({isLogin, action, error}) => {

    const [username, setUsername] = useState('benny');
    const [password, setPassword] = useState('benny');

    const mainText = isLogin ? 'Log in' : 'Sign up';
    return (
        <>
            <div>
                <h1>{mainText}</h1>
                <EditBox onChangeFunc={(e) => setUsername(e.target.value)} value={username} placeholder='Enter Email'/>
                <EditBox onChangeFunc={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Password'/>
                <Button onChangeFunc={() => action(username, password)} text={mainText}/>
                <h2>{error}</h2>
            </div>
        </>
    );
};

export default LoginForm;