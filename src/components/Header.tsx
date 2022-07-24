import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default ({...props}) => {
  return (
    <div className="Header sm-col">
      <div className="img-holder">
        <img src={logo}/>
        <span>Prairie Concealed Carry Classes</span>
      </div>
      <div className="link-holder">
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/#register">Register</HashLink>
      </div>
    </div>
  )
}