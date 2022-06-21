import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 -mt-80 sm: -mt-10 '>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
            About
            </p>
        </div>

        <p className='text-xl mt-20 mb-10 font-bold'>
        I am a developer who seeks to enhance the client's business using the latest technological tools so that they can show what they offer to the market and be at the level of other businesses or companies. My technological stack is very versatile and at the same time I am constantly learning to improve my skills as a front-end and back-end developer.
        </p>
        <br />
        
      </div>
    </div>
  )
}

export default About