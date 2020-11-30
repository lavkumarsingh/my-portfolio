import React from 'react';
import './Contacts.css'

function Contacts() {
    return(
        <div className="contact__container">
            <div className="contact__heading">
                <h1>Contacts</h1>
            </div>

            <div className="contact">
                <div className="myContact">
                    <p>Always available for <sapn className="hilight">freelance</sapn> work if the right project comes along. 
                    Feel free to contact me for any project or just to say <sapn className="hilight">"Hi👋"</sapn></p>

                    <div className="contact__link">
                        <img src="/message.png" alt="" />
                        <p>lavsingh68495@gmail.com</p>
                    </div>

                    <div className="contact__link">
                        <img src="/phone.png" alt="" />
                        <p>+91 8630200972</p>
                    </div>
                </div>  

                <div className="contactMe">
                    <form>
                        <input className="input" type="text" placeholder="Name" required />
                        <input className="input" type="email" placeholder="Email" required />
                        <textarea className="text__area" placeholder="Message" required/>
                    </form>
                </div>  
            </div>  
        </div>
    )
}

export default Contacts;