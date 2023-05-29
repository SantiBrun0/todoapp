import React, { useContext } from 'react'
import '../styles/header.css'
import { ThemeContext } from './utils/ThemeContext.jsx';

const Header = () => {

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className={isDarkMode ? "header-darkmode" : ''}>
        <img src="check-logo.png" alt="logo" className='logo-icon' />
        <h1 className={isDarkMode ? "title-app-darkmode" : "title-app"}>
            To-Do App
        </h1>
        <div className='mode-selector'>
            <input type='checkbox' id='darkmode-toggle' checked={isDarkMode} onChange={toggleDarkMode} />
            <label htmlFor="darkmode-toggle" className='label-darkmode-toggle'>
                <i className='bx bxs-moon mode-icon dark-mode'></i>
                <i className='bx bxs-sun mode-icon light-mode' ></i>
            </label>
        </div>
    </header>
  )
}

export default Header