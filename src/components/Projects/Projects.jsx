import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { projectsArr } from "../../utils/projects";

const Projects = ({projects}) => {
  return (
    <Container ref={projects} id="4">
      <TitleH2>Proyectos</TitleH2>
      {projectsArr &&
        projectsArr.map((project, index) => {
          const {
            title,
            description,
            url,
            videoUrl,
            repoGitHub,
            imgUrl,
            technologies,
          } = project;

          return (
            <Project type={index%2 === 0 ? false : true} key={index} >
              <Info>
                <TitleH3>{title}</TitleH3>

                <p>{description}</p>
                <TitleH4>Tecnologias</TitleH4>
                <p>{technologies}</p>

                <Links>
                  <LINK
                    target="_blank"
                    rel="noopener noreferrer"
                    to={repoGitHub}
                  >
                    Github Repo
                  </LINK>
                  {url && (
                    <LINK
                      to={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web Link
                    </LINK>
                  )}
                </Links>
              </Info>
              <ImageContainer>
                {imgUrl && <Image src={imgUrl} />}
                {videoUrl && (
                  <iframe width="420" height="315" src={videoUrl} title={title} />
                )}
              </ImageContainer>
            </Project>
          );
        })}
    </Container>
  );
};

export default Projects;

const Container = styled.section`
  width: 100%;
  background-color: #ebeeee;
  padding-top: 90px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 641px) {

  }
`;

const TitleH2 = styled.h2`
  font: 50px/30px 'Open Sans', sans-serif;
  color: #313131;
  letter-spacing: 2.5px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (min-width: 641px) {

  }
`;

const Project = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  width: 100%;
  ${({ type}) => 
    type && 
    `
      flex-direction: row-reverse;
    `
  }
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

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 35%;
  padding: 1%;
  @media (min-width: 641px) {

  }
`;

const TitleH4 = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 22px;
  color: #313131;
  font-size: 20px;
  margin-bottom: 6px;
  @media (min-width: 641px) {

  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 100%;
  @media (min-width: 641px) {

  }
`;

const LINK = styled(Link)`
  color: #11abb0;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #313131;
  }
  @media (min-width: 641px) {

  }
`;

const ImageContainer = styled.div`
  width: 35%;
  padding: 1%;
  @media (min-width: 641px) {

  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  @media (min-width: 641px) {

  }
`;