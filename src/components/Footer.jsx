import React, { useContext } from 'react'
import '../styles/footer.css'
import { ThemeContext } from './utils/ThemeContext';

const Footer = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className={isDarkMode ? 'footer-darkmode' : ''}>
        <p>Made with <i className='bx bxs-heart' ></i> by Santiago Bruno</p>
    </footer>
  )
}

export default Footer