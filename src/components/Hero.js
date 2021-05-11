import React from "react"

export default function Hero() {
    return (
        <div className="container mx-auto px-2 bg-color-gray-900">
            <div className="box-content h-auto w-96 relative block justify-start min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="bg-gradient-to-b from-blue-400 to-green-500 text-transparent text-5xl">Hey<br></br>
                I'm Alex.</h1>
                <h2 className="text-3xl text-gray-50">Full-stack web developer, with a background in financial services and a penchant for creative design solutions.</h2>
                <p className="relative flex-end text-2xl text-green-400">It's nice to meet you.</p>
            </div>
        </div>
    )
}