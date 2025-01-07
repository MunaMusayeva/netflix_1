import React from 'react'
import Entry from './components/Entry'
import Arch from './components/Arch'
import Trending from './components/Trending'
import CustomSelect from './components/CustomSelect'
import ReasonsToJoin from './components/ReasonsToJoin'
import FAQ from './components/FAQ'
import Footer from './components/Footer'


const Landing = () => {
  return (
    <>
      <Entry />
      <Arch />
      <Trending />
      <ReasonsToJoin/>
      <FAQ/>
      <Footer/>

    </>
  )
}

export default Landing