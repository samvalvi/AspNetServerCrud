import React, {useState} from 'react'
import PropTypes from 'prop-types' 

import { NavLink } from 'react-router-dom'

import '../styles/input.css'

const Editar = ({post, setPost}) => {
    const {postId, title, content} = post
    const [titlePost, setTitlePost] = useState("")
    const [contentPost, setContentPost] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        const body = {
            id: postId,
            title: titlePost,
            content: contentPost
        }

        console.log(body)
    }

    return (
        
            <div className='w-full grid place-items-center h-screen font-sans p-12 bg-white'>
                <form method='post' className='w-9/12'>
                    <div className='flex flex-row gap-2 pb-2'>
                        <div className='form-group'>
                            <label htmlFor="postId" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Post id</label>
					        <input type="number" name="postId" id="id" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            readOnly="readOnly" defaultValue={postId} />
                        </div>
                        <div className='form-group w-full'>
                            <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Post title</label>
					        <input type="text" name="title" id="title" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            required defaultValue={title} onChange={(e)=> setTitlePost(e.target.value) }/>
                        </div>
                    </div>

                    <div className='form-group pt-2 pb-2'>
                        <label htmlFor="content" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Content</label>
					    <textarea type="content" name="content" id="content" 
                        className="resize-none h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required defaultValue={content} resize="none" onChange={(e)=> setContentPost(e.target.value) }/>
                    </div>

                    <div className='pt-4 flex flex-row gap-2'>
                        <button id="actualizar" className="flex items-center p-4 text-gray-100 bg-gray-500 rounded-lg shadow-xs cursor-pointer hover:bg-gray-400 hover:text-gray-50 shadow-md" onClick={(e)=>handleSubmit(e)}>Actualizar</button>
                        <NavLink type="button" className="flex items-center p-4 text-gray-100 bg-gray-500 rounded-lg shadow-xs cursor-pointer hover:bg-gray-400 hover:text-gray-50 shadow-md" to="/table">Cancelar</NavLink>
                    </div>
                </form>
            </div>
    )
}

export default Editar;

Editar.propTypes = {
    post: PropTypes.object.isRequired,
    setPost: PropTypes.func.isRequired
}