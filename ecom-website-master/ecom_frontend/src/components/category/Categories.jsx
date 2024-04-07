import React from "react";
import './Categories.css'
import { GiSmartphone } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraSharp } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Categories = () => {
    const navigation = useNavigate();
    const option = [
        { id: 0, action: () => { navigation('Timer', { state: { category: 'Smartwatch' } }) }, catergoryLabel: 'Smart Watches', icon: <BsSmartwatch size={'5rem'} /> },
        { id: 1, action: () => { navigation('Timer', { state: { category: 'Smartphone' } }) }, catergoryLabel: 'Smart Phones', icon: <GiSmartphone size={'5rem'} /> },
        { id: 2, action: () => { navigation('Timer', { state: { category: 'Game' } }) }, catergoryLabel: 'Game', icon: <FaGamepad size={'5rem'} /> },
        { id: 3, action: () => { navigation('Timer', { state: { category: 'Computer' } }) }, catergoryLabel: 'Computer', icon: <RiComputerLine size={'5rem'} /> },
        { id: 4, action: () => { navigation('Timer', { state: { category: 'Headphones' } }) }, catergoryLabel: 'HeadPhones', icon: <FaHeadphones size={'5rem'} /> },
        { id: 5, action: () => { navigation('Timer', { state: { category: 'Camera' } }) }, catergoryLabel: 'Cameras', icon: <IoCameraSharp size={'5rem'} /> },
    ]
    return (
        <><div className="horzline"></div>
            <div style={{ margin: '-5rem 1.5rem' }}>
                <div className="redlogo"></div>

                <h5 style={{ color: 'red', margin: '8rem 3.5rem  0' }}>Categories</h5>
                <h3 style={{ margin: '1rem 1.5rem' }}>Browse By Category</h3>
                <div className="category"  >
                    {option.map(({ id, catergoryLabel, icon, action }) => {
                        return (
                            <div onClick={action} key={id} className="iconstyle" >
                                {icon}
                                <p style={{ textAlign: 'center' }}>{catergoryLabel}</p>
                            </div>
                        );
                    })}
                </div>
            </div></>
    )
}
export default Categories;