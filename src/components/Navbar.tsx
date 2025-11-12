import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Mail, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Get active item based on current route
  const getActiveItem = () => {
    const currentPath = location.pathname;
    const activeNav = navItems.find((item) => item.path === currentPath);
    return activeNav ? activeNav.name : "Home";
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile and tablet */}
      <div className="hidden xl:block bg-primary/5 border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2 text-sm">
            <div className="flex items-center flex-wrap justify-center gap-x-8 gap-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">+92 3168622164</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">+92 3365009343</span>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="hidden 2xl:inline">
                  Address: Z-102, Ground Floor, 
Block-7 & 8, Shaheed-e- Millat, Karachi.
                </span>
                <span className="xl:inline 2xl:hidden">Karachi, Pakistan</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">
                  info@wws-logistics.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-border/50"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28 xl:h-32">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            >
              <img
                src="/logo.png"
                alt="WorldWide Shipping & Logistics Logo"
                className="w-16 h-14 sm:w-24 sm:h-20 lg:w-32 lg:h-24 xl:w-48 xl:h-28 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col justify-center">
                <span className="text-[0.75rem] xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold text-primary leading-tight text-center sm:text-left max-w-[200px] sm:max-w-none group-hover:text-primary/80 transition-colors duration-300">
                  WORLDWIDE SHIPPING & LOGISTICS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`font-medium px-3 xl:px-4 py-2.5 xl:py-3 rounded-lg transition-all duration-200 hover:bg-primary/5 ${
                    getActiveItem() === item.name
                      ? "text-primary bg-primary/10"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-3 rounded-xl hover:bg-muted transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border bg-white animate-slideDown">
              <div className="py-4 sm:py-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    to={item.path}
                    key={item.name}
                    onClick={handleNavClick}
                    className={`block w-full text-left font-medium px-4 py-3 sm:py-4 rounded-lg transition-all duration-200 ${
                      getActiveItem() === item.name
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Contact info in mobile menu */}
                <div className="pt-4 mt-4 border-t border-border space-y-3 px-4">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+92 3168622164</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">info@wws-logistics.com</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Address: Z-102, Ground Floor, 
Block-7 & 8, Shaheed-e- Millat, Karachi.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <style>{`
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from { 
              opacity: 0; 
              transform: translateY(-10px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
