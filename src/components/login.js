import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useHistory, Link  } from "react-router-dom";
import {auth} from '../config/firebase'

function Login () {

    const history = useHistory() ;
    const [email, setEmail] = useState('');
    const [passoword, setPassword] = useState('');
    

    const goToHomePage = (()=>{
        signInWithEmailAndPassword(auth, email, passoword).then(() =>{
            alert("Log in succefully");
            history.push('/home');
        }).catch((error) =>{
         

        })

        

    })

    
    return (
        <div>
            <h1>Login Page</h1>

            <input type="text" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}/><br></br>

            <input type="passoword" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} /><br></br><br></br>

            <button onClick={goToHomePage}>Login</button><br></br><br></br>
            <Link to="forgotpassword">Forgot password</Link><br></br>
            <Link to="signUp">Don't have an account : Sign Up</Link>
           
        </div>
    )
    
}
export default Login