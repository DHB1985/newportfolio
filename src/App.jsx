import React, { useState, useRef, useEffect} from 'react';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => {

  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contactForm = useRef(null);
  
  const [menuSelected, setMenuSelected] = useState(1)
 
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const position = (event) => {
      if(window.scrollY < 800){
        setMenuSelected(1)
      }
  
      if(window.scrollY > 800 && window.scrollY < 1700){
        setMenuSelected(2)
      }

      if(window.scrollY > 1700 && window.scrollY < 2600){
        setMenuSelected(3)
      }

      if(window.scrollY > 2600){
        setMenuSelected(4)
      }

      if(window.scrollY > 3500){
        setMenuSelected(5)
      }
      console.log(window.scrollY);
    }
    
    window.addEventListener('scroll', position)
  }, [])
  
  return (
    <>
      <NavBar 
        scrollToSection={scrollToSection} 
        home={home} 
        about={about} 
        skills={skills} 
        projects={projects} 
        contactForm={contactForm} 
        menuSelected={menuSelected} 
      />
      <Home home={home} about={about} scrollToSection={scrollToSection}/>
      <About about={about}/>
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <ContactForm contactForm={contactForm}/>
      </>
  //  <Fragment>
  //     <NavBar />
  //     <Routes>
  //       <Route path="/" element={<Lnading />} />
  //       <Route path="/" element={<About />} id='home'/>
  //       <Route path="/beneficiossocios" element={<BeneficiosSocios />} />
  //       <Route path="/proveeduria" element={<Proveeduria />} />
  //       <Route path="/comosersocio" element={<ComoSerSocio />} />
  //       <Route path="/contacto" element={<Contacto />} />
  //       <Route path="/calendario" element={<ActividadesCalendario />} />
  //       <Route path="*" element={<Navigate to="/" />} />
  //       <Route
  //         path="*"
  //         element={
  //         <div>
  //         <h1>Recurso no encontrado</h1>
  //         </div>
  //         }
  //       />
  //     </Routes>
  //      <Footer /> 
  //   </Fragment>
  );
}

export default App;