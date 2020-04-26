import React, {useState} from "react";
import Button from "../Common/Button";
import EditBox from "../Common/EditBox";

const SignUpForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div>
                <h1>Sign up!</h1>
                <EditBox onChangeFunc={setUsername} value={username} placeholder='Enter Email' />
                <EditBox onChangeFunc={setPassword} value={password} placeholder='Enter Password' />
                <Button onChangeFunc={() => alert('login!!')} text='Log in' />
            </div>
        </>
    );
};

export default SignUpForm;