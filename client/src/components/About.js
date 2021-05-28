import React from 'react'

function About() {
    return (
        <main style={{ 
            backgroundImage: `url(${"/splash.jpeg"})`,
            backgroundSize: "cover"
            }}>
            <div className="backdrop-filter backdrop-blur-sm h-full p-4 md:py-12 md:px-12 lg:px-24 xl:px-36 2xl:px-48"> 
                <div className="container bg-black flex w-5/6 mx-auto px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
                        <div className="cols-span-1" >
                            <img className="rounded-full max-h-96 max-w-96"src="/alexKeys.jpg" alt=""/>
                        </div>  
                    
                        <div className="cols-span-1">
                            <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 text-transparent text-2xl text-center md:text-3xl font-bold">A bit about me:</h1>
                            <hr></hr>
                            <p className="text-gray-300 text-lg text-center md:text-2xl md:text-justify pt-2">
                                I recently decided to make a career change after working in the finance industry for half a
                                        decade. A
                                        big reason
                                        for my change was due to the work-life balance being difficult to get right for me. I have also
                                        served in the Army
                                        as a Command Systems Operator in the Artillery Core, studied at the Adelaide Conservatory of
                                        Music
                                        and half finished
                                        a Bachelors degree in Commerce (Corporate Finance) and Science (Geology) - always happy to trade
                                        stories over a
                                        beer. After some soul searching and introspective career defining during COVID19, I decided to
                                        make the
                                        jump - and learn to become a programmer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>    
    )
}

export default About
