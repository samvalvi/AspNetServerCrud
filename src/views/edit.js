import React, {useState} from 'react'
import PropTypes from 'prop-types' 

import { NavLink, useNavigate } from 'react-router-dom'

import '../styles/input.css'

const Edit = ({post}) => {
    const [initialForm, setInitialForm] = useState({
        title: post.title,
        content: post.content
    });
    const [msg, setMsg] = useState("");
    let navigate = useNavigate();

    const handleChange = e => {
        setInitialForm({
            ...initialForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(initialForm.title.length === 0 || initialForm.content.length === 0){
            setMsg("Todos los campos son obligatorios")
            return;
        }

        const postToUpdate = {
            postId: post.postId,
            title: initialForm.title,
            content: initialForm.content
        } 

        await fetch(process.env.REACT_APP_API_URL_DEVELOPMENT + '/update-post',{ 
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                },
            body: JSON.stringify(postToUpdate)
            })
            .then(res => res.json())
            .then(data => {
                    if(data === 'Post updated.'){
                        setMsg("Post actualizado.")
                        setTimeout(()=> {
                            navigate('/table')
                        }, 1000)
                    }else{
                        setMsg("No fue posible actualizar el Post.")
                    }
            })
            .catch(err => console.log(err))
    }

    return (
        
            <div className='w-full grid place-items-center h-screen font-sans p-12 bg-white'>
                <form className='w-2/6'>
                    <div className='flex flex-row justify-center'>
                        <div className='title'>
                            <h1 className='font-semibold text-2xl'>Editar Post</h1>
                            <div>
                                {(msg)? <p className='text-red-500 text-center'>{msg}</p> : null}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-2 pb-2'>
                        <div className='form-group w-full'>
                            <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Post title</label>
					        <input type="text" name="title" id="title" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            defaultValue={initialForm.title} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='form-group pt-2 pb-2'>
                        <label htmlFor="content" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Content</label>
					    <textarea type="content" name="content" id="content" 
                        className="resize-none h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        defaultValue={initialForm.content} resize="none" onChange={handleChange}/>
                    </div>

                    <div className='pt-4 flex flex-row justify-center gap-2'>
                        <button id="actualizar" className="flex items-center p-4 text-gray-100 bg-gray-500 rounded-lg shadow-xs cursor-pointer hover:bg-gray-400 hover:text-gray-50 shadow-md" onClick={(e)=>handleSubmit(e)}>Actualizar</button>
                        <NavLink type="button" className="flex items-center p-4 text-gray-100 bg-gray-500 rounded-lg shadow-xs cursor-pointer hover:bg-gray-400 hover:text-gray-50 shadow-md" to="/table">Cancelar</NavLink>
                    </div>
                </form>
            </div>
    )
}

export default Edit;

Edit.propTypes = {
    post: PropTypes.object.isRequired
}