import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

interface Project {
    project_name: string;
    project_description: string;
    project_url: string;
    project_video: string;
    tech_stack: string;
    github_url: string;
    project_img: string;
}

const projects: Project[] = [
    {
        project_name: 'photo-heaven',
        project_description: 'A photography portfolio website showcasing stunning images and smooth interactions.',
        project_url: '',
        project_video: '/videos/photoheaven.mp4',
        tech_stack: 'HTML, CSS, and JavaScript',
        github_url: '',
        project_img: '/images/ss1.png',
    },
    {
        project_name: 'digital-project',
        project_description: 'A digital agency project site designed with modern animations.',
        project_url: '',
        project_video: '/videos/architectureweb.mp4',
        tech_stack: 'Next.js, Tailwind CSS, and TypeScript',
        github_url: '',
        project_img: '/images/ss2.jpg',
    },
    {
        project_name: 'askians-llc',
        project_description: 'Corporate site for AskIans LLC with responsive design.',
        project_url: '',
        project_video: '/videos/askiansllc.mp4',
        tech_stack: 'Next.js, TypeScript, Tailwind CSS',
        github_url: '',
        project_img: '/images/ss3.png',
    },
    {
        project_name: 'savory-scripts',
        project_description: 'Recipe website with delicious food categories and instructions.',
        project_url: '',
        project_video: '/videos/savoryscripts.mp4',
        tech_stack: 'HTML, CSS, JavaScript',
        github_url: '',
        project_img: '/images/ss4.png',
    },
    {
        project_name: 'melody-stream',
        project_description: 'A music streaming front-end project with playlist and audio player.',
        project_url: '',
        project_video: '/videos/melodystream.mp4',
        tech_stack: 'HTML, CSS, JavaScript',
        github_url: '',
        project_img: '/images/ss5.png',
    },
    {
        project_name: 'book-portfolio',
        project_description: 'Interactive book portfolio design with flip-page animations.',
        project_url: '',
        project_video: '/videos/bookportfolio.mp4',
        tech_stack: 'HTML, CSS, JavaScript',
        github_url: '',
        project_img: '/images/ss6.png',
    },
    {
        project_name: 'next-js-portfolio',
        project_description: 'A personal developer portfolio built with Next.js and Firebase.',
        project_url: '',
        project_video: '/videos/nextjs.mp4',
        tech_stack: 'Next.js, Tailwind CSS, Custom CSS, TypeScript, Firebase (backend)',
        github_url: '',
        project_img: '/images/ss7.png',
    },
    {
        project_name: 'book-heaven',
        project_description: 'Online book library with categories and download features.',
        project_url: '',
        project_video: '/videos/bookheaven.mp4',
        tech_stack: 'Next.js, Tailwind CSS, TypeScript',
        github_url: '',
        project_img: '/images/ss8.png',
    },
    {
        project_name: 'blog-website',
        project_description: 'A dynamic blog website with markdown content and responsive layouts.',
        project_url: '',
        project_video: '/videos/blogweb.mp4',
        tech_stack: 'Next.js, TypeScript, Tailwind CSS',
        github_url: '',
        project_img: '/images/ss9.png',
    }
];

// Generate metadata for each project
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = projects.find((p) => p.project_name === params.slug);
    if (!project) {
        return { title: 'Project Not Found' };
    }
    return { title: project.project_name, description: project.project_description };
}

// Dynamic project page
const ProjectPage = ({ params }: { params: { slug: string } }) => {
    const project = projects.find((p) => p.project_name === params.slug);

    if (!project) {
        return <div className="text-white text-center mt-20">Project not found</div>;
    }

    return (
        <main className="flex flex-wrap justify-center items-center bg-[#363648] w-full min-h-screen text-white p-8">
            <div className="w-full md:w-[45%] mb-8 md:mb-0">
                <video controls className="w-full rounded-xl shadow-lg">
                    <source src={project.project_video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-full md:w-[45%] p-4">
                <h1 className="text-center mb-4 tracking-widest font-bold text-3xl uppercase">{project.project_name}</h1>
                <p className="text-lg mb-4 font-normal capitalize">
                    <strong>Project Description:</strong> <br />
                    {project.project_description || 'No description available for this project.'}
                </p>
                <h3 className="text-xl mb-1 capitalize font-medium">Tech stack:</h3>
                <p className="uppercase mb-3 tracking-normal text-lg font-normal">{project.tech_stack}</p>
                {project.github_url && (
                    <h3 className="text-xl uppercase mt-4">
                        <Link href={project.github_url} target="_blank">
                            <i className="bi bi-github"> View GitHub Repo</i>
                        </Link>
                    </h3>
                )}
            </div>
        </main>
    );
};

export default ProjectPage;
