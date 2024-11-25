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
    }
];

// **Generate metadata for each project**
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = projects.find((p) => p.project_name === params.slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return { title: project.project_name, description: project.project_description };
}

// **Generate paths for static generation**
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.project_name,
    }));
}

// **Dynamic project page**
const ProjectPage = ({ params }: { params: { slug: string } }) => {
    const project = projects.find((p) => p.project_name === params.slug);

    if (!project) {
        return <div className="text-white">Project not found</div>;
    }

    return (
    <main className='flex justify-center items-center  bg-[#363648] w-[100%] h-[100vh] text-white '>
                <div className='w-[45%] '>
                    <video controls className="w-full my-4">
                        <source src={project.project_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='w-[45%] p-6 '>
                       <h1 className='text-center mb-4 tracking-widest font-bold text-3xl uppercase'>{project.project_name}</h1>
                       <p className='text-lg mb-4 font-normal capitalize'>project description <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, officia. Officia quisquam voluptates explicabo nam facere praesentium repellat saepe dicta eveniet, sit laboriosam iusto quia provident corporis? Tempora, modi.</p>
                       <h3 className='text-xl mb-1 capitalize font-medium'>tech stack : </h3>
                       <p className='uppercase mb-3 tracking-normal text-lg font-normal'>{project.tech_stack}</p>
                       <h3 className='text-xl uppercase'><Link href='{project.github_url}'><i className="bi bi-github"> view github repo</i></Link></h3>
                </div>
            </main>
       
    );
};

export default ProjectPage;
