import React, {useState} from 'react'
import './App.css'
import './index.css'
import MainDisplay from './components/MainDisplay/MainDisplay'

function App() {

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-[url(/src/assets/city_street.JPG)] bg-fixed bg-cover bg-clip-border brightness-50"
      />
      <div className="relative">
        <MainDisplay />
      </div>
    </div>
  )
}

export default App