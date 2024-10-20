import React from "react";
import "./ProjectCard.css"

function ProjectCard({name, video, desc, repoLink}) {
    const addVideo = () => {
        if (video === "N/A") {
            return (
                <p>No video available</p>
            );
            
        } else {
            return (
                <p>
                    <iframe class="video" width="480" height="270" src={video}/>
                </p>
            );
        }
    };

    const addRepoLink = () => {
        if (repoLink === "N/A") {
            return (
                <a class="repository">No repo for this project</a>
            );
        } else {
            return (
                <a href={repoLink} target="_blank" class="repository">GitHub Repository</a>
            );
        }
    };

    return (
        <div class="card-data">
            <div class="title-vid-container">
                <section class="title">
                {name}
                </section>

                <section class="video-container">
                    {addVideo()}
                </section>

                <section class="repo-container">
                    {addRepoLink()}
                </section>
            </div>
            <div class="desc-container">
                <section class="desc">
                    {desc}
                </section>
            </div>
        </div>
    )
}

export default ProjectCard;