import React, {useEffect, useState} from "react";
import linkedinIcon from "../media/linkedin-icon.png";
import githubIcon from "../media/github-icon.png";
import homeIcon from "../media/home-icon.png";
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="left-nav">
                    <li>
                        <a href="#"><img src={homeIcon} alt="Home Icon" class="nav-icon"/></a>
                        {/* 
                        Attribution
                        <a target="_blank" href="https://icons8.com/icon/2797/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                        */}
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                </ul>
                <ul className="right-nav">
                    <li>
                        <a href="https://www.linkedin.com/in/john-divinagracia-49673818a/" target="_blank">
                            <img src={linkedinIcon} alt="LinkedIn Icon" class="nav-icon"/>
                            {/*
                            Attribution
                            <a target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                            */}
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/JohnDivi" target="_blank">
                            <img src={githubIcon} alt="GitHub Icon" class="nav-icon"/>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <section id="me">
                <div id="info">
                    <section id="name" className="fade-in">
                        <h1>John Divinagracia</h1>
                        <h2>CS Student at MacEwan University</h2>
                    </section>
                    <section id="about-portfolio" className="fade-in">
                        <p>
                            Hey there! thanks for checking out my portfolio. As I
                            worked on this portfolio, I learned how to use React.JS
                            at the same time. Creating new projects, such as this
                            portfolio, is how I learn new languages or technologies.
                            The best way for me to learn is to learn as I work. Thanks
                            again for taking the time looking over my portfolio! I
                            hope these projects showcase my creativity and passion in 
                            development.
                        </p>
                    </section>
                </div>
            </section>
        </header>
    );
}

export default Header;