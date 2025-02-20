import React, { useState } from 'react'
import './App.css'
import './index.css'
import MainDisplay from './components/MainDisplay/MainDisplay'

const images = [
  '/background/city_street.JPG',
  '/background/BG3.jpg',
  '/background/BG2.jpg',
  '/background/C1.jpg'
];

const transitionDuration = 1000; // in ms
const displayDuration = 5000; // in ms



function App() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-[url(/background/BG2.jpg)] bg-fixed bg-cover bg-center bg-clip-border brightness-60"
      />
      <div className="relative">
        <MainDisplay />
      </div>
    </div>
  )
}

export default App