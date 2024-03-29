import { useRouter } from "";
import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  const router = useRouter()
  return (
    <div className={classes.container}>
      <div className={classes.box1}>
        <span>
          Quick Link
        </span>
        <p onClick={() => {
          router.replace('/')
        }} >home</p>
        <p onClick={() => {
          router.replace('/about')
        }} >about</p>
        <p onClick={() => {
          router.replace('/contact')
        }} >contact</p>
      </div>
      <div className={classes.box2}>
        <span>
          Our Team
        </span>
        <p>Oriental College of Technology</p>
        <p>oistbpl@oriental.ac.in</p>
        <p>0755-2529026</p>
      </div>
      <div className={classes.box3}>
        <span className={classes.span}>
          Contact Us
        </span>
        <div className={classes.socialMedia}>
          <img src={'/images/instagram.png'} alt="" />
          <img src={'/images/facebook.png'} alt="" />
          <img src={'/images/twitter.png'} alt="" />
          <img src={'/images/youtube.png'} alt="" />
        </div>
      </div>
    </div>
  )
};

export default Footer;
