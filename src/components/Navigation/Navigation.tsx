import React, { useEffect, useState } from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Store from '../Pages/Store';
import Social from '../Social/Social';

type ContentProps = {
  setRenderedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

function Navigation({ setRenderedContent }: ContentProps) {

    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [activePage, setActivePage] = useState<'home' | 'about' | 'contact'>('home');

    const handleNavigation = (page : 'home' | 'about' | 'contact' , content: React.ReactNode) => {
        setActivePage(page);
        setRenderedContent(content);
        //setMenuOpen(false); // close mobile menu upon navigation
  };

  const logoClasses = activePage === 'home'
  ? 'fixed left-6 top-6 w-38 filter brightness-0 invert'
  : 'fixed left-6 top-6 w-38 filter';

  const spotify= activePage === 'home'
  ? 'fixed right-10 w-6 h-6 object-contain hover:opacity-80 transition-opacity filter brightness-0 invert'
  : 'fixed right-10 w-6 h-6 object-contain hover:opacity-80 transition-opacity filter';
  
  const instagram= activePage === 'home'
  ? 'fixed right-20 w-6 h-6 object-contain hover:opacity-80 transition-opacity filter brightness-0 invert'
  : 'fixed right-20 w-6 h-6 object-contain hover:opacity-80 transition-opacity filter';

  const textColor = activePage === 'home' ? 'text-white' : 'text-black';
  const buttonClasses = `relative uppercase group transition-colors duration-300 font-bold ${textColor} hover:text-primary`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos>currentScrollPos|| currentScrollPos<10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
    className={`
      fixed top-0 left-0 w-full z-20 transition-transform duration-400 
      ${visible ? 'translate-y-0' : '-translate-y-40'} 
      ${activePage === 'home' ? 'bg-transparent' : 'bg-white'}
    `}
    >
      <div className="hidden md:flex container mx-auto flex items-center justify-center gap-x-6 p-6">
        <img
        src = "src/assets/studioJupiterText.png"
        className={logoClasses}
        />
        <img
        src = "src/assets/spotifyBlack.png"
        onClick={() =>
          window.open(
            "https://open.spotify.com/artist/1zTqJDwJnt5MA4Rvvn21Ap",
            "_blank"
          )}
          className={spotify}
        />
        <img
        src = "src/assets/instagram_Glyph_Black.png"
        onClick={() =>
          window.open(
            "https://www.instagram.com/bobfranklemoncurds/",
            "_blank"
          )}
        className={instagram}
        />
        <button
          onClick={() => handleNavigation('home', <Home />)}
          className={buttonClasses}
        >
          Home
          <span
            className="absolute left-0 bottom-[-3px] block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" 
            />
        </button>
        <button
          onClick={() => handleNavigation('about', <About />)}
          className={buttonClasses}
        >
          About
          <span className="absolute left-0 bottom-[-3px] block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </button>
        <button
          onClick={() => handleNavigation('about', <Store />)}
          className={buttonClasses}
        >
          Merch
          <span className="absolute left-0 bottom-[-3px] block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </button>
        <button
          onClick={() => handleNavigation('about', <Contact />)}
          className={buttonClasses}
        >
          Contact
          <span className="absolute left-0 bottom-[-3px] block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </button>
        
      </div>
      
    </nav>
  );
}

export default Navigation;