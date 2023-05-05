import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons";

import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM ->Block Element Modifier

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3_navbar-links_logo">
        <img src={logo} alt='logo' />
        </div>

        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">OpenAI</a></p>
          <p><a href="#features">Case Study</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
