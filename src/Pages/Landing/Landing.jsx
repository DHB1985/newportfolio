import React from "react";
import { Link } from "react-router-dom";

import About from "../../components/About/About";
import Home from "../../components/Home/Home";


const Lnading = () => {

  return (
    <div>
      <Home id='home' />
      <About id='about'/>
    </div>
  );
};

export default Lnading;