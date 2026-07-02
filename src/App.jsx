import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [showlogin, setShowLogin] = useState(false)

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
    </>
  )
}

export default App

