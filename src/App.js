import React, {useState} from 'react'

import {Routes, Route} from 'react-router-dom'

import Home from './views/home'
import Table from './views/table'
import Editar from './views/editar'

const App = () => {
  const [post, setPost] = useState({})

  return(
    <div className='lx:container mx-auto'>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/table' element={<Table setPost={setPost} />} />
        <Route path='/edit/:id' element={<Editar post={post} setPost={setPost} />} />
      </Routes>
    </div>
  )
}

export default App;

