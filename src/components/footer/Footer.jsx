import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Rick Madison</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className='footer_copyright'>
        <small>
       
        © 2023 - Rick Madison - All Rights Reserved
        
        </small>
      </div>
    </footer>
  )
}

export default Footer