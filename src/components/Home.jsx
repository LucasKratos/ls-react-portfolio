import React from 'react';
import HeroImage from '../assets/perfil.jpg';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div 
        name="home"
        className='h-screen w-full bg-gradient-to-b 
        from-black to-gray-800 '>

        <div 
            className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I´m a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md font-extrabold'>
                I am a student of Bachelor of Computer Science (University of Buenos Aires) and Web Programmer who seeks to gain experience as an IT professional and a new job challenge 
                that allows me to continue deepening these areas or other related ones.
                </p>

                <div>
                    <Link 
                        to="portfolio"
                        smooth duration={500}
                        className=' group text-white w-fit px-6 py-3 my-2 flex items-center 
                        rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                    >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 '>
                            <MdKeyboardArrowRight size={25} className="ml-1" />
                        </span>  
                    </Link>
                </div>               
            </div>

            <div>
                <img 
                    src={HeroImage} 
                    alt="my profile"
                    className='rounded-2xl mx-auto px-2 w-2/3 md:w-full sm:px-0 mb-10 ' />
            </div>
        </div>
    </div>
  )
}

export default Home