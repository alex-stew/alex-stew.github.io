import React from "react"

const ProjectCard = (props) => {
    console.log(props);
    
    return (
        <main style= {{
            border: "solid",
            borderSize: "2px",
            borderRadius: "20px",
            borderOpacity: "0.9",
            paddingTop: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            alignContent: "middle",
            minHeight: "380px"
        }} className="overflow-hidden p-2 h-full">
            <div style={{
                backgroundImage: `url(${props.project.image})`, 
            }} className="container rounded-md bg-cover bg-center bg-no-repeat content-center mx-auto mt-6 w-56 h-40 sm:w-64 sm:h-48 md:w-72 md:h-50 xl:w-96 xl:h-60 "> 
            </div>
            <div className="content-box flex flex-col align-middle items-center my-5 p-4 bg-gray-800 rounded-md bg-opacity-25">
                <h1 className="text-3xl text-center font-bold pb-2">{props.project.name}</h1>
                {/* <p className="text-left py-3 px-3 bg-gray-600 bg-opacity-75 rounded-md">{props.project.description}</p> */}
                <h2 className="text-center py-2 bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 text-transparent">{props.project.technologies}</h2>
                <p className="font-bold text-center pb-2 md:hidden">{props.project.date}</p>
                <a href={props.project.link} target="_blank" rel="noreferrer" className="md:hidden ring ring-green-100 text-gray-50 px-6 py-2 lead border-2 rounded">Visit Now</a>
                <div className="container hidden md:flex md:justify-between items-center">
                    <p className="font-bold block md:flex">{props.project.date}</p>
                    <a href={props.project.link} target="_blank" rel="noreferrer" className="block ring ring-green-100 text-gray-50 hover:bg-gray-50 hover:text-black md:flex px-2 py-2 lead border-2 rounded">Visit Now</a>    
                </div>            
            </div>
        </main>
    )
}

// self-center ring ring-green-100 text-gray-50 lead border-2 rounded bg-opacity-25 py-3 px-6

export default ProjectCard