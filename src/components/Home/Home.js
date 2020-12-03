import React from 'react'
import './Home.css'

function Home() {   
    return (
        <div className="hero">
            <div className="heading__section">  
            <div className="heading"> 
                <p>
                    <span className="greetings">Hey there!</span> <br />
                    <span className="name">I'm Lav Singh</span> <br />
                    <span><span className="state">Independent </span> <span className="skill__set">Web Developer</span></span>
                </p>         

                <div className="">
                    <div className="lable">
                        <div className="sub__head"></div>
                        <p className="sub__content">I DESIGN AND DEVELOP WEB APPS</p>
                    </div>
                    <a href="/Resume.pdf" download="Resume">
                        <button className="btn_download">DOWNLOAD RESUME</button>
                    </a>
                </div>
            </div>

            </div>

            <div className="content__area">
                <div className="left__section">
                    <img style={{opacity: "0.5"}} src="/circle_group.png" alt="" />
                </div>

                <div className="me__img">
                    <img src="/me.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
