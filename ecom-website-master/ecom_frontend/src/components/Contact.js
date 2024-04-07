import React from "react";
import { useSelector } from "react-redux";
import './Contact.css'
const Contact = () => {
    const { firstname } = useSelector(state => state.userslice)
    const { cartname } = useSelector(state => state.userdata)
    return (

        <><div>
            <header>
                <h1>Contact Us</h1>
            </header>
            <div className="contact-details">
                <h2>Contact Details</h2>
                <p>Phone: 123-456-7890</p>
                <p>Email: contact@example.com</p>
                <p>Address: 123 Main Street, Pune, India</p>
            </div>
            <main>
                <form action="">
                    <div className="data">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="data">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="data">
                        <label for="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="data">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <div>
                        <button className="submit" type="submit" onClick={() => { alert("send Message") }} >Submit</button>
                    </div>
                </form>
            </main>
        </div>
        </>
    )
}
export default Contact;