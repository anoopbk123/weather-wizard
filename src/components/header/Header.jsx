import React from 'react'
import './Header.css';
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <div className='d-flex justify-between'>
        <div className='logo-container'>
            <img className='logo' src={logo} alt="logo" />
        </div>
        <h1 className='h1'>Weather wizard</h1></div>
    </header>
  )
}
