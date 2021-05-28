import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return(
        <section className="bg-blue-50 relative">
            <div className="container mx-auto flex justify-center">
                <div className="inline-flex items-center py-3 px-3 my-6 bottom-0">
                    <SocialIcon url="https://github.com/alex-stew" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 45, width: 45 }} /> 
                    <SocialIcon url="https://dribbble.com/dropbearlex" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 45, width: 45 }} />
                    <SocialIcon url="https://www.linkedin.com/in/alex-stewart-3a2937a9/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 45, width: 45 }} />
                    {/* <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} /> */}
                </div>            
            </div>
            <div className="container flex mx-auto justify-center">
                <div className="pb-2 pr-4 w-32 h-24 content-center">
                    <img src="/edenSig.v5.png" alt=""/>
                </div>
            </div>
        </section>
    )
}