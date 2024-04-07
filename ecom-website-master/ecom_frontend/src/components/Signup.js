import React, { useState } from 'react'
import axios from 'axios';
import './signup.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
    const navigation = useNavigate()
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')
    const [password, setpassword] = useState('')

    const onSignUpClick = async () => {
        console.log({ name, phone, email, age, password });
        try {
            const response = await axios.post('http://localhost:3000/create-user', { name, phone, email, age, password })
            if (response) {
                setname('')
                setemail('')
                setphone('')
                setage('')
                setpassword('')
                alert("User has been created")
                navigation('/')
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='outter'>
            <div className='innertext'>

                <h2 className='t1'>Create an Account </h2>
                <p className='line1'>Enter Your details below</p>

                <div className='up1'>
                    <label className='nm'>UserName: </label>
                    <input className='ip' onChange={(e) => { setname(e.target.value) }} placeholder='Enter Your UserName' required />
                </div>
                <div className='up1'>
                    <label className='nm'>phone:  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <input className='ip' onChange={(e) => { setphone(e.target.value) }} placeholder='Enter Your phone' required />
                </div>
                <div className='up1'>
                    <label className='nm'>email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input className='ip' onChange={(e) => { setemail(e.target.value) }} placeholder='Enter Your email' required />
                </div>
                <div className='up1'>
                    <label className='nm'>age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <input className='ip' onChange={(e) => { setage(e.target.value) }} placeholder='Enter Your age' required />
                </div>
                <div className='up1'>
                    <label className='nm'>password: </label>
                    <input className='ip' onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter Your password' required />
                </div>
                <div>
                    <button className="btn12" onClick={onSignUpClick} type='submit'>Signup</button>

                </div>

                {/* <button type="submit" className="btn1 btn-primary" onClick={checkuser}>create an account</button> */}
                <p className="login1">Already have account?<Link to='/Login'>&nbsp; Log in</Link></p>
            </div>

        </div>
    )
}
export default Signup;



// import React, { useState } from "react";


// import './signup.css'
// import { Link } from "react-router-dom";
// import simg from './image/signin.PNG'
// import axios from "axios";
// const Signup = () => {
//     const [email, setemail] = useState('');
//     const [pass, setpass] = useState('');
//     const checkuser = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/login-user', { email, pass });
//             if (response?.data?.msg === "user exists") {
//                 alert("user exists")

//             }
//             else {
//                 alert("Wrong credential,check your email and password")
//                 setemail('')
//                 setpass('')
//             }
//         }
//         catch (err) {
//             console.error("Some Error Happend");
//         }
//     }
//     return (<><div className="main">

//         <div className="signup">Create an Account</div>
//         <h5 className="sline">Enter Your details below</h5>
//         <form>
//             <div className="form-group">
//                 <label className="name" for="exampleInputEmail1">Email address</label>
//                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} required />
//                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//             </div>
//             <div className="form-group">
//                 <label className="name1" for="exampleInputPassword1">Password</label>
//                 <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => { setpass(e.target.value) }} required />
//             </div>

//             <button type="submit" className="btn1 btn-primary" onClick={checkuser}>create an account</button>
//             <p className="login">Already have account?<Link to='/Login'>&nbsp; Log in</Link></p>
//         </form>
//     </div><div>
//             <img className="image" src={simg} alt="sing in image" />
//         </div></>
//     )
// }
// export default Signup;

