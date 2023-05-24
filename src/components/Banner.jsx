import React from 'react';
import '../styles/banner.css';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className='contenedorBanner'>
        <motion.h2 className='tituloBanner'>
          Bienvenidos a nuestro proyecto
        </motion.h2>
    </div>
  )
}

export default Banner