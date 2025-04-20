// Project: Problem Solver
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './page/Index'
import ProblemSolve from './page/ProblemSolve'
import NotFound from './page/NotFound'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/solve' element={<ProblemSolve/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
