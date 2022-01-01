import React from 'react'

import {NavLink} from 'react-router-dom'

import '../styles/input.css'

const Home = () => {


    return (
        <div className="xl:container mx-auto grid place-items-center h-screen font-sans">
            <div className="grid place-items-center">
                <div className="grid place-items-center">
                    <h1 className='text-3xl font-semibold text-gray-800'>Post Table</h1>
                    <p className='text-gray-600 mt-4'>Crud using Asp.net, EntityFrameworkCore, C#, Tailwind and React.</p>
                </div>
                <div className="p-3">
                    <NavLink className='flex items-center p-4 text-gray-100 bg-gray-500 rounded-lg shadow-xs cursor-pointer hover:bg-gray-400 hover:text-gray-50 shadow-md' to="/table" >Mostrar</NavLink>                                    
                </div>
            </div>
        </div>
    )
}

export default Home;
