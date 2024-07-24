import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {

    const[menu,setMenu]= useState("About Us");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo"/>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li>
            <li onClick={()=>setMenu("Location")} className={menu==="Location"?"active":""}>Location</li>
            <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li>


        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
            <div className="navbar-search-icon">
            <button>Find Us</button>
               
                <div className="dot"></div>
            </div>
            <button>Order</button>

        </div>

      
    </div>
  )
}

export default Navbar
