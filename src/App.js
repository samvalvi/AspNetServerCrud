import React, {useState} from 'react'

import {Routes, Route} from 'react-router-dom'

import Home from './views/home'
import Table from './views/table'
import Create from './views/create'
import Edit from './views/editar'

const App = () => {
  const [post, setPost] = useState({})

  return(
    <div className='lx:container mx-auto'>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/table' element={<Table setPost={setPost} />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit post={post} />} />
      </Routes>
    </div>
  )
}

export default App;

