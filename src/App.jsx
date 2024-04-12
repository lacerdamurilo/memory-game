import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from './pages/Game'
import Leaderboard from './pages/Leaderboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
