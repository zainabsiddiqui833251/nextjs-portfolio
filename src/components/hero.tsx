import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
    return (
        <header className="bg-[#363648] w-full h-[100vh] text-white flex relative">
            <div className="w-1/2 h-full relative">
                <div className="blotch blotch-1"></div>
                <div className="blotch blotch-2"></div>
                <div className="blotch blotch-3"></div>
                <div className="blotch blotch-4"></div>

            </div>
            <div className="bg-[url(/images/herodesign.jpg)] w-1/2 h-full">
                {/* Right section */}
            </div>

            {/* Centered card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 pt-4 rounded-xl -translate-y-1/2 z-10 w-[300px] border-2 border-solid border-[#a0a0a0] shadow-2xl shadow-[#a0a0a0] " style={{
                background: 'linear-gradient(135deg, #b0b2b8, #818588, #5d6063)',
            }}>
                <div className="relative flex justify-center items-center w-[200px] h-[200px] rounded-full object-contain bg-[#363648] overflow-hidden border-[#4e4e50] border-2 m-auto">
                    <div className="image flex justify-center w-[200px] h-[200px] rounded-full object-contain bg-[#363648] overflow-hidden border-[#4e4e50] border-2 m-auto relative">
                        <Image src="/images/profile.png" alt="Profile" width={150} height={150} />
                        {/* Animated Circles */}
                        <div className="circle animate-circle1"></div>
                        <div className="circle animate-circle2"></div>
                        <div className="circle animate-circle3"></div>
                    </div>
                </div>
                <div className="title text-center uppercase mt-2 animate-typing">
                    <h1>
                        <span className='text-3xl font-bold uppercase '>Zainab Siddiqui</span>
                    </h1>
                </div>
                <div className='w-[20%] h-[2px] bg-[#333333] m-auto'></div>
                <div className="job text-center text-[1.5em] capitalize mt-2 ">
                    <h3>frontend developer</h3>
                </div>
                <div className="buttons flex justify-center gap-5 items-center my-4">
                    <Link href="/ZAINAB SIDDIQUI.pdf">
                        <button className="px-6 py-2 bg-gradient-to-r from-[#818588] to-[#5d6063] text-white rounded-lg border border-[#a0a0a0] shadow-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#b0b2b8] hover:to-[#818588] focus:outline-none">
                            Resume
                        </button>
                    </Link>
                    <Link href='/projects'>
                        <button className="px-6 py-2 bg-gradient-to-r from-[#818588] to-[#5d6063] text-white rounded-lg border border-[#a0a0a0] shadow-md transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#b0b2b8] hover:to-[#818588] focus:outline-none">
                            Projects
                        </button>
                    </Link>
                </div>


                <div className="socials">
                    <ul className='flex justify-center rounded-b-xl gap-5 py-4 bg-[#a0a0a0]'>
                        <Link href="https://www.facebook.com/profile.php?id=100068149400197"><li><i className="bi bi-facebook hover:text-[#333333] text-[1.2em]"></i></li></Link>
                        <Link href="https://wa.me/03138659252"><li><i className="bi bi-whatsapp hover:text-[#333333] text-[1.2em]"></i></li></Link>
                        <Link href="https://www.instagram.com/zainabsiddiqui534?igsh=OGlmZ2kxN3BsZGht"><li><i className="bi bi-instagram hover:text-[#333333] text-[1.2em]"></i></li></Link>
                        <Link href="https://x.com/sidd94699?t=7F4nRv05KgvFdfHVYx9Klw&s=09"><li><i className="bi bi-twitter-x hover:text-[#333333] text-[1.2em]"></i></li></Link>
                        <Link href="https://www.linkedin.com/in/zainab-siddiqui-822139283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li><i className="bi bi-linkedin hover:text-[#333333] text-[1.2em]"></i></li></Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Hero;
