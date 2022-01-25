import React, { Component }from "react";
import pikaPika from "../images/pika.jpeg"


function Main(){
    return(
        <main>
            <img src={pikaPika} className="pfp-icon"/>
            <h1 className="name-header">Aanchal Saxena</h1>
            <p className="job-title">Full Stack Engineer</p>
            <small>www.aanchal.xyz</small>
            <br />
            <div className="main-content">
                <div className="btn-top">
                    <button 
                        type="button" className="btn-top-g" onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/aanchalcoder18';
                        }}> 
                        Github
                    </button>
                
                    <button
                        type="button" className="btn-top-g" onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.linkedin.com/in/aanchalsaxena/';
                        }}> 
                        LinkedIn
                    </button>
                </div>
                <h3>About Me</h3>
                <p>
                    I’m a User Experience & Interface Designer and a Frontend Developer. As a recent graduate, I am open to any industry and am passionate about making design more accessible and streamlined.
                </p>
                <h3>Interest</h3>
                <p>
                    Swimming, Reading, Travel Geek
                </p>
            </div>
        </main>
    )
}

export default Main;