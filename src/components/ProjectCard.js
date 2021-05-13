import React from "react"

const ProjectCard = (props) => {
    console.log(props);
    return (
        <main style= {{
            // backgroundImage: `url(${props.project.image})`,
            backgroundPosition: 'center',
            backgroundSize: "cover",
            border: "solid",
            borderSize: "2px",
            borderRadius: "5px",
            paddingTop: "10px",
            alignContent: "middle",
        }} className="overflow-hidden max-h-auto">
            <div className="content-box h-auto p-4 relative">
                <h1 className="text-3xl text-center font-bold pb-2">{props.project.name}</h1>
                <p className="text-justify py-3 px-3 bg-gray-600 bg-opacity-75 rounded-md">{props.project.description}</p>
                <h2 className="text-center bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 text-transparent">{props.project.technologies}</h2>
                <p className="text-right font-bold">{props.project.date}</p>
            </div>
            
        </main>
    )
}

export default ProjectCard