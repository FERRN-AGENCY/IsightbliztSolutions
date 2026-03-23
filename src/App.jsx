import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Star, Slider,NavMenu } from './components';
import { Header, About, Partners, Services, Faq, Case, Team, Footer } from './containers';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toggle, setToggle] = useState(false);

  const navItems = [
    { label: 'About Us', className: '' },
    { label: 'Services', className: '' },
    { label: 'Case Studies', className: '' },
    { label: 'Team', className: '' },
    { label: 'FAQ', className: '' },
    { label: 'Blog', className: '' },
    { label: 'Contact Us', className: 'app__navbar-menu-button' },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true); // Always show at the very top
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling Down -> Show
      } else {
        setIsVisible(true); // Scrolling Up -> Hide
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div className="App">
      <Star />
      <div className='lookpage'>
        {/* Pass isVisible to Navbar */}
        <Navbar setToggle={setToggle} isVisible={isVisible} />
        <Header />
        <Slider />
      </div>
      <About />
      <Partners />
      <Services />
      <Case />
      {/* <Team /> */}
      <Faq />
      <Footer />

      {toggle && <NavMenu setToggle={setToggle} navItems={navItems} />}
    </div>
  );
}

export default App;