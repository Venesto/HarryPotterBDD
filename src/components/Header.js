import React from 'react'

import './Header.css'

import logo from '../logo.svg';

const Header = (props) => {
  console.log('headerProps: ', props);
  return (
    <header className="header-header">
      <img src={logo} className="header-logo" alt="logo" />
      <p>Harry Potter</p>
      <a className="header-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
    </header>
  )
}

export default Header
