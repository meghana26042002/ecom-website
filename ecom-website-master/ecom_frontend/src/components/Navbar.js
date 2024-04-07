import React, { useState } from "react";
import { useSelector} from "react-redux";
import { FaBars, FaCartPlus, FaHeart, FaPhone, FaPhoneSquare, FaPhoneSquareAlt, FaSearch } from 'react-icons/fa'
import './Cart'
import { Link } from "react-router-dom";
import './Navbar.css'
import { FaTableCells } from "react-icons/fa6";
const Navbar = () => {
    const { cartitem } = useSelector(state => state.userdata)

    const [showmenu,setshowmenu]=useState(false)
    const openmenu=()=>{
        setshowmenu(!showmenu);
    }
    // const showmenucss = {
    //     display: showmenu ? 'flex' : 'none',
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     zIndex: 2,
    //     marginTop: '-5rem',
    //     position: 'absolute',
    //     height: showmenu ? 'auto' : 0,
    //     overflow: 'hidden',
    //     transition:'height is ease-in-out'
    // } 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/Signup">Exclusive</Link>
                        
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link " to="/Timer">Items</Link>
                            <Link className="nav-link" to="/About">About</Link>
                            <Link className="nav-link" to="/Signup">Sign Up</Link>
                            <input className="form-control-me-2 " type="search" placeholder="Search" aria-label="Search"  />
                            <button className="btn btn-outline-success" id="btn" type="submit"><FaSearch style={{ margin: '5px' }} /></button>
                            <Link  to='/Cart'><div style={{ position: 'relative' }}><FaCartPlus className="icon"  /><p className="cartlength" > </p></div></Link>
                    <Link to='/Cart'><div style={{ position: 'relative' }}><FaHeart className="icon" /> <p className="cartlength" >{cartitem?.length} </p></div></Link>
                    <Link to='/Contact'><div style={{ position: 'relative' }}> <FaPhoneSquareAlt className="icon" /></div></Link>     
                             <FaBars className="baricon" onClick={openmenu} />
                                     {showmenu && (
                                         <ul className="menu">
                                            <a href="/" >Home</a><br/>
                                            <a href="/Timer" >Items</a><br/>
                                            <a href="/About">About</a><br/>
                                            <a href="/Signup" >Sign Up</a>
                                         </ul>
                                       )} 
                    
                        </div>
                    </div>
                </nav>
         
    )
}

export default Navbar;

// <div classNameName="navbar">
//             <div classNameName="leftview">Exclusive</div>
//             <div classNameName="rightview">
//             <div classNameName="menubar">
//                     <Link classNameName="nav" to='/'>Home</Link>
//                     <Link classNameName="nav" to='/Timer'>Contact</Link>
//                     <Link classNameName="nav" to='/About'>About</Link>
//                     <Link classNameName="nav" to='/Signup'>Sign Up</Link>
//                 </div>


//                 <div classNameName="isearch">
//                     <input classNameName="input" placeholder="What are you looking for? " />
//                     <FaSearch classNameName="icon" />
//                 </div>
                
//                 <div><FaHeart classNameName="icon" /></div>

//                 <div><FaCartPlus classNameName="icon" /></div>
//                 <div classNameName="baricon">
//                 <FaBars  onClick={toggledropdown} />
//                    {showdropdown && (
//                      <ul >
//                         <a href="/" classNameName="menu">Home</a><br/>
//                         <a href="/Timer" classNameName="menu">Contact</a><br/>
//                         <a href="/About"classNameName="menu">About</a><br/>
//                         <a href="/Signup" classNameName="menu">Sign Up</a>
//                      </ul>
//                    )} 
//                 </div>
//             </div>
            
           
//         </div>
// import React from "react";
// import { Link } from "react-router-dom";
// import './Navbar.css'
// import { FaCartPlus, FaHeart, FaSearch} from 'react-icons/fa'
// const Navbar=()=>
// {
//     return(
//         <>
//         <div classNameName="leftview">Exclusive</div>
//         <div classNameName="rightview">
//         <Link classNameName="nav" to='/'>Home</Link> 
//         <Link classNameName="nav" to='/Timer'>Contact</Link>
//         <Link classNameName="nav"to='/About'>About</Link>
//         <Link classNameName="nav"to='/Home'>Sign Up</Link>
//         <div classNameName="isearch"><input classNameName="input"placeholder="What are you looking for? " ></input><FaSearch classNameName="icon"/></div>
//         <div><FaHeart classNameName="icon"/></div>
//         <div><FaCartPlus classNameName="icon"/></div>

// </div>
// <br/>
// <hr/>
//         </>
//     )
// }

// export default Navbar