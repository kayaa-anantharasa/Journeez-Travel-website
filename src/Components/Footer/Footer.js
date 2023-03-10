import {React,useEffect} from 'react'
import './Footer.css'
import video2 from '../../Assets/2.mp4'
import {FiSend}from 'react-icons/fi'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillTwitterSquare} from 'react-icons/ai'
import{FiFacebook} from 'react-icons/fi'
import{BsInstagram} from 'react-icons/bs'
import{AiOutlineLinkedin} from 'react-icons/ai'
import{MdKeyboardArrowRight} from 'react-icons/md'

import Aos from 'aos'
import 'aos/dist/aos.css' 

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className='videoDiv'>
      <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className='secContents container'>
        <div className='contactDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input  className='aa' data-aos='fade-up' type='email' placeholder='Enter Email Address'/><br></br>
            <button data-aos='fade-up' className='btn flex' type='submit'>
            SEND<FiSend className='icon'/>
            </button>
          </div>
        </div>
      </div>
      <div className='footerCard flex'>
        <div className='footerInfo flex'>
          <a href='./' className='logo flex'>
            <MdTravelExplore className='icon'/>Journeez.
          </a>
        </div>
        <div data-aos='fade-up'  className='footerParagraph'>
        Sri Lanka is a beautiful island nation located in South Asia, known for its rich history, diverse culture, stunning beaches, and beautiful landscapes. 
        </div>
        <div data-aos='fade-up' className='socialMedia'>
          <AiFillTwitterSquare className='icon'/>
          <FiFacebook className='icon'/>
          <BsInstagram className='icon'/>
          <AiOutlineLinkedin className='icon'/>

        </div>
        <div data-aos='fade-up' className='footerLinks grid'>
          <div className='linkGroup'>
            <span className='groupTitle'>
              OUR AGENCY
            </span>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Services
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Insurance
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Turisms
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Agency
            </li>
          </div>

          
          <div data-aos='fade-up' className='linkGroup'>
            <span className='groupTitle'>
              PATERNERS
            </span>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Bookings
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Rentcors
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Hostel World
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              TripAdvisor
            </li>
            </div>

          <div data-aos='fade-up' className='linkGaroup'>
            <span className='groupTitle'>
              LAST MINUTE
            </span>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Location
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Ella
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Galle
            </li>

            <li className='footerList flex'>
              <MdKeyboardArrowRight className='icon'/>
              Colombo
            </li>
          </div>
          </div>
          </div>
          <div className='footerDiv'>
            <small>BEST TRAVEL WEBSITE THEME    COPYRIGHTS RESERVED - KAYATHIRI
              2023
            </small>
          </div>
    </section>
  )
}

export default Footer