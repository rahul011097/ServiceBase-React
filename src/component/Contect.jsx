import React from "react";
import '../styles/Contect.scss';

const Contact=()=>{
    return(
        <div className="contact">
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" required placeholder="Enter Name"/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" required placeholder="Enter Your Email"/>
                    </div>
                    <div>
                        <label>Message:</label>
                        <input type="text" required placeholder="Please tell your Query"/>
                    </div>
                    <button type="Submit">Submit</button>
                </form>
            </main>

        </div>
    )
}

export default Contact;