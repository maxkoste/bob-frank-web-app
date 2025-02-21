import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Store from '../Pages/Store';

type ContentProps = {
  setRenderedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

function Navigation({ setRenderedContent }: ContentProps) {

  const [activePage, setActivePage] = useState<'home' | 'about' | 'store' | 'contact'>(() => {
    return (localStorage.getItem('activePage') as 'home' | 'about' | 'store' | 'contact') || 'home';
  });
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: 'home' | 'about' | 'store' | 'contact', content: React.ReactNode) => {
    setActivePage(page);
    setRenderedContent(content);
    setMobileMenuOpen(false); // close the mobile menu upon navigation
  };

  useEffect(() => {
    switch (activePage) {
      case 'home':
        setRenderedContent(<Home />);
        break;
      case 'about':
        setRenderedContent(<About />);
        break;
      case 'store':
        setRenderedContent(<Store />);
        break;
      case 'contact':
        setRenderedContent(<Contact />);
        break;
      default:
        setRenderedContent(<Home />);
    }
  }, []); // empty dependency array ensures this runs only once on mount

  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  // Desktop-specific classes (on mobile the logo will be inline)
  const logoClasses = activePage === 'home' && !mobileMenuOpen
    ? 'md:fixed left-6 top-6 w-38 filter brightness-0 invert'
    : 'md:fixed left-6 top-6 w-38 filter';

  const spotify = activePage === 'home'
    ? 'md:fixed right-10 w-6 h-6 object-contain hover:opacity-80 transition-opacity filter brightness-0 invert'
    : 'md:fixed right-10 w-6 h-6 object-contain hover:opacity-80 transition-opacity filter';

  const instagram = activePage === 'home'
    ? 'md:fixed right-20 w-6 h-6 object-contain hover:opacity-80 transition-opacity filter brightness-0 invert'
    : 'md:fixed right-20 w-6 h-6 object-contain hover:opacity-80 transition-opacity filter';

  const textColor = activePage === 'home' && !mobileMenuOpen ? 'text-white' : 'text-black';
  const buttonClasses = `relative uppercase group transition-colors duration-300 font-bold ${textColor} hover:text-primary`;

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        // On phone sizes, always show the navbar
        setVisible(true);
        return;
      }
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
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
        ${
        activePage === 'home' && !mobileMenuOpen
        ? 'bg-transparent' : 'bg-white'
        }
      `}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex container mx-auto flex items-center justify-center gap-x-6 p-6">
        <img src="/background/studioJupiterText.png" className={logoClasses} alt="Logo" />
        <img
          src="/background/spotify.png"
          onClick={() =>
            window.open("https://open.spotify.com/artist/1zTqJDwJnt5MA4Rvvn21Ap", "_blank")
          }
          className={spotify}
          alt="Spotify"
        />
        <img
          src="/background/instagram.png"
          onClick={() =>
            window.open("https://www.instagram.com/bobfranklemoncurds/", "_blank")
          }
          className={instagram}
          alt="Instagram"
        />
        <button onClick={() => handleNavigation('home', <Home />)} className={buttonClasses}>
          Home
          <span className="absolute left-0 bottom-[-3px] block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </button>
        <button onClick={() => handleNavigation('about', <About />)} className={buttonClasses}>
          About
          <span className="absolute left-0 bottom-[-3px] block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </button>
        <button onClick={() => handleNavigation('store', <Store />)} className={buttonClasses}>
          Merch
          <span className="absolute left-0 bottom-[-3px] block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </button>
        <button onClick={() => handleNavigation('contact', <Contact />)} className={buttonClasses}>
          Contact
          <span className="absolute left-0 bottom-[-3px] block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile header */}
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="/background/studioJupiterText.png"
                className={logoClasses}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 w-12 inline-flex items-center justify-center rounded-md p-2.5 ${textColor}`}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-9 w-9" aria-hidden="true" />
            </button>
          </div>
        </nav>
        {/* Mobile menu Dialog */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Logo"
                  src="/background/studioJupiterText.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white-900"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    onClick={() => handleNavigation('home', <Home />)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleNavigation('about', <About />)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </button>
                  <button
                    onClick={() => handleNavigation('about', <Store />)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Merch
                  </button>
                  <button
                    onClick={() => handleNavigation('about', <Contact />)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </button>
                </div>
                </div>
                <div className="flex justify-left gap-4 mt-6">
                  <img
                    src="/background/instagram.png"
                    onClick={() =>
                      window.open("https://www.instagram.com/bobfranklemoncurds/", "_blank")
                    }
                    className="h-5 w-auto hover:opacity-80 transition-opacity filter"
                    alt="Instagram"
                  />
                  <img
                    src="/background/spotify.png"
                    onClick={() =>
                      window.open("https://www.instagram.com/bobfranklemoncurds/", "_blank")
                    }
                    className="h-5 w-auto hover:opacity-80 transition-opacity filter"
                    alt="spotify"
                  />
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </nav>
  );
}

export default Navigation;