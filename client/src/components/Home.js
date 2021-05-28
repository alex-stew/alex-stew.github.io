import React from "react";
import ProjectCard from './ProjectCard';
// const {ChevronRightIcon} = require('@primer/components');

export default function Home(props) {
    return ( 
        <main style={{ 
                backgroundImage: `url(${"/splash.jpeg"})`,
                backgroundSize: "cover"
            }}>
            {/* <img src="" alt="background" className="absolute object-cover w-full h-full z-0"/> */}
            <div className="backdrop-filter backdrop-blur-sm p-4 md:py-12 md:px-12 lg:px-24 xl:px-36 2xl:px-48"> 
                <div className="grid grid-cols-1 md:grid-cols-4 md:block lg:grid-cols-6"
                        style={{ 
                            backgroundColor: "black",
                            backgroundSize: "cover",
                            marginLeft: "15px",
                            marginRight: "15px",
                            paddingTop: "8px"
                        }}>
                    
                    <div className="cols-span-1 md:cols-span-2 lg:cols-span-2 box-border ">
                        <div className="container block mx-auto mx-0 h-full"> 
                            <section className="box-content w-72 block justify-start pl-8 pb-16 pt-16">
                                <h1 className="bg-clip-text bg-gradient-to-b from-blue-400 to-green-500 text-transparent text-5xl font-bold">Hey,<br></br>
                                I'm Alex.</h1>
                                <h2 className="text-2xl text-bold text-gray-100 p-1"> Full-stack web developer <br />  Background in financial services <br />  Penchant for creative design solutions</h2>
                                <p className="relative text-2xl text-green-400">It's nice to meet you.</p>
                            </section> 
                        </div>
                    </div>
                    <div className="cols-span-1 md:cols-span-2 lg:cols-span-4 h-full">
                        <div className="container block mx-auto justify-center px-8 md:h-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:cols-span-1 2xl:grid-cols-2 2xl:cols-span-1 items-center transform gap-4 text-gray-50 w-full pb-8">
                                {props.projectData.map(project => {
                                    return(
                                        <ProjectCard project={project} key={project.id} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </main>
    )   
}

// bg-blend-overlay bg-gradient-to-b from-pink-900 to-yellow-200