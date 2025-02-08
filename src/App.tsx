import './App.css'
import { useState, useEffect } from 'react'
import MainDisplay from './components/MainDisplay/MainDisplay'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
	<div className="bg-[url(/src/assets/city_street.JPG)] bg-fixed bg-cover h-screen">
      <MainDisplay />
    </div>
  )
}

export default App