import React from 'react'
import GlassNavbar from "./components/GlassNavbar"
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Rent from './pages/Rent'
import ListingDetails from './pages/ListingDetails'
import Buy from './pages/Buy'
import SearchResult from './pages/SearchResult'
import RentProducts from './components/RentProduct'
import { Toaster } from 'react-hot-toast'
import Apartment from './pages/Apartment'
import Houses from './pages/Houses'
import Contact from './pages/Contact'
import About from './pages/About'
import Order from './pages/Order'


const App = () => {
  return (
    <>
    <div className='main-page-wrapper'>
       <Toaster />
        <GlassNavbar /> <br /> <br /> <br />
       
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/rent' element={<Rent />}/>
          <Route path='/buy' element={<Buy />}/>  
          <Route path='/search-results' element={<SearchResult />}/> 
          <Route path='/details/:id' element={<ListingDetails />}/>
          <Route path='/Apartment' element={<Apartment />}/>
          <Route path='/Houses' element={<Houses />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/order' element={<Order />}/>
        </Routes>

       <Footer />
    </div>
 
     
    </>
  )
}

export default App