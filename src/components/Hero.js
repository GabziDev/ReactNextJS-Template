"use client"
import React from 'react'
import "./Hero.css"

const Hero = ({title,subtitle}) => {
  return (
    <div className='hero-component'>
        <p className='title'>{title}</p>
        <p className='subtitle'>{subtitle}</p>
    </div>
  )
}

export default Hero