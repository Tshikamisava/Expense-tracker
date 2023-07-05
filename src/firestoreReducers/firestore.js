import {createSlice} from '@reduxjs/toolkit';

import { collection, addDoc } from 'firebase/firestore';
import {db} from '../config/firebase';

export const fireStoreReducer = createSlice({
    name:"db",
    initialState:[{
        transactionItem:"",
        amount:"",
        transactionType:"",

    }],

    reducers:{
        addTransaction: async (state, action)=>{
            try {
              const docRef = await addDoc(
                collection(db, "transactions"),
                action.payload
              );
              alert('Added succssfully');
            } catch (err) {}
        }
    }
})
export const {addTransaction} = fireStoreReducer.actions;

export default fireStoreReducer.reducer

