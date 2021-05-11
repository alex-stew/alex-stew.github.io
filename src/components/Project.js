import React from "react";
import { projectData } from "../projectData";

export default function Project() {
    return (
        <div className="projects-container">
            {projectData.map((data, id) => {
                return(
                    <div key={id}>
                        {data.name + 
                        "," + 
                        data.description + 
                        "," +
                        data.image + 
                        "," + 
                        data.technologies +
                        "," +
                        data.date}
                    </div>
                )
            })}
        </div>
    )
}