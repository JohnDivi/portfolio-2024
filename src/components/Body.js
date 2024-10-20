import React, {act, useState} from "react";
import ProjectCard from "./ProjectCard";
import "./Body.css"

function Body() {

    // Create all projects here
    const projectsList = [
        {
            name: "2D Top-Down Shooter",
            video: "https://www.youtube.com/embed/uwNPpsw8rg8?si=rfzxIkfDoBCAFKp-",
            desc: `This is the first game I created that was made from scratch. 
            You control a square, and enemies spawn in all directions. 
            The enemies get faster the more of them you destroy. 
            This project was created using C++, SFML (A C++ library), Git,
            and Visual Studio.`,
            repoLink: "https://github.com/JohnDivi/GameSFML"
        },
        {  
            name: "Konane AI",
            video: "N/A",
            desc: `In a group project, I helped implement a Minimax agent for
            Konane, also known as "Hawaiian Checkers". My responsibilites were
            to implement the algorithm for the Minimax agent that utilized
            bitboards. In the middle of the game, the number of possible moves
            increase exponentially, so we set a depth limit of 5 to stay within
            the time frame of 30 seconds when calculating the best move. However,
            upon learning about "Iterative Deepening Search", we moved from using a 
            depth limit to exploiting the time limit. Doing this, we were able
            to increase the depth of its search at the start of the game by up
            to 8 levels!
            This project was created using C, Git, and Visual studio.`,
            repoLink: "https://github.com/PenutButer/KonaneBot"
        },
        {
            name: "3D Shooter",
            video: "https://www.youtube.com/embed/PfQT62d3RGw?si=8Gxc0jJGEa0DIBmn",
            desc: `The final project for my "Introduction to Computer Graphics"
            class. You can think of this as an "upgraded" version of my 2D
            shooter. This project took me a while, especially since I had to
            implement the math of lighting myself. 
            This project was created using JavaScript, WebGL, GLSL, HTML/CSS,
            and Visual Studio Code`,
            repoLink: "https://github.com/JohnDivi/3d-shooter"
        },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === projectsList.length - 1 ? 0 : prevIndex + 1
        );
      };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? projectsList.length - 1 : prevIndex - 1
        );
    };

    return (
        <main className="main-body">
            {/* 
            Body will contain About me and Projects
            */}
            <section id="projects">
                <h1>Projects</h1>
                <section id="projects-carousel">
                    <button onClick={prevSlide}>&lt;</button>
                    {projectsList.map((project, index) => {
                        return (
                        <div className={activeIndex === index ? 'card active' : 'card'}>
                            <ProjectCard
                            name={project.name}
                            video={project.video}
                            desc={project.desc}
                            repoLink={project.repoLink}
                        />
                        </div>
                        )
                    })}
                    <button onClick={nextSlide}>&gt;</button>
                </section>
            </section>

            <section id="about-me">
                <h1>About me</h1>
                <div id="about-me-info">
                    <section id="about-me-skills">
                        <h2>Skills</h2>
                        <div id="skills-container">
                            <div id="os">
                                <h3>Operating Systems</h3>
                                <ul>
                                    <li>Linux</li>
                                    <li>Windows</li>
                                </ul>
                            </div>
                            <div id="programming">
                                <h3>Programming</h3>
                                <ul>
                                    <li>Python</li>
                                    <li>C/C++</li>
                                    <li>C#</li>
                                    <li>JavaScript</li>
                                    <li>HTML/CSS</li>
                                    <li>Kotlin</li>
                                    <li>SQL</li>
                                    <li>React.JS</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Other</h3>
                                <ul>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>Visual Studio</li>
                                    <li>PyCharm</li>
                                    <li>Android Studio</li>
                                    <li>MS Office</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="about-me-skills-more">
                        <h2>More about Skills</h2>
                        <h3>Programming Skills</h3>
                        <p> I have most of my experience with Python,
                            followed by C/C++, then JavaScript. Most
                            of my Python experience comes from solving
                            algorithms on sites like LeetCode or HackerRank.
                            Practically, in terms of the number of projects, 
                            I have the most in C/C++. I enjoy JavaScript as it
                            enables me to create applications that is accessible
                            almost anywhere, but it is one of my least preferred
                            preferences.
                        </p>
                        <h3>Other Skills</h3>
                        <p> I use a Windows computer at home. Most of my Linux
                            experience comes from the usage of a VM for my classes.
                            I am very comfortable in the usage of Linux from the
                            amount of classes that require it (Security and Networks
                            classes to name a few). Speaking of classes, most of my
                            Git and GitHub experience comes from the group projects
                            we were tasked on (Software Engineering and Relational
                            Databases, to name a few once again). Visual Studio is
                            my most used productivity tool. I enjoy
                            the—in my opinion—ease of use and interface compared to
                            other editors.

                        </p>
                    </section>
                    <section id="about-me-life">
                        <h2>Who I am</h2>
                        <p> I decided to pursue Computer Science because I enjoy
                            the thought of solving problems, especially with code.
                            The feeling of seeing the correct answers pop up with
                            my own code is a sort of happiness that is hard
                            to explain. You may have wondered why I had a picture
                            of the night sky at the start, and it's not only
                            because I took the picture, but also because I am
                            quite fond of astronomy. I am taking a minor in
                            Planetary Physics, which I hope to use some time
                            in my career. My end goal is to use my love for
                            Astronomy and Computer Science to help the
                            advancement of technology to bring humanity into
                            the stars... cheesy, I know!
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Body;