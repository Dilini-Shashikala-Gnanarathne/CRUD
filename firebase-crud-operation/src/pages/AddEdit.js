import React ,{useState,useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import "./AddEdit.css";
import firebaseDB from "../firebase";
import { toast } from 'react-toastify';


const initialState={
  name:"",
  email:"",
  contact:""
};



const AddEdit = () => {
  const [state,setState]=useState(initialState);
  const[date, setData]=useState({});
  const [name,email,contact]=state;
  const handleInputChange=()=>{};
  const handleSubmit=()=>{};
  return (
    <div style={{marginTop:"100px"}}>
      <form
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center",
      }}
      onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Name</label>
        <input type='text'
        id='name'
        name='name'
        placeholder='Your Name........'
        value={name}
        onChange={handleInputChange}/>
         <label htmlFor='email'>Email</label>
        <input type='email'
        id='email'
        name='email'
        placeholder='Your Email........'
        value={email}
        onChange={handleInputChange}/>
         <label htmlFor='contact'>Contact</label>
        <input type='number'
        id='contact'
        name='contact'
        placeholder='Your Contact Number........'
        value={contact}
        onChange={handleInputChange}/>
        <input 
        type='submit' value=""/>
      </form>
    </div>
  )
}

export default AddEdit
