import {React,useState} from 'react'
import './Navbar.css'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
  // const [active,setActive] = useState('navBar');

  // //function to toggle navBar
  // const showNav = () => {
  //   setActive('activeNavbar')
  // }

  // //function to  close toggle navBar
  // const closeNav = () => {
  //   setActive('navBar')
  // }

  
  return (
    <section className='navBarsection'>
      <header className='header flex'>


        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1><MdTravelExplore className='icon'/> Journeez.</h1>
          </a>
        </div>
        <div className='toggleNavbar'>
        <div>
          <ul className='navLists flex'>

            <li className='navItems'>
              <a href='#' className='navLink'>Home</a>
            </li>

            <li className='navItems'>
              <a href='#' className='navLink'>Packages</a>
            </li>

            <li className='navItems'>
              <a href='#' className='navLink'>Shop</a>
            </li>

            <li className='navItems'>
              <a href='#' className='navLink'>About</a>
            </li>

            <li className='navItems'>
              <a href='#' className='navLink'>Pages</a>
            </li>

            <li className='navItems'>
              <a href='#' className='navLink'>News</a>
            </li>

            <li className='navItems'>
              <a href='#' className='navLink'>Contact</a>
            </li>
            <button className='btn'>
              <a href='#'>BOOK NOW</a>
            </button>
          </ul>

          
        </div>
        </div>
        </header>


    </section> 
  )
}

export default Navbar