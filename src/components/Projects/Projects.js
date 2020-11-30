import React from 'react';
import './Projects.css'

import Card from "../Card/Card"

function Projects() {
    return(
        <div className="project__container">
            <div className="project__heading">
                <h1>Projects</h1>
            </div>

            <div className="project">
            <Card url="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif" name="Slack-clone" />
            <Card url="https://devtechnosys.com/insights/wp-content/uploads/2020/03/spotify.gif" name="Spotify-clone" />
            <Card url="https://cdn.dribbble.com/users/81991/screenshots/2713657/1.gif" name="Instagram-clone" />
          </div>    
        </div>
    )
}

export default Projects;