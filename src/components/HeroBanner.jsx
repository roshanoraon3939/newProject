import React from 'react';
import { Stack, Typography } from '@mui/material';
import NumberCounter from 'number-counter'
import HeroBannerImage from '../assets/hero_image.png';
import {motion} from 'framer-motion'

const HeroBanner = () => {
  const transition = {type: 'spring' , duration: 3}
  const mobile= window.innerWidth<=768 ? true:false;

  return (
    <div className='hero'>
    <div className='the-best-ad'>
    <motion.div
    initial={{left: mobile? "150px" : "200px"}}
    whileInView={{left:'8px'}}
    transition={{...transition, type: 'tween'}}
    ></motion.div>
      <span> The best Fitness App There is...</span>
    </div>
    <div className='hero-text'>
      <div>
        <span className='stroke-text'>Shape</span>
        <span>Your</span>
      </div>
      <div>
        <span>Ideal Body</span>
      </div>
      <div>
        <span>In here we will help you to shape and build your ideal body and live to the fullest.</span>              
      </div>
    </div>

    <div className='figures'>
      <div>
        <span><NumberCounter end={1000} start={100} delay='2' postFix='+' /></span>
        <span>EXERCISES</span>
      </div>
      <div>
        <span><NumberCounter end={200} start={50} delay='4' postFix='+' /></span>
        <span>USERS</span>
      </div>
      <div>
        <span><NumberCounter end={2000} start={500} delay='1' postFix='+' /></span>
        <span>VIDEOS</span>
      </div>
    </div>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#f48915', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#f48915" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise...
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
   
  </div>
  );
}
export default HeroBanner;
