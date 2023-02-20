import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import stylesConstants from "../../utils/variablesStyles.json"

const NavBar = ({scrollToSection, home, about, skills, projects, menuSelected}) => {

  return (
    <NavbarContainer>
      {/* <HambMenu
        onClick={() => {
        setExtendNavbar((curr) => !curr);
        }}
        src = {hambIconMenu}
      /> */}
      
      <NavbarLinkContainer>
        <NavbarLink onClick={() => scrollToSection(home)} selected={menuSelected} >
          {/* Home */}
          INICIO
        </NavbarLink>

        <NavbarLink onClick={() => scrollToSection(about)} selected={menuSelected}>
          {/* About */}
          SOBRE MI
        </NavbarLink>

        <NavbarLink onClick={() => scrollToSection(skills)} selected={menuSelected}>
          SKILLS
        </NavbarLink>

        <NavbarLink onClick={() => scrollToSection(projects)} selected={menuSelected}>
          {/* Projects */}
          PROYECTOS
        </NavbarLink>

        {/* <NavbarLink to="/calendario">
          Contact Me
          CONTACTAME
        </NavbarLink> */}
      </NavbarLinkContainer>

      {/* <NavbarMobileMenu>
        {extendNavbar && (
        <MobileMenuList>
          <MobileMenuListItems 
            onClick={() => {
            setExtendNavbar((curr) => !curr);
            }}
            to="/"
          >
            Bienvenidos
          </MobileMenuListItems>

          <MobileMenuListItems 
            onClick={() => {
            setExtendNavbar((curr) => !curr);
            }}
            to="/beneficiossocios"
          >
            Beneficios para Socios
          </MobileMenuListItems>

          <MobileMenuListItems 
            onClick={() => {
            setExtendNavbar((curr) => !curr);
            }}
            to="/proveeduria"
          >
            Proveeduría
          </MobileMenuListItems>

          <MobileMenuListItems
            onClick={() => {
            setExtendNavbar((curr) => !curr);
            }}
            to="/comosersocio"
          >
            Como ser Socio
          </MobileMenuListItems>

          <MobileMenuListItems 
            onClick={() => {
            setExtendNavbar((curr) => !curr);
            }}
            to="/calendario"
          >
            Actividades y Calendario
          </MobileMenuListItems>

        </MobileMenuList>
        )}
      </NavbarMobileMenu> */}
    </NavbarContainer>
  );
};

export default NavBar;

const NavbarContainer = styled.nav`
  width: 100vw;
  top: 0;
  left: 0;
  height: 40px;
  background: ${stylesConstants.grey};
  border-bottom: 1px solid ${stylesConstants.veryLightPink};
  display: flex;
  justify-content: center;
  z-index: 100;
  @media (min-width: 641px) {
    position: sticky;
    width: 100%;
  }
`;

const NavbarLinkContainer = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  @media (min-width: 641px) {

  }
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${stylesConstants.veryLightPink};
  padding: 8px;
  font: 12px 'Open Sans', sans-serif;
  font-weight: bold;
  letter-spacing: 2.5px;
  ${({ selected}) => 
    `
      :nth-child(${selected}){
        color: ${stylesConstants.menuSelector};
      }
    `
  }
  @media (max-width: 640px) {
      display: none;
  }
`;