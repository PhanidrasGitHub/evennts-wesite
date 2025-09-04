import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login' 
import PageNotFound from './pages/PageNotFound'   

function App() {
  return (
  <Routes>
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/" exact element={<Home/>} />
    <Route path="*" element={<PageNotFound/>} />
  </Routes>)
}

export default App
