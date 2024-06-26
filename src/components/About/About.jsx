import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import foto from "../../assets/fotolinkedin.jpg"

import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";


const About = ({about}) => {

  return (
    <Container ref={about} id="2" >
      <Image src={foto} />
      <Content>
        <TitleH2>ACERCA DE MÍ</TitleH2>
        <TitleH3 style={{color: "#bfbfbf"}}>
          Soy Ingeniero Electrónico, apasionado por la programación, por ello me interesó la programación web. 
          Realicé un bootcamp de más de 800 hs. de estudio intensivo que me preparó para desempeñarme como
          desarrollador Full-Stack. Dentro del bootcamp aprendí desde lo básico hasta desarrollar aplicaciónes en equipo.
          Como desarrollador me oriento más al Back-End.
        </TitleH3>
        <TitleH3 style={{color: "#bfbfbf"}}>
          Siendo una persona inquieta, siempre busco afianzar mis conocimientos y 
          aprender cosas nuevas, en estos momentos estoy realizando cursos tanto en Udemy
          como en Platzi, sobre back-end.
        </TitleH3>
        <TitleH3 style={{color: "#bfbfbf"}}>
          Me considero una persona
          proactiva, con buena disposición, respetuosa y
          por sobre todo con ganas de trabajar en equipo.
        </TitleH3>
        {/* <TitleH3 style={{color: "#bfbfbf"}}>
          Poner algun logro.
        </TitleH3> */}
        <ContactDetail>
          <Contact className="columns contact-details">
            <TitleH2>Contacto</TitleH2>
            <LIST >
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
          </Contact>
          <LINKButton
            to="https://drive.google.com/file/d/1vDL8vRAddBtZ3TdifNrqrkWh9SSWCJ2m/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ICONDOWN />
            Descargar CV
          </LINKButton>
        </ContactDetail>
      </Content>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 938px;
  width: 100%;
  background-color: #2B2B2B;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 641px) {

  }
`;

const Image = styled.img`
  width: 215px;
  height: 287px;
  border-radius: 25%;
  margin-bottom: 100px;
  @media (min-width: 641px) {

  }
`;

const Content = styled.div`
  height: 694px;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  @media (min-width: 641px) {

  }
`;

const TitleH2 = styled.h2`
  font: 22px/30px 'Open Sans', sans-serif;
  color: #fff;
  letter-spacing: 2.5px;
  font-weight: bold;
  margin-bottom: 2px;
  @media (min-width: 641px) {

  }
`;

const TitleH3 = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 22px;
  color: rgb(191, 191, 191);
  @media (min-width: 641px) {

  }
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 641px) {

  }
`;

const Contact = styled.div`
  margin-right: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  font-size: 25px;
  padding: 10px;
  &:hover { 
    color: #11ABB0;
    transition: all .3s ease-in-out;
  }
`;

const ICONGH = styled(FaGithub)`
  color: #fff; 
  font-size: 25px;
  padding: 10px;
  &:hover { 
    color: #11ABB0;
    transition: all .3s ease-in-out;
  }
`;

const ICONDOWN = styled(FaDownload)`
  color: #fff; 
  font-size: 20px;
  margin-right: 10px;
`;

const LINKButton = styled(Link)`
  display: flex;
  align-items: center;
  font: 16px/30px 'Open Sans', sans-serif;
  font-weight: bold;
  background: #444;
  width: 138px;
  height: 30px;
  padding: 12px 20px;
  border-radius: 10px;
  text-decoration: none;
  color #fff;
  &:hover {
    background: #555;
    color: #11ABB0;
    transition: all .3s ease-in-out;
    ${ICONDOWN} {
      color: #11ABB0;
      transition: all .3s ease-in-out;
    }
  }


  
  @media (min-width: 641px) {

  }
`;

