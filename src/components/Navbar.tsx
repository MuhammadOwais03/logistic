import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Mail, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Get active item based on current route
  const getActiveItem = () => {
    const currentPath = location.pathname;
    const activeNav = navItems.find(item => item.path === currentPath);
    return activeNav ? activeNav.name : 'Home';
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary/5 border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center  py-2 text-sm">
            <div className="flex items-center space-x-16 text-muted-foreground">
              
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span> +92 3365009343</span>
                </div>
             
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>D-14 Block 2, Gulshan e Iqbal, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span> info@wws-logistics.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-lg border-b border-border/50' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28 lg:h-28">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">          
              <img src="/logo.png" alt="WorldWide Shipping and Logistics (Smc-Pvt) Ltd. Logo" className="w-24 h-24 sm:w-28 sm:h-28" />            
              <span className="text-2xl font-bold text-primary">WWS LOGISTICS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`font-medium px-4 py-3 rounded-lg ${getActiveItem() === item.name ? 'text-primary bg-primary/10' : 'text-foreground'}`}
                >
                  {item.name}
                </Link>
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
                  <Link
                    to={item.path}
                    key={item.name}
                    onClick={handleNavClick}
                    className={`flex flex-col w-full text-left font-medium px-4 py-4 rounded-lg ${getActiveItem() === item.name ? 'text-primary bg-primary/10 border-l-4 border-primary' : 'text-foreground'}`}
                  >
                    {item.name}
                  </Link>
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