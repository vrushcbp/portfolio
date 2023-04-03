import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        console.log('12', location)
      setExpandNavbar(false)
    }, [location])
    
  return (
    <div className='navbar' id={ expandNavbar ? 'open': 'close'}>
        <div className='toggleButton'>
            <button
                onClick={()=>{
                    setExpandNavbar((prev)=>!prev)
                }}
            >
                <MenuIcon/>
            </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/projectItems'>Projects</Link>
        </div>
    </div>
  )
}

export default Navbar