import React from 'react'
import { useState } from 'react';
import "./navbar.css";
import { RiMenu3Line , RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/GPT-3.svg';
// BLock Element Modifier

function Menu(){
  return <>
    <p><a href='#home'>Home</a></p>
               <p><a href='#home'>What is GPT3</a></p>
               <p><a href='#home'>Open AI</a></p>
               <p><a href='#home'>Case Studies</a></p>
               <p><a href='#home'>Library</a></p>
  </>
}
function Navbar() {

   const  [toggleMenu , setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='gpt3__navbar-links_container'>
               <Menu />
          </div>
      </div>  
      <div className='gpt3__navbar-sign'>
            <p>Sign in</p>
            <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
       {
        toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
       }
       {
        toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center '>
            <div className='gpt3_navbar-menu_container-links'>
            <Menu />
            <div className='gpt3__navbar-menu_container-links-sign gpt gpt3__navbar-sign'>
            <p>Sign in</p>
            <button type='button'>Sign Up</button>
            </div> 
            </div> 
          </div>
        )
       }
       </div>
    </div>
  )
}

export default Navbar;