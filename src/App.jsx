import { useState } from 'react'
import Home from './pages/Home'
import Moviedetail from './pages/Moviedetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [Movieid, setMovieid] = useState('')

  const id = Movieid

  return (
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<Home setMovieid={setMovieid} Movieid={Movieid} />}/>
      <Route path='/moviedetail' element={<Moviedetail id={id} />}/>
    
     
    </Routes>
  </BrowserRouter>
    
    
    
  )
}

export default App
