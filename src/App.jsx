import React from "react";
import './App.css';

import {
  Header,
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers";
import { Article, Brand, Navbar, Cta } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
