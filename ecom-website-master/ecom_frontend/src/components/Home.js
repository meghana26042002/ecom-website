import React, { useEffect, useState } from "react";
import './Home.css'
import img from './image/Capture.PNG'
import { FaAngleRight } from "react-icons/fa";
import Categories from "./category/Categories";
import axios from 'axios'
const Home = () => {
    const [state, setstate] = useState(false);
    const [userdata, setuserdata] = useState([]);

    const sd = () => {
        setstate(true);
    }
    const hd = () => {
        setstate(false);
    }

    // const getUserdata = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:3000/getdata")
    //         if (response) {
    //             setuserdata(response?.data)

    //             console.log(response.data, "data from backEND");
    //         }
    //     }
    //     catch (err) {
    //         console.error(err)
    //     }
    // }
    // useEffect(() => {
    //     getUserdata();
    // }, [])
    return (
        <>
            <div className="v1"></div>
            <div>
                <img className="img" src={img} alt="abc" />
            </div>
            <div className="list">
                <ul >
                    <div onMouseEnter={sd} onMouseLeave={hd}>
                        <p >Woman's Fashian  <FaAngleRight className="arrow" />

                            {
                                state ? (<ul onMouseEnter={sd} onMouseLeave={hd}>
                                    <p>- A1</p>
                                    <p>- B</p>
                                </ul>) :
                                    null}
                        </p>  </div>
                    <div>
                        <div onMouseEnter={sd} onMouseLeave={hd}>
                            <p>Men's Fashian  <FaAngleRight className="arrow1" />
                                {
                                    state ? (<ul onMouseEnter={sd} onMouseLeave={hd}>
                                        <p>- A</p>
                                        <p>- B</p>
                                    </ul>) :
                                        null}
                            </p></div>
                    </div>
                    <p>Electronics</p>
                    <p>Home & pfestyle</p>
                    <p>Medicine</p>
                    <p>Sports & Outdoor</p>
                    <p>Baby's & Toys</p>
                    <p>Groceries & Pets</p>
                    <p>Health & Beauty</p>

                </ul>
            </div>

            <Categories />
            <div>
                {
                    userdata?.map((item) => {
                        return <div>
                            <h5>{item?.name}</h5>
                        </div>
                    })
                }
            </div>
        </>

    )
}
export default Home