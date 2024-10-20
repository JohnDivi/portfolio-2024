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