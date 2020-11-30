import React from 'react';
import './About.css'

function About() {
    return(
        <div className="about__container">
            <div className="about__heading">
                <h1>About</h1>
            </div>

            <div className="about__area">
                <div className="intro">
                    <p><i>“I am passionate about my work. Because I love what I do, 
                        I have a steady source of self motivation that drives me to do my best. 
                        I challenge myself daily and learn new skills that helped me to do better
                        work.”</i></p>
                </div>

                <div className="skills">
                    <h1>My skills</h1>
                    
                    <div className="">
                        <h3></h3>
                    <div className="skill__icons">
                        <img src="https://hackr.io/tutorials/solidity/logo-solidity.svg?ver=1553831680" alt="" />
                        <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="" />
                        <img src="https://www.pngkey.com/png/full/222-2224685_react-logo-png-transparent-react-logo.png" alt="" />
                        <img src="https://ludu-assets.s3.amazonaws.com/lesson-icons/26/i0fLErLtaPoc8J67WzIC" alt="" />
                        <img src="https://www.trufflesuite.com/img/truffle-logo-dark.svg" alt="" />
                        <img src="https://www.trufflesuite.com/img/ganache-logo-dark.svg" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg" alt="" />
                    </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default About;