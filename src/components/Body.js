import React from "react";
import ProjectCard from "./ProjectCard";
import "./Body.css"

function Body() {
    return (
        <main className="main-body">
            {/* 
            Body will contain About me and Projects
            */}
            <section id="projects">
                <h1>Projects</h1>
                <section id="projects-carousel">

                    <ProjectCard 
                        name="Test project"
                        video="N/A"
                        desc="Test desc."
                    />

                    <ProjectCard 
                        name="Test project"
                        video="https://www.youtube.com/embed/PfQT62d3RGw?si=wtUwQnQ-sLTQi6wD"
                        desc="Test desc."
                    />

                </section>
            </section>
            <section id="about-me">
                <h1>About me</h1>
                {/* 
                Skills
                More about Skills
                Life (maybe)
                */}
            </section>
        </main>
    );
}

export default Body;