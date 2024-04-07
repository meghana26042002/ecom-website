import React, { useEffect, useState } from "react";
 import './New1.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  FaEye, FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updatedata } from "../util/redux/slices/userdata";
import { categoryData } from "./dummystoredata/databycategory";
import { useLocation, useParams } from "react-router-dom";
const New1 = () => {
    const location = useLocation();
    const dispatch = useDispatch();
   const { cartitem } = useSelector(state => state.userdata)
    const addtocart = (item) => {
        dispatch(updatedata(item))
    }
    console.log(location?.state?.category);
    const [data, setdata] = useState(
        [
        {
            img: '/img1.PNG',
            name: 'HAVIT HV-G92 Gamepad',
            price: '$120   $160',
            btn: '-40%',
            num: '(88)',
            star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

        },
        {
            img: '/img2.PNG',
            name: 'AK-900 Wired Keyboard',
            price: '$960   $1160',
            btn: '-35%',
            num: '(75)',
            star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gray" /></>


        },
        {
            img: '/img3.PNG',
            name: 'IPS LCD Gaming Monitor',
            price: '$370 $400',
            btn: '-30%',
            num: '(99)',
            star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

        },
        {
            img: '/img4.PNG',
            name: 'S-Series Comfort Chair',
            price: '$375  $400',
            btn: '-25%',
            num: '(99)',
            star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar /></>
        },
        {
            img: '/img1.PNG',
            name: 'HAVIT HV-G92 Gamepad',
            price: '$120   $160',
            btn: '-40%',
            num: '(88)',
            star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

        },
        {
            img: '/img4.PNG',
            name: 'S-Series Comfort Chair',
            price: '$375  $400',
            btn: '-25%',
            num: '(99)',
            star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar /></>
        } 
    ])
    useEffect(() => {
        if (location?.state?.category) {
            const category = categoryData[location?.state?.category];
            setdata(category);
        }
    }, [location.state])
       return (
            <>
             <div
                    style={{
                        display: 'flex',
                        overflow: 'scroll'
                     }}>
                    {
                        data.map((item, id) => (
                            <div key={id} className="combo">
                                <img src={item.img} alt="image" className="i" />
                                <span className="eh">
                                    <FaEye className="e" />
                                    <FaHeart className="hr" onClick={() => addtocart(item)} />
                                 </span>
                                <button className="b">{item.btn} </button>
                                <h5>{item.name}</h5>
                                {/* <h6 style={{fontSize:'0.8rem'}}>{item.description}</h6> */}

                                <h6>{item.price}</h6>
                                <h6>{item.star}{item.num}</h6>
                            </div>
                        ))}
                </div>
                    
                <div>
                    <button className="button" onClick={() => {
                        alert('View all products')
                    }}>View All Products</button>

                </div>
            </>
        );
}
export default New1

    // const data = [
    //     {
    //         img: '/img1.PNG',
    //         name: 'HAVIT HV-G92 Gamepad',
    //         price: '$120   $160',
    //         btn: '-40%',
    //         num: '(88)',
    //         star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

    //     },
    //     {
    //         img: '/img2.PNG',
    //         name: 'AK-900 Wired Keyboard',
    //         price: '$960   $1160',
    //         btn: '-35%',
    //         num: '(75)',
    //         star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gray" /></>


    //     },
    //     {
    //         img: '/img3.PNG',
    //         name: 'IPS LCD Gaming Monitor',
    //         price: '$370 $400',
    //         btn: '-30%',
    //         num: '(99)',
    //         star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

    //     },
    //     {
    //         img: '/img4.PNG',
    //         name: 'S-Series Comfort Chair',
    //         price: '$375  $400',
    //         btn: '-25%',
    //         num: '(99)',
    //         star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar /></>
    //     },
    //     {
    //         img: '/img1.PNG',
    //         name: 'HAVIT HV-G92 Gamepad',
    //         price: '$120   $160',
    //         btn: '-40%',
    //         num: '(88)',
    //         star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

    //     },
    //     {
    //         img: '/img4.PNG',
    //         name: 'S-Series Comfort Chair',
    //         price: '$375  $400',
    //         btn: '-25%',
    //         num: '(99)',
    //         star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar /></>
    //     }
    // ]

    // import React from 'react'
    // import './New1.css'
    // import img1 from './image/img1.PNG'
    // import img2 from './image/img2.PNG'
    // import img3 from './image/img3.PNG'
    // import img4 from './image/img4.PNG'
    // // import Slider from "react-slick";
    // // import "slick-carousel/slick/slick.css";
    // //  import "slick-carousel/slick/slick-theme.css";
    // import {  FaEye, FaHeart, FaStar } from "react-icons/fa";
    // import Carousel from 'react-bootstrap/Carousel';
    // export const New1 = () => {
    //     // const settings = {
    //     //             dots: true,
    //     //             infinite: true,
    //     //             speed: 500,
    //     //             slidesToShow: 3,
    //     //             slidesToScroll: 3,
    //     //             color:'black'
    //     //         };
    //     return(
    //         <div className='main'>
    //             {/* <Slider {...settings}> */}

    //                 <Carousel>
    //                     <section>
    //                         <Carousel.Item>

    //                             <div className="scroll">
    //                                 <img className='image' src={img1} alt="img1" width='10%' border='1px solid gray' />
    //                                 <FaHeart className="heart" />
    //                                 <FaEye className="eye" />
    //                                 <button className="btn">-40%</button>
    //                                 <br />
    //                                 <h5 className="h5">HAVIT HV-G92 Gamepad</h5>
    //                                 <h5 className="h6">$120 &nbsp; $160</h5>
    //                                 <p className="h6"> <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" />&nbsp;(88)</p>
    //                             </div>
    //                         </Carousel.Item>

    //                         <Carousel.Item>

    //                             <div className="scroll1">
    //                                 <img className='image1' src={img2} alt="img2" width='13.5%' border='1px solid gray' />
    //                                 <FaHeart className="heart" />
    //                                 <FaEye className="eye" />
    //                                 <button className="btn1">-35%</button>
    //                                 <br />
    //                                 <h5 className="h1">AK-900 Wired Keyboard</h5>
    //                                 <h5 className="h2">$960 &nbsp; $1160</h5>
    //                                 <p className="h2"> <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gray" />&nbsp;(75)</p>
    //                             </div>
    //                         </Carousel.Item>

    //                         <Carousel.Item>

    //                             <div className="scroll2">
    //                                 <img className='image3' src={img3} alt="img3" width='18%' border='1px solid gray' />
    //                                 <FaHeart className="heart" />
    //                                 <FaEye className="eye" />
    //                                 <button className="btn2">-30%</button>
    //                                 <br />
    //                                 <h5 className="h3">IPS LCD Gaming Monitor</h5>
    //                                 <h5 className="h4">$370 &nbsp; $400</h5>
    //                                 <p className="h4"> <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" />&nbsp;(99)</p>
    //                             </div>
    //                         </Carousel.Item>

    //                         <Carousel.Item>
    //                             <div className="scroll3">

    //                                 <img className='image4' src={img4} alt="img3" width='30%' border='1px solid gray' />
    //                                 <FaHeart className="heart" />
    //                                 <FaEye className="eye" />
    //                                 <button className="btn3">-25%</button>
    //                                 <br />
    //                                 <h5 className="h7">S-Series Comfort Chair</h5>
    //                                 <h5 className="h8">$375 &nbsp; $400</h5>
    //                                 <p className="h8"> <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" />&nbsp;(99)</p>

    //                             </div>
    //                         </Carousel.Item>
    //                     </section>
    //                     </Carousel>
    //                     {/* </Slider> */}
            
       
    //         <div>
    //                 <button className="button" onClick={() => {
    //                     alert('View all products')
    //                 } }>View All Products</button>

    //             </div>
    //             </div>

    //     )}
    //     export default New1


  
  
