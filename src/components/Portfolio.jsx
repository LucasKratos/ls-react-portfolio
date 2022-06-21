import React from 'react';
import agencia from "../assets/agencia.jpg";
import burger from "../assets/buguer.png";
import portfolio from "../assets/portfolio.jpg"
import cryto from "../assets/cryto.jpg"
import taura from "../assets/taura.jpg"
import presupuesto from "../assets/presupuesto1.jpg"


const Portfolio = () => {

        const portfolios = [

            {
                id:1,
                src: agencia,
                linkURL: 'https://obscure-beyond-43802.herokuapp.com/',
                linkGit: 'https://github.com/LucasKratos/agencia_deployment/tree/master'
            },
            {
                id:2,
                src: portfolio,
                linkURL: 'https://celadon-crumble-3c2165.netlify.app/',
                linkGit: ''
            },
            {
                id:3,
                src: burger,
                linkGit:'https://github.com/LucasKratos/Hamburguesas',
            },
            {
                id:4,
                src: cryto,
                linkURL:'https://endearing-basbousa-f41a41.netlify.app/',
                linkGit:'https://github.com/LucasKratos/cryptoJS',
            },
            {
                id:5,
                src: taura,
                linkURL:'https://jazzy-shortbread-377763.netlify.app/',
                linkGit:'https://github.com/LucasKratos/Taura_Store_FrontEnd',

            },
            {
                id:6,
                src: presupuesto,
                linkURL:'https://resplendent-licorice-5ddb38.netlify.app/',
            },
        ]

        


  return (
    <div 
        name="portfolio" 
        className='bg-gradient-to-b from-black to-gray-800 w-full 
        text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 
                border-gray-500'>
                    Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0'
            >

                {
                    portfolios.map(({id, src, linkURL, linkGit})=>(
                            <div  
                                key={id} 
                                className='shadow-md shadow-gray-600 rounded-lg mb-10'>
                                <img 
                                    src={src} 
                                    alt="" 
                                    className='rounded-md duration-200 hover:scale-105' 
                                />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'><a href={linkURL} target="_blank" rel='noreferrer'>Demo</a></button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'><a href={linkGit} target="_blank" rel='noreferrer'>Code</a></button>
                                </div>
                            </div>
                        

                    ))
                }
            </div>

           
        </div>
    </div>
  )
}

export default Portfolio