import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='text-center'>All Rights Reserved &copy; Gadget Galaxy</h4>
        <p className='text-center-footer mt-3'>
          <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link> |
          <Link to='/policy'> Privacy Policy</Link>
        </p>
    </div>
  )
}

export default Footer