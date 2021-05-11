import React from "react"

export default function Home() {
    return ( 
        <main style={{ 
            backgroundImage: `url(${"/background-home.jpeg"})`,
            backgroundSize: "cover"
        }}>
            {/* <img src="" alt="background" className="absolute object-cover w-full h-full z-0"/> */}
            <section className="container mx-auto">
                <div className="box-border bg-black py-8">
                    <section className="box-content h-auto w-96 relative block justify-start min-h-screen pt-12 lg:pt-64 px-8">
                        <h1 className="bg-clip-text bg-gradient-to-b from-blue-400 to-green-500 text-transparent text-5xl font-bold">Hey,<br></br>
                        I'm Alex.</h1>
                        <h2 className="text-3xl text-gray-100">Full-stack web developer, with a background in financial services and a penchant for creative design solutions.</h2>
                        <p className="relative text-2xl text-green-400">It's nice to meet you.</p>
                    </section>   
                </div>
            </section>              
        </main>
    )   
}

// bg-blend-overlay bg-gradient-to-b from-pink-900 to-yellow-200