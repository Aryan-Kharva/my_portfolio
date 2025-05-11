import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import AboutMe from './components/aboutme';
import SpinCityDetails from './components/spin-city-details';
import BollywoodThreadsDetails from './components/bollywood-threads-details';
import PotatoPropertiesDetails from './components/potato-properties-details';
import DribbleDataDetails from './components/dribbledata-details';



const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.state?.scrollTo;
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToSection />
              <Hero />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects/spin-city-market" element={<SpinCityDetails />} />
        <Route path="/projects/bollywood-threads" element={<BollywoodThreadsDetails />} />
        <Route path="/projects/potato-properties" element={<PotatoPropertiesDetails />} />
        <Route path="/projects/dribbledata" element={<DribbleDataDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
