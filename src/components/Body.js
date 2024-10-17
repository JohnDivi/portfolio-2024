import React from "react";
import "./Body.css"

function Body() {
    return (
        <main className="main-body">
            {/* 
            Body will contain About me and Projects
            */}
            <section id="about-me">
                <h1>About me</h1>
                {/* 
                Contains skills
                */}
            </section>

            <section id="projects">
                <h1>Projects</h1>
            </section>
        </main>
    );
}

export default Body;