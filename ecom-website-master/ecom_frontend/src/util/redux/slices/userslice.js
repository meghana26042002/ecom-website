import { createSlice } from "@reduxjs/toolkit";
// import { FaStar } from "react-icons/fa";
// import img1 from './img1.PNG'
const userslice=createSlice({
    name:'userslice',
    initialState:{
            firstname:'Nisha'
        // firstname:<button onClick={()=>{
        //     alert("sign up successful!")
        // }}>Sign Up  </button>,
        // img: <img src={img1} alt="anc"  border='1px solid black'/>,
        // name: 'HAVIT HV-G92 Gamepad',
        // prize: '$120   $160',
        // btn: '-40%',
        // num: '(88)',
        // star: <><FaStar color="gold"/><FaStar color="gold" /><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/></>
    },
    reducers:{
        updatefirstname:(state,action)=>{
        const newfirstname=action?.payload;
        return{...state,firstname:newfirstname,sn:newfirstname}
        // return{...state,img:newfirstname,name:newfirstname,prize:newfirstname,btn:newfirstname,num:newfirstname,star:newfirstname}
    }}

})
export default userslice.reducer;
export const {updatefirstname}=userslice.actions