import React from "react";
import "../pages/Home.css"

const Home = () => {
    document.body.style.backgroundColor = "#162c16"
    return(
        <div className="home" id="home">
            <div className="name-container left">
                <p className="name">hello! my name is</p>
                <h1>Madeline Lok</h1>
                <p className="title">I'm a software engineer</p>
                <p className="bio">I'm a pre-med student turned software engineer based in Orange County, CA.</p>
            </div>
            <div className="introduction right">
                <p>
                    After growing up with dreams to become a physician, graduating with a degree in biochemistry,
                    and having 1000+ hours in hospital/clinic settings, I was faced with the realization that I 
                    wanted to expand my horizons. I'd utilized SQL in several of my research labs in college,
                    but I never pursued coding any further. During the pandemic (with the endless amount of free time I had), I tried out a course in
                    Python on Codecademy and soon found that I was picking it up pretty easily. 
                </p>
                <p>
                    I enrolled in NYU's Bridge to Tandon course where I learned the foundations of CS, which propelled my 
                    interest further. I taught myself HTML, JavaScript, CSS, Ruby on Rails, and React, while furthering my 
                    knowledge in Python. I'm also familiar with Heroku, AWS, MongoDB, and DBeaver.  
                    I've worked on a small business website and have several personal projects I've built. 
                </p>
                <p>    
                    When I'm not coding, I'm typically building mechanical keyboards, going for a run, surfing, crocheting,
                    or trying to rank up in Valorant. 
                </p>
            </div>

        </div>
    );
};

export default Home;