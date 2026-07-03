import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/navbar_logo.webp'

const Navbar = () => {
  return (
    <nav className='h-20 border-b-2 p-5 text-xs font-bold bg-red-50'>
    <ul className='flex justify-around items-center'>
        <li className='pl-[50px] w-100'><Link to='/'><img className='h-10' src={logo} alt="logo"/></Link></li>
        <li><Link to='/services'>SERVICES</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/serve'>WHO WE SERVE</Link></li>
        <li><Link to='/case'>CASE STUDIES</Link></li>
        <li><Link to='/resource'>RESOURCES</Link></li>
        <li className='px-6 py-3 mx-[100px] bg-green-300 rounded-full border-1 border-black shadow-[6px_6px_0px_0px_black]'><Link to='/'><button>WORK WITH US</button></Link></li>
    </ul>
    </nav>
  )
}

export default Navbar