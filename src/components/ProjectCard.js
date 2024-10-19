import React from "react";
import "./ProjectCard.css"

function ProjectCard({name, video, desc}) {
    const addVideo = () => {
        console.log(video)
        if (video === "N/A") {
            return(
                <p>No video available</p>
            );
            
        } else {
            return (
                <p>
                    <iframe width="420" height="315" src={video}/>
                </p>
            );
        }
    };

    return (
        <div class="card">
            <div class="title-vid-holder">
                <section class="title">
                {name}
                </section>

                <section class="video">
                    {addVideo()}
                </section>
            </div>
            <div class="desc-holder">
                <section class="desc">
                    {desc}
                </section>

                <section class="tech-used">

                </section>
            </div>
        </div>
    )
}

export default ProjectCard;