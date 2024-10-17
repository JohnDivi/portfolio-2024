import React, {useEffect, useState} from "react";
import linkedinIcon from "../media/linkedin-icon.png";
import githubIcon from "../media/github-icon.png";
import homeIcon from "../media/home-icon.png";
import "./Header.css"

function Header() {
    return (
        // Header
        // Name:    John Divinagracia
        // Tagline: CS Student
        // Nav:
        //      - About Me
        //      - Projects
        //      - Skills
        //      - Contact
        //      - Linkedin, GitHub
        <header className="header">
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="#"><img src={homeIcon} alt="Home Icon" class="nav-icon"/></a>
                        {/* 
                        Attribution
                        <a target="_blank" href="https://icons8.com/icon/2797/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                        */}
                    </li>
                    <li>
                        <a>ABOUT</a>
                    </li>
                    <li>
                        <a>PROJECTS</a>
                    </li>
                </ul>

                <section className="right-side">
                    <a href="https://www.linkedin.com/in/john-divinagracia-49673818a/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn Icon" class="nav-icon"/>
                        {/*
                        Attribution
                        <a target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                        */}
                    </a>    
                    <a href="https://github.com/JohnDivi" target="_blank">
                        <img src={githubIcon} alt="GitHub Icon" class="nav-icon"/>
                    </a>
                </section>
            </nav>
            
            <section id="me">
                <h1>John Divinagracia</h1>
                <h2>CS Student at MacEwan University</h2>
            </section>
        </header>
    );
}

export default Header;