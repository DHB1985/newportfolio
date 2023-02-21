import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Skills = ({skills}) => {

  return (
    <Container ref={skills} id="3" >
      <TitleH2>SKILLS</TitleH2>

      <ICONSCONTAINER>
        <ICONS>
          <Icon icon="logos:html-5" width="110" height="119"/>
          <TEXT>HTML5</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:css-3" width="110" height="119" />
          <TEXT>CSS3</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:javascript" width="110" height="119" />
          <TEXT>JavaScript</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:react" width="110" height="119" />
          <TEXT>React.Js</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:redux" width="110" height="119" />
          <TEXT>Redux.Js</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:nodejs" width="110" height="119" />
          <TEXT>Node.js</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:express" width="110" height="119" />
          <TEXT>Express.Js</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:git-icon" width="110" height="119" />
          <TEXT>Git</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:github-octocat" width="110" height="119" />
          <TEXT>GitHUB</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:postgresql" width="110" height="119" />
          <TEXT>PostgreSQL</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:mongodb-icon" width="110" height="119" />
          <TEXT>MongoDB</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:sequelize" width="110" height="119" />
          <TEXT>Sequelize</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:php" width="110" height="119" />
          <TEXT>PHP</TEXT>
        </ICONS>
        <ICONS>
          <Icon icon="logos:mysql" width="110" height="119" />
          <TEXT>MySQL</TEXT>
        </ICONS>
      </ICONSCONTAINER>

    </Container>
  );
};

export default Skills;

const Container = styled.div`
  height: 938px;
  width: 100%;
  background-color: #fff;
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

const ICONSCONTAINER = styled.div`
  display: grid;
  width: 1500px;
  grid-template-columns: repeat(6, 1fr);
`;

const ICONS = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 195px;
  width: 135px;
  font-size: 100%;
  filter: saturate(0%) brightness(100%) contrast(100%);
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  &:hover { 
    transform: translateY(-10px);
    filter: unset;
    color: #2bcca9
  }
`;

const TEXT = styled.p`
  font-size: 15px;
  margin-bottom: 30px;
`;

// const Icon = css`
//   font-size: 100px;
//   padding: 10px;
//   filter: saturate(0%) brightness(100%) contrast(100%);
//   transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
//   &:hover { 
//     transform: translateY(-10px);
//     filter: unset;
//   }
// `;


// // const ICONS = css`
// //   font-size: 100px;
// //   padding: 10px;
// //   filter: saturate(0%) brightness(100%) contrast(100%);
// //   transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
// //   &:hover { 
// //     transform: translateY(-10px);
// //     filter: unset;
// //   }
// // `;

// const ICONJS = styled(IoLogoJavascript)`
//   color: #FFFF00;
//   ${ICONS};
// `;