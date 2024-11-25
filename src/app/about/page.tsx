import React from 'react'

const About = () => {
    return (
        <main className='bg-[#363648] w-[100%] h-[100vh] text-white'>
            <h1 className='text-center text-4xl py-8 uppercase font-bold tracking-widest'>about me</h1>
            <div className="flex flex-wrap justify-center items-center gap-10 w-[70%] m-auto">
                <div className="w-[300px] h-[200px]">
                    <p>
                        I am a Frontend Web Developer with a passion for creating responsive and user-friendly websites. I specialize in frontend technologies and enjoy building beautiful, interactive web pages. I am always learning new tools and techniques to improve my craft and stay up-to-date with the latest trends in web development.
                    </p>
                </div>


                <div className="w-[300px] h-[200px]">
                    <p>
                        <i className="bi bi-mortarboard"></i> Bachelors in Physiology - University of Karachi - 2024 (continued)
                    </p>
                    <p>
                        <i className="bi bi-code-square"></i> Cloud Applied Generative AI - Governor Initiative - 2024 (continued)
                    </p>
                    <p>
                        <i className="bi bi-patch-check-fill"></i> Frontend Development - TechForce Pakistan - 2023-2024
                    </p>
                </div>

                <div className="w-[300px] h-[200px]">
                    <p><i className="bi bi-globe"></i> Urdu - Native</p>
                    <p><i className="bi bi-globe"></i> English - Fluent</p>
                </div>

                <div className="w-[300px] h-[200px]">
                    <div className="slider-container relative overflow-hidden flex gap-4">
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-code-slash"></i>
                        </div>
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-filetype-css"></i>
                        </div>
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-code-square"></i>
                        </div>
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-filetype-js"></i>
                        </div>
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-bootstrap"></i>
                        </div>
                    </div>

                    <div className="slider-container relative overflow-hidden flex gap-4 mt-4">
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-cloud"></i>
                        </div>
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-github"></i>
                        </div>
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-filetype-tailwind"></i>
                        </div>
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-filetype-js"></i>
                        </div>
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white">
                            <i className="bi bi-file-earmark-code"></i>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
