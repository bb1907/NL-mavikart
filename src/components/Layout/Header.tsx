import { Landmark, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Süreçler', path: '/surecler' },
    { name: 'Gereksinimler', path: '/gereksinimler' },
    { name: 'SSS', path: '/faq' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform" onClick={() => setIsMenuOpen(false)}>
          <Landmark className="text-primary-container w-8 h-8" />
          <span className="font-display text-2xl font-extrabold text-primary-container tracking-tight">NL-MaviKart</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-200 hover:text-secondary ${
                location.pathname === link.path 
                  ? 'text-secondary border-b-2 border-secondary py-1 font-bold' 
                  : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/basvuru" className="hidden lg:flex items-center gap-2 px-6 py-3 bg-secondary-container text-white font-display text-sm font-bold rounded-lg active:scale-95 transition-transform hover:bg-secondary">
            Başvuru Yap
          </Link>
          <button 
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-outline-variant/30 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-bold transition-colors ${
                    location.pathname === link.path ? 'text-secondary' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/basvuru"
                className="w-full flex items-center justify-center p-4 bg-primary-container text-white font-bold rounded-xl shadow-lg"
              >
                Hemen Başvuru Yap
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
