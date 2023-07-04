import { createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useHistory } from "react-router-dom";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      password: "",
    },
  },
  reducers: {
    signUp: (state, action) => {
      createUserWithEmailAndPassword(auth, action.payload, action.payload)
        .then(() => {
          alert("Registered successfully");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    signIn: (state, action) => {
      signInWithEmailAndPassword(auth, action.payload, action.payload)
        .then(() => {
          alert("Loged in successfully");
        })
        .catch((error) => {
          console.log(action.payload);
          console.log(action.payload);
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },
    signingOut:()=>{
        signOut(auth)
        .then(()=>{
           return true;
        })
        .catch((error)=>{});
    }
  },
});
export const { signUp, signIn, signingOut } = authSlice.actions;
export default authSlice.reducer;
