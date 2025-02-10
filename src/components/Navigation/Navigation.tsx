import React, { useState } from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

type ContentProps = {
  setRenderedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

function Navigation({ setRenderedContent }: ContentProps) {

    const [activePage, setActivePage] = useState<'home' | 'about' | 'contact'>('home');

    const handleNavigation = (page : 'home' | 'about' | 'contact' , content: React.ReactNode) => {
        setActivePage(page);
        setRenderedContent(content);
  };

  const textColor = activePage === 'home' ? 'text-white' : 'text-black';

  const buttonClasses = `relative uppercase group transition-colors duration-300 font-bold ${textColor} hover:text-primary`;

  return (
    <nav className="fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex items-center justify-center gap-x-8 p-4">
        <button
          onClick={() => handleNavigation('home', <Home />)}
          className={buttonClasses}
        >
          Home
          <span className="absolute left-0 bottom-0 block h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
        </button>
        <button
          onClick={() => handleNavigation('about', <About />)}
          className={buttonClasses}
        >
          About
          <span className="absolute left-0 bottom-0 block h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
        </button>
        <button
          onClick={() => handleNavigation('about', <Contact />)}
          className={buttonClasses}
        >
          Contact
          <span className="absolute left-0 bottom-0 block h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;