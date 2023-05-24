import React from 'react'
import images from '../exports/images'
import '../styles/slider.css'

const Slider = () => {
  return (
    <div className='slider-container'>
        <div className='slider'>
            {images.map(image => (
                <div className='item'>
                    <img src={image}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider;