import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import Product from './pages/Product/Product'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/product' element={<Product/>}/>


      </Routes>
      
    </div>
  )
}

export default App
