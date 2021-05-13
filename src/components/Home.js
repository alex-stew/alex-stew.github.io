import React from "react";
import ProjectCard from './ProjectCard';

export default function Home(props) {
    return ( 
        <main style={{ 
            backgroundImage: `url(${"/background-home.jpeg"})`,
            backgroundSize: "cover"
        }}>
            {/* <img src="" alt="background" className="absolute object-cover w-full h-full z-0"/> */}
            <section className="container mx-auto pt-10 h-screen"> 
                <div className="container box-border bg-black relative h-5/6">
                    <section className="box-content absolute bottom-28 left-0 w-96 block justify-start pl-8 pb-16">
                        <h1 className="bg-clip-text bg-gradient-to-b from-blue-400 to-green-500 text-transparent text-5xl font-bold">Hey,<br></br>
                        I'm Alex.</h1>
                        <h2 className="text-3xl text-gray-100">Full-stack web developer, with a background in financial services and a penchant for creative design solutions.</h2>
                        <p className="relative text-2xl text-green-400">It's nice to meet you.</p>
                    </section> 
                        
                    <section className="box-content absolute right-0 flex px-5 my-5 grid grid-cols-2 gap-4 text-gray-50 h-full w-3/5">
                        {props.projectData.map(project => {
                            return(
                                <ProjectCard project={project} key={project.id} />
                            )
                        })}
                    </section>
                </div>
            </section>                
        </main>
    )   
}

// bg-blend-overlay bg-gradient-to-b from-pink-900 to-yellow-200