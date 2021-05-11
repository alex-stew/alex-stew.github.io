import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return(
        <section className="bg-gray-900 items-center">
            <div className="container mx-auto flex justify-between">
                <div className="inline-flex items-center py-3 px-3 my-6">
                    <SocialIcon url="https://dribbble.com/dropbearlex" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/alex-stew" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/alex-stewart-3a2937a9/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    {/* <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} /> */}
                </div>            
            </div>
        </section>
    )
}