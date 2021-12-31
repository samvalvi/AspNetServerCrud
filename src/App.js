import React from 'react'

import {Routes, Route} from 'react-router-dom'

import Home from '././views/home'
import Table from '././views/table'

const App = () => (
  <div className='lx:container mx-auto'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/table' element={<Table />} />
    </Routes>
  </div>
)

export default App;

