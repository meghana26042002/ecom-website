
import React from 'react';
import './About.css';
// import img from './image/img1.PNG';
import { FaUser } from 'react-icons/fa';
const About = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-header">
                <h1 >About Us</h1>
                <p>Learn more about our Electronic Products Company.</p>
            </div>
            <div className="about-us-content">
                <div className="company-story">
                    <h3>Our Story</h3>
                    <p>At Electronic Products Co., we're passionate about providing high-quality electronic gadgets to our customers. Our journey began in 2023 when our
                        founder, XYZ, recognized the need for affordable yet innovative electronic products in the market. Since then, we've been committed to
                        offering cutting-edge technology and exceptional customer service.</p>
                </div>
                <div className="mission-values">
                    <h3>Our Mission & Values</h3>
                    <p>Our mission is to empower individuals with the latest electronic innovations while delivering an unparalleled shopping experience.
                        We strive to uphold the following values:</p>
                    <ul>
                        <li>Quality: We meticulously curate our product selection to ensure durability and performance.</li>
                        <li>Innovation: We stay ahead of the curve by continuously sourcing the latest electronic trends and gadgets.</li>
                        <li>Customer Satisfaction: We prioritize customer satisfaction above all else, offering prompt support and hassle-free returns.</li>
                    </ul>
                </div>
                <div className="team-members">
                    <h3>Our Team</h3>
                    <p>Meet the dedicated individuals behind Electronic Products Co. Our team brings together expertise in product development, customer service, and e-commerce operations to deliver excellence in every aspect of our business.</p>
                    {/* <p><img src={img} alt="image" />ABC</p> */}
                    <h1><FaUser style={{ fontSize: '5rem' }} /> : ABC</h1>
                    <br />
                    <h1><FaUser style={{ fontSize: '5rem' }} /> : DEF</h1>
                    <br />
                    <h1><FaUser style={{ fontSize: '5rem' }} /> : GHI</h1>

                </div>
                {/* Add more sections as needed */}
            </div>
        </div>
    );
}

export default About;
