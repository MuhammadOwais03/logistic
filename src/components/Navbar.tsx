import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary/5 border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@logitrans.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-lg border-b border-border/50' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">          
              <img src="/logo.png" alt="LogiTrans Logo" className="w-20 h-18" />            
              <span className="text-2xl font-bold text-primary">LogiTrans</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.name)}
                  className={`font-medium px-4 py-3 rounded-lg ${activeItem === item.name ? 'text-primary bg-primary/10' : 'text-foreground'}`}
                >
                  {item.name}
                </NavLink>
              ))}
              
              <div className="ml-6 pl-6 border-l ">
                <button className="btn-scale bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-lg ">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-muted"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border bg-white animate-slideDown">
              <div className="py-6 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    to={item.path}
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={`flex flex-col w-full text-left font-medium px-4 py-4 rounded-lg ${activeItem === item.name ? 'text-primary bg-primary/10 border-l-4 border-primary' : 'text-foreground'}`}
                  >
                    {item.name}
                  </NavLink>
                ))}
                
                <div className="pt-6 mt-6 border-t ">
                  <button className="btn-scale w-full bg-primary text-primary-foreground font-semibold px-6 py-4 rounded-lg ">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <style >{`
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;