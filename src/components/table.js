import React from 'react'
import '../styles/input.css'

const Table = () => {
    return (
        <div className='xl:container container mx-auto grid place-items-center font-sans'>
            <div className='title p-3'>
                <h1 className='font-semibold text-2xl'>Posts</h1>
            </div>
            <table className='table-fixed border-collapse border border-gray-400 shadow-md'>
                <thead>
                    <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                        <th className='px-4 py-3 border border-gray-300'>Id</th>
                        <th className='px-4 py-3 border border-gray-300'>Title</th>
                        <th className='px-4 py-3 border border-gray-300'>Description</th>
                        <th className='px-4 py-3 border border-gray-300'>CRUD Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-gray-700'>
                        <td className='px-4 py-3 border border-gray-300'>1</td>
                        <td className='px-4 py-3 border border-gray-300'>Title 1</td>
                        <td className='px-4 py-3 border border-gray-300'>Description 1</td>
                        <td className='px-4 py-3 border border-gray-300'>
                            <div className='flex flex-row gap-4'>
                                <div>
                                    <button className='flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100'>Update</button>                                    
                                </div>
                                <div>
                                    <button className='flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100'>Delete</button>
                                </div> 
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
