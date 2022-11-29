import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'> 
            <Header />
        
            <div className='the-best-ad'>
                <div></div>
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
                <span>1000+</span>
                <span>EXERCISES</span>
              </div>
              <div>
                <span>200+</span>
                <span>USERS</span>
              </div>
              <div>
                <span>2000+</span>
                <span>VIDEOS</span>
              </div>
            </div>
        </div>

        
        <div className='right-h'>
          <button className='btn'>Exercise Now</button>

          <div className='heart-rate'>
            <img src={heart} alt='' />
            <span>Heart Rate</span><span>116 bpm</span>
          </div>

          <img src={hero_image} alt='' className='hero-image' />
          <img src={hero_image_back} alt="" className='hero-image-name' />
        
          <div className='calories'>
            <img src={calories} alt='' />
            
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Hero
