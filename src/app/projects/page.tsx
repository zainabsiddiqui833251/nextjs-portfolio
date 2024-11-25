import React from 'react';
import Link from 'next/link';

const projects = [
    {
        project_name: 'photo-heaven',
        project_description: '',
        project_url: '',
        project_video: '/videos/photoheaven.mp4',
        tech_stack: 'html,css and javascript',
        github_url: '',
        project_img: '/images/ss1.png',
    },
    {
        project_name: 'digital-project',
        project_description: '',
        project_url: '',
        project_video: '/videos/architectureweb.mp4',
        tech_stack: 'next js , tailwind css and typescript',
        github_url: '',
        project_img: '/images/ss2.jpg',
    },
    {
        project_name: 'askians-llc',
        project_description: '',
        project_url: '',
        project_video: '/videos/askiansllc.mp4',
        tech_stack: 'next js , typescript , tailwind css',
        github_url: '',
        project_img: '/images/ss3.png',
    },
    {
        project_name: 'savory-scripts',
        project_description: '',
        project_url: '',
        project_video: '/videos/savoryscripts.mp4',
        tech_stack: 'html , css , javascript',
        github_url: '',
        project_img: '/images/ss4.png',
    },
    {
        project_name: 'melody-stream',
        project_description: '',
        project_url: '',
        project_video: '/videos/melodystream.mp4',
        tech_stack: 'html , css , javascript',
        github_url: '',
        project_img: '/images/ss5.png',
    },
    {
        project_name: 'book-portfolio',
        project_description: '',
        project_url: '',
        project_video: '/videos/bookportfolio.mp4',
        tech_stack: 'html , css, javascript',
        github_url: '',
        project_img: '/images/ss6.png',
    },
    {
        project_name: 'next-js-portfolio',
        project_description: '',
        project_url: '',
        project_video: '/videos/nextjs.mp4',
        tech_stack: 'next js , tailwind css ,  custom css , typescript , firebase (for backend integration)',
        github_url: '',
        project_img: '/images/ss7.png',
    },
    {
        project_name: 'book-heaven',
        project_description: '',
        project_url: '',
        project_video: '/videos/bookheaven.mp4',
        tech_stack: 'next js , tailwindcss , typescript ',
        github_url: '',
        project_img: '/images/ss8.png',
    },
    {
        project_name: 'blog-website',
        project_description: '',
        project_url: '',
        project_video: '/videos/blogweb.mp4',
        tech_stack: 'next js , typescript and tailwind css',
        github_url: '',
        project_img: '/images/ss9.png',
    },
];

const Projects = () => {
    return (
<main className="bg-[#363648] w-[100%] overflow-x-hidden h-min-[100vh] overflow-scroll text-white">
    <h1 className="text-4xl text-center font-bold m-6 uppercase">my projects</h1>
    <div className="w-[1030px] m-auto mb-6 flex flex-wrap justify-center items-center">
        {projects.map((project, index) => (
            <div
                key={index}
                className="col bg-no-repeat bg-center bg-cover m-1 w-[300px] border border-white h-[200px] relative"
                style={{ backgroundImage: `url(${project.project_img})` }}
            >
                <h3 className="absolute bottom-4 right-4">
                    <Link href={`/projects/${project.project_name}`}>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white font-extrabold text-[#363648] transition-transform duration-1000 hover:rotate-[360deg]">
                            <i className="bi bi-arrow-up-right text-xl"></i>
                        </div>
                    </Link>
                </h3>
            </div>
        ))}
    </div>
</main>
    );
};

export default Projects;
