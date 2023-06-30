import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth' ;

import {auth} from '../config/firebase';
import { useState } from 'react';

function SignUp () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (()=> {
        createUserWithEmailAndPassword(auth,email, password).then(()=>{
            alert("Registered successfully");
        }).catch((error)=>{
            console.log(error.message)
        })
    })
    return (
        <div>
            <h1>SignUp Page</h1>

            <input type="text" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}/><br></br>

            <input type="passoword" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} /><br></br><br></br>

            <button onClick={register}>Sign up</button>

        </div>
    )
}
export default SignUp