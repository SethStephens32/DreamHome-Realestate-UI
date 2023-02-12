import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
  return (
    <div className='navigation--container'>
        <div className='logo--links'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/about' className='links'>About</Link>
        <Link to='/contact' className='links'>Contact</Link>
        <Link to='/properties' className='links'>Properties</Link>
        </div>
    </div>
  )
}

export default Navigation