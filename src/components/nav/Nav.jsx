import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BiBook/></a>
      <a href='#contact'><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav