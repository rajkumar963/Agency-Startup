import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper to handle mobile link clicks
  const handleMobileNavClick = (to) => {
    setIsMobileMenuOpen(false);
    if (to.startsWith('#')) {
      const el = document.querySelector(to);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-dark/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="w-12 h-10 mr-2 rounded-md bg-gradient-purple-blue flex items-center justify-center">
              <span className="text-white text-lg font-bold">TSW</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-white">The Startup Wallah</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#services" className="text-white/80 hover:text-vibrant-blue transition-colors">Services</a>
          <Link to="/resources" className="text-white/80 hover:text-vibrant-blue transition-colors">Resources</Link>
          <a href="#khajna" className="text-white/80 hover:text-vibrant-blue transition-colors">Khajna</a>
          <Link to="/auth">
            <Button className="bg-gradient-purple-blue hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-4">
            <button
              onClick={() => handleMobileNavClick('#services')}
              className="text-left text-white/80 hover:text-vibrant-blue transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => handleMobileNavClick('/resources')}
              className="text-left text-white/80 hover:text-vibrant-blue transition-colors py-2"
            >
              Resources
            </button>
            <button
              onClick={() => handleMobileNavClick('#khajna')}
              className="text-left text-white/80 hover:text-vibrant-blue transition-colors py-2"
            >
              Khajna
            </button>
            <button
              onClick={() => handleMobileNavClick('/auth')}
              className="w-full"
            >
              <Button className="w-full bg-gradient-purple-blue hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
