import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// import stylesConstants from "../../utils/variablesStyles.json"
import backGroundImg from "../../assets/header-background.jpg"

const Home = ({home, about, scrollToSection}) => {
  
  return (
    <Container ref={home} id="1" >
      <TitleH1>Daniel Barbieri Portfolio.</TitleH1>
      <TitleH3>
        Soy un desarrollador <SPAN>Full - Stack</SPAN>, orientado al
        <SPAN> Back-End. </SPAN>
        Sigue y lee{" "}
        <LINK onClick={() => scrollToSection(about)}>
        acerca de mí
        </LINK>
        .
      </TitleH3>
      <LIST >
        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/DanHBarbieri"
        >
          <i className="fa fa-twitter" />
        </a> */}
        <LINK
          to="https://www.linkedin.com/in/daniel-h-barbieri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ICONIN />
        </LINK>
        <LINK
          to="https://github.com/DHB1985"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ICONGH />
        </LINK>
      </LIST>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 938px;
  width: 100%;
  background: #161415 url(${backGroundImg}) no-repeat top center;
  background-size: cover !important;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 641px) {

  }
`;

const TitleH1 = styled.h1`
  font: 90px/1.1em 'Open Sans', sans-serif;
  font-weight: bold;
  color: #fff;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
  @media (min-width: 641px) {

  }
`;

const TitleH3 = styled.h3`
  font: 18px/1.9em 'Libre Baskerville', serif;
  fint-weight: regular;
  color: #A8A8A8;
  margin: 0 auto;
  text-shadow: 0px 1px 2px rgb(0 0 0 / 50%);
  border-bottom: 1px solid #fff;
  @media (min-width: 641px) {

  }
`;

const SPAN = styled.span`
  color: #fff;
  @media (min-width: 641px) {

  }
`;

const LINK = styled(Link)`
  color: #fff;
  text-decoration: none;
  @media (min-width: 641px) {

  }
`;

const LIST = styled.div`
  margin: 24px 0;
  padding: 0;
  font-size: 30px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, .8);
  @media (min-width: 641px) {

  }
`;

const ICONIN = styled(FaLinkedinIn)`
  color: #fff; 
  font-size: 40px;
  padding: 10px;
  &:hover { 
    color: #11ABB0;
    transition: all .3s ease-in-out;
  }
`;

const ICONGH = styled(FaGithub)`
  color: #fff; 
  font-size: 40px;
  padding: 10px;
  &:hover { 
    color: #11ABB0;
    transition: all .3s ease-in-out;
  }
`;