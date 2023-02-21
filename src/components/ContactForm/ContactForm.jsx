import React, {useState} from "react";
import emailjs from "emailjs-com";
import oldPhone from "../../assets/svgviewer-png-output.png"

import styled, { css } from "styled-components";

import { validateContact } from '../../utils/constantes.js';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
};

const ContactForm = ({contactForm}) => {
  const inputBase = {
    name: "",
    subject: "",
    email: "",
    phone: "",
    message:""
  };
  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({})

  const [input, setInput] = useState(inputBase)

  const handleChange = (e) => {
    const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };
    setInput(newInput)
    setErrors(functionErrors(newInput));
    console.log(newInput);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validateContact(input);
    setErrores(validateErrors)
    
    if(Object.entries(validateErrors).length <= 0){
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, input, PUBLIC_KEY);
      setInput(inputBase)
    }
  }

  return (
    <Container ref={contactForm} id="5">
      <TitleH1>&bull; Contacto &bull;</TitleH1>
      <Underline/>
      <IMAGE src={oldPhone} />

      {/* { showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ''} */}

      <FORM onSubmit={handleSubmit}>
        <DATA>
          <NAME>
            <TitleH4>Nombre: </TitleH4>
            <INPUT 
              type="text" 
              required
              value={input.name}
              onChange={(e) => handleChange(e)} 
              name="name"
            />
              {errores.name && (
                <TEXT>{errores.name}</TEXT>
              )}
          </NAME>
          
          <EMAIL>
            <TitleH4>Mail: </TitleH4>
            <INPUT 
              type="text" 
              required
              value={input.email}
              onChange={(e) => handleChange(e)} 
              name="email"
            />
              {errores.email && (
                <TEXT>{errores.email}</TEXT>
              )}
          </EMAIL>

          <PHONE>
            <TitleH4>Teléfono: </TitleH4>
            <INPUT type="text" 
              required
              value={input.phone}
              onChange={(e) => handleChange(e)} 
              name="phone"
            />
              {errores.phone && (
                <TEXT>{errores.phone}</TEXT>
              )}
          </PHONE>

          <SUBJECT>
            <TitleH4>Asunto: </TitleH4>
            <INPUT 
              type="text" 
              required
              value={input.subject}
              onChange={(e) => handleChange(e)} 
              name="subject"
            />
              {errores.subject && (
                <TEXT>{errores.subject}</TEXT>
              )}
          </SUBJECT>
        </DATA>
        <LeftLine/>
        <ENVIO>
          <MESSAGE>
            <TitleH4>Mensaje: </TitleH4>
            <TEXTAREA 
              required
              value={input.message}
              onChange={(e) => handleChange(e)} 
              name="message"
              cols="30" 
              rows="5"
            />
              {errores.message && (
                <TEXT>{errores.message}</TEXT>
              )}
          </MESSAGE>
          <BUTTON
            key="submitFormButton"
            //className={errors ? disableBtn : enableBtn}
            disabled={errors}
            onClick={handleSubmit}
          >
            Enviar
          </BUTTON>

        </ENVIO>
      </FORM>
    </Container>
  );
};

export default ContactForm;

const Container = styled.section`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: bold;
  border: solid 3px #474544;
  margin: 60px;
  background: #F2F3EB;
  position: relative;
  @media (min-width: 641px) {

  }
`;

const TitleH1 = styled.h1`
  color: #474544;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 7px;
  text-align: center;
  text-transform: uppercase;
  @media (min-width: 641px) {

  }
`;

const Underline = styled.div`
  border-bottom: solid 2px #474544;
  margin: -0.512em auto;
  width: 80px;
`;

const TEXT = styled.p`
  color: red;
`;

const LeftLine = styled.div`
  border-left: solid 2px #474544;
  margin: auto;
  height: 250px;
`;

const IMAGE = styled.img`
  display: block;
  fill: #474544;
  height: 50px;
  margin: 50px auto 0;
  width: 50px;
`;

const FORM = styled.form`
  padding: 37.5px;
  margin: 50px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 641px) {

  }
`;

const NAME = styled.div`
  float: left;
  width: 45%;
  @media (min-width: 641px) {

  }
`;

const InputStyle = css`
  background: none;
  border: none;
  border-bottom: solid 2px #474544;
  color: #474544;
  font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  text-transform: uppercase;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
  :focus{
    outline: none;
    padding: 0 0 0.875em 0;
  }
`

const INPUT = styled.input`
  line-height: normal;
  ${InputStyle}
  @media (min-width: 641px) {

  }
`;

const DATA = styled.div`
  width: 45%;
  @media (min-width: 641px) {

  }
`;

const ENVIO = styled.div`
  width: 45%;
  @media (min-width: 641px) {

  }
`;

const TEXTAREA = styled.textarea`
  overflow: auto;
  line-height: 150%;
	height: 150px;
	resize: none;
  width: 100%;
  color: #5A5A5A;
  font: inherit;
  margin: 0;
  ${InputStyle}
  @media (min-width: 641px) {

  }
`;

const SUBJECT = styled.div`
  width: 100%;
  @media (min-width: 641px) {

  }
`;

const EMAIL = styled.div`
  float: right;
  width: 45%;
  @media (min-width: 641px) {

  }
`;
const PHONE = styled.div`
  width: 100%;
  @media (min-width: 641px) {

  }
`;

const MESSAGE = styled.div`
  float: none;
  @media (min-width: 641px) {

  }
`;

const TitleH4 = styled.h4`
  font-weight: bold;
  color: #313131;
  font-size: 18px;
  margin: 0;
  @media (min-width: 641px) {

  }
`;

const BUTTON = styled.button`
  background: none;
  border: solid 2px #474544;
  color: #474544;
  cursor: pointer;
  display: inline-block;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 0.875em;
  font-weight: bold;
  outline: none;
  padding: 20px 35px;
  text-transform: uppercase;
  transition: all 0.3s;
  :hover {
    background: #474544;
    color: #F2F3EB;
  }
  @media (min-width: 641px) {

  }
`;