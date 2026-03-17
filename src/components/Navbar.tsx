import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Collections', path: '/collections' },
  { name: 'Lookbook', path: '/lookbook' },
  { name: 'About', path: '/about' },
  { name: 'Showroom', path: '/showroom' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const showSolid = isScrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-luxury ${
          showSolid
            ? 'bg-background py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="container-luxury flex justify-between items-center">
          <Link to="/" className="text-2xl font-display tracking-[0.2em] uppercase">
            <span className={showSolid ? 'text-foreground' : 'text-background'}>Edition</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`label-text transition-colors duration-400 ${
                  showSolid
                    ? 'text-foreground hover:text-accent'
                    : 'text-background/80 hover:text-background'
                } ${pathname === link.path ? (showSolid ? 'text-accent' : 'text-background') : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            <Search
              className={`w-[18px] h-[18px] cursor-pointer transition-colors ${
                showSolid ? 'text-foreground' : 'text-background'
              }`}
            />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu
                className={`w-6 h-6 ${showSolid ? 'text-foreground' : 'text-background'}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col"
          >
            <div className="container-luxury py-6 flex justify-between items-center">
              <Link to="/" className="text-2xl font-display tracking-[0.2em] uppercase text-foreground">
                Edition
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X className="w-7 h-7 text-foreground" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display uppercase tracking-[0.15em] text-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
