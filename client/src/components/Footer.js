import React from 'react'
import { Link } from 'react-router-dom'

// created basic footer with our AOA trademark - adding link to our about us page
const Footer = () => {
  return (
    <footer>
      <h2>Made by <span className='aoa_digital'><Link to='/about'>AOA Digital</Link></span></h2>
    </footer>
  )
}

export default Footer
