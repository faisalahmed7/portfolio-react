import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {

    const openInNewTab = url => {

        window.open(url, '_blank');
    };

    return (
        <div name='home' className='w-full h-screen bg-[#222629]'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-white text-xl'>Hey, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>
                    Md. Faisal Ahmed
                </h1>
                <h2 className='text-3xl sm:text-7xl font-bold text-white'>
                    I'm a Front End Developer.
                </h2>
                <p className='text-white py-4 max-w-[700px]'>
                    I'm a front end developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building responsive full-stack web applications.
                </p>
                <div>
                    <a href="https://drive.google.com/file/d/1iSsyhSC4oiGQHbkEtpdnHtkJkFzTaeGC/view?usp=sharing">
                        <button onClick={() => openInNewTab('https://drive.google.com/file/d/1iSsyhSC4oiGQHbkEtpdnHtkJkFzTaeGC/view')} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600'>
                            Download Resume
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
           
        </div>
    );
};

export default Home;