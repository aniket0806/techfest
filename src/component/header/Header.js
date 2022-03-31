import React from 'react'
import classes from './header.module.css'
import logo from '../logo.png'
import Slider from '../slider/Slider'




const Header = () => {
  return (
    <div className={classes.container}   >
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <ul className={classes.navitems}>
       
        <li>About</li>
        <li>Competitions</li>
        <li>Events</li>
        <li>Sponsors</li>
        <li className={classes.register}>  <span>REGISTER HERE</span> </li>
      </ul>
      <Slider/>
      
    </div>

  )
}

export default Header