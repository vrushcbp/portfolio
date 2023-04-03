import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import Experience from '../Experience/Experience'
import ProjectItems from '../Projects/ProjectItems'
const Home = () => {
  return (
    <>
      <div className='home-container'>
        <Profile />
        <Footer />
      </div>
      <Experience />
      <hr/>
      <ProjectItems />
    </>

  )
}

export default Home