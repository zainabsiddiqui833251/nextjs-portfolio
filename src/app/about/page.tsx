import React from 'react';

const About = () => {
    return (
        <main className="bg-[#363648] w-full min-h-screen text-white py-10">
            <h1 className="text-center text-4xl uppercase font-bold tracking-widest mb-8">About Me</h1>
            
            <div className="flex flex-wrap justify-center items-start gap-10 w-4/5 mx-auto">
                
                <div className="w-[300px]">
                    <p className="text-lg leading-relaxed">
                        I am a Frontend Web Developer with a passion for creating responsive, dynamic, and user-friendly websites. I specialize in frontend technologies and love building beautiful, interactive web pages. Continuously learning new tools and techniques helps me stay up-to-date with the latest trends in web development.
                    </p>
                </div>

                <div className="w-[300px] space-y-3">
                    <p><i className="bi bi-mortarboard mr-2"></i>Bachelor&apos;s in Physiology - University of Karachi (2024 - ongoing)</p>
                    <p><i className="bi bi-code-square mr-2"></i>Cloud Applied Generative AI - Governor Initiative (2024 - ongoing)</p>
                    <p><i className="bi bi-patch-check-fill mr-2"></i>Frontend Development - TechForce Pakistan (2023-2024)</p>
                </div>

                <div className="w-[300px] space-y-3">
                    <p><i className="bi bi-globe mr-2"></i>Urdu — Native</p>
                    <p><i className="bi bi-globe mr-2"></i>English — Fluent</p>
                </div>

                <div className="w-[300px]">
                    <h3 className="text-xl mb-4 font-semibold uppercase text-center">Skills</h3>
                    
                    <div className="grid grid-cols-5 gap-3">
                        {[
                            'bi-code-slash',
                            'bi-filetype-css',
                            'bi-code-square',
                            'bi-filetype-js',
                            'bi-bootstrap',
                            'bi-cloud',
                            'bi-github',
                            'bi-filetype-tailwind',
                            'bi-filetype-js',
                            'bi-file-earmark-code'
                        ].map((icon, index) => (
                            <div key={index} className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white text-xl hover:bg-gray-600 transition">
                                <i className={icon}></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
