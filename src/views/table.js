import React, {useState, useEffect} from 'react'

import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

import '../styles/input.css'

const Table = ({setPost}) => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        await fetch(process.env.REACT_APP_API_URL_DEVELOPMENT + '/get-posts', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
        .catch(err => console.log(err))
    }

    const addPost = (id) => {
        const post = posts.find(x => x.postId === id);
        setPost(post);
    }

    useEffect(() => {
        getPosts();
    },[])

    return (
        <div className='xl:container container mx-auto grid place-items-center font-sans'>
            
            <div className='p-3 flex flex-row justify-center'>
                <div className='title'>
                    <h1 className='font-semibold text-2xl'>Posts</h1>
                </div>
            </div>
           

            <table className='table-fixed border-collapse border border-gray-400 shadow-md'>
                <thead>
                    <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                        <th className='px-4 py-3 border border-gray-300'>Id</th>
                        <th className='px-4 py-3 border border-gray-300'>Título</th>
                        <th className='px-4 py-3 border border-gray-300'>Contenido</th>
                        <th className='px-4 py-3 border border-gray-300'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {(posts.length > 0)?
                            posts.map((item, index) =>(
                                <tr className='text-gray-700' key={index}>
                                    <td className='px-4 py-3 border border-gray-300'>{item.postId}</td>
                                    <td className='px-4 py-3 border border-gray-300'>{item.title}</td>
                                    <td className='px-4 py-3 border border-gray-300'>{item.content}</td>
                                    <td className='px-4 py-3 border border-gray-300'>
                                        <div className='flex flex-row gap-4'>
                                            <div>
                                                <NavLink className='flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100 shadow-md' 
                                                id="editar"
                                                to={`/edit/${item.postId}`}
                                                onClick={() => addPost(item.postId)}>
                                                Editar</NavLink>                                    
                                            </div>
                                            <div> 
                                                <NavLink className='flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100 shadow-md' 
                                                id="eliminar"
                                                to={`/delete/${item.postId}`}
                                                onClick={()=> addPost(item.postId)}>
                                                Eliminar</NavLink>
                                            </div> 
                                        </div>
                                    </td>
                                </tr>
                            ))
                            :
                            <tr className='text-gray-700'>
                                <td className='px-4 py-3 border border-gray-300'>Loading...</td>
                                <td className='px-4 py-3 border border-gray-300'>Loading...</td>
                                <td className='px-4 py-3 border border-gray-300'>Loading...</td>
                                <td className='px-4 py-3 border border-gray-300'></td>
                            </tr>
                        }
                </tbody>
            </table>
            
            <div className='flex flex-row justify-center gap-6'>
                <div className='p-3'>
                    <NavLink className='flex items-center p-4 text-gray-100 bg-gray-500 rounded-lg shadow-xs cursor-pointer hover:bg-gray-400 hover:text-gray-50 shadow-md' to="/">Regresar</NavLink>
                </div>
                <div className='p-3'>
                    <NavLink type="button" className="flex items-center p-4 text-gray-100 bg-gray-500 rounded-lg shadow-xs cursor-pointer hover:bg-gray-400 hover:text-gray-50 shadow-md" to="/create">Nuevo Post</NavLink>
                </div>
            </div>
            
        </div>
    )
}

export default Table;


Table.propTypes = {
    setPost: PropTypes.func.isRequired
}