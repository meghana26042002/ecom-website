import React, { useState } from "react";
import './login.css'
import simg from './image/signin.PNG'
import axios from "axios";
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpass] = useState('');
    const checkuser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login-user', { email, password });
            if (response?.data?.msg === "user exists") {
                setemail('')
                setpass('')
                alert("user exists")

            }
            else {
                alert("Wrong credential,check your email and password")
                setemail('')
                setpass('')
            }
        }
        catch (err) {
            console.error("Some Error Happend");
        }
    }
    return (<><div className="main">

        <div className="signup">Log In</div>
        <h5 className="sline">Enter Your details below</h5>
        <form>
            <div className="form-group">
                <p className="name" for="exampleInputEmail1">Email </p>
                <input className="form-control" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} required />
            </div>

            <div className="form-group">
                <label className="name1" for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => { setpass(e.target.value) }} required />
            </div>

            <button type="submit" className="btn1 btn-primary" onClick={checkuser}>LogIn</button>
        </form>
    </div><div>
            <img className="image" src={simg} alt="sing in image" />
        </div></>
    )
}
export default Login;