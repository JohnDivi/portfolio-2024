import React, {act, useState} from "react";
import ProjectCard from "./ProjectCard";
import "./Body.css"

function Body() {

    // Create all projects here
    const projectsList = [
        {  
            name: "Konane AI",
            video: "N/A",
            desc: "Test project description for Konane AI"
        },
        {
            name: "2D Top-Down Shooter",
            video: "https://www.youtube.com/embed/uwNPpsw8rg8?si=rfzxIkfDoBCAFKp-",
            desc: "Test project description for 2D Top-Down Shooter"
        },
        {
            name: "3D Shooter",
            video: "https://www.youtube.com/embed/PfQT62d3RGw?si=8Gxc0jJGEa0DIBmn",
            desc: "Test project description for 3D Shooter"
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

    const getAdjacent = (by) => {
        let retIndex = activeIndex + by;
        if (retIndex < 0) {
            return (projectsList.length-1);
        } else if (retIndex >= projectsList.length) {
            return 0;
        } else {
            return retIndex;
        }
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
                    {/* <ProjectCard
                        name={projectsList[getAdjacent(1)].name}
                        video={projectsList[getAdjacent(1)].video}
                        desc={projectsList[getAdjacent(1)].desc}
                    /> */}
                    <ProjectCard
                        name={projectsList[activeIndex].name}
                        video={projectsList[activeIndex].video}
                        desc={projectsList[activeIndex].desc}
                    />
                    {/* <ProjectCard
                        name={projectsList[getAdjacent(-1)].name}
                        video={projectsList[getAdjacent(-1)].video}
                        desc={projectsList[getAdjacent(-1)].desc}
                    /> */}
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