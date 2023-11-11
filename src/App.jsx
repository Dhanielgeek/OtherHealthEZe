import React from 'react'
import Header from './Components/Header'
import SubHeader from './Components/SubHeader'
import Hero from './Components/Hero'
import MainSector from './Components/MainSector'
import Features from './Components/Features'
import Partner from './Components/Partner'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <SubHeader/>
      <Header/>
      <Hero/>
      <MainSector/>
      <Features/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default App