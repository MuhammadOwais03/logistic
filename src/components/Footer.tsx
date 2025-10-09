import { NavLink } from "react-router-dom";
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Freight Forwarding",
    "Warehousing",
    "Supply Chain Solutions",
    "Express Delivery",
    "International Shipping",
    "Logistics Consulting",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer
      style={{ backgroundColor: "hsl(var(--footer-bg))" }}
      className="text-white"
    >
      <div className="container-width  pt-2 pb-8 sm:pt-6 sm:pb-10">
        {/* Company Logo and Name - Full Width at Top */}
        <div className="flex items-center justify-center space-x-3 mb-12 pb-8 border-b border-white/20">
          <img
            src="/logo.png"
            alt="WorldWide Shipping & Logistics Logo"
            className="w-[14rem] h-[12rem] flex-shrink-0"
          />
          <span className="text-3xl font-bold text-primary leading-tight">
            WORLDWIDE SHIPPING & LOGISTICS
          </span>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3
              style={{ color: "hsl(var(--footer-heading))" }}
              className="text-lg font-semibold"
            >
              About Us
            </h3>
            <p
              style={{ color: "hsl(var(--footer-text))" }}
              className="text-sm leading-relaxed"
            >
              Your trusted partner in logistics and supply chain solutions.
              Delivering excellence in every shipment with reliability and
              innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  aria-label="Social media link"
                >
                  <social.icon
                    className="w-5 h-5"
                    style={{ color: "hsl(var(--footer-text))" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3
              style={{ color: "hsl(var(--footer-heading))" }}
              className="text-lg font-semibold"
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    style={{
                      color: "hsl(var(--footer-text))",
                      fontSize: "0.875rem",
                      paddingBottom: "2px",
                    }}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3
              style={{ color: "hsl(var(--footer-heading))" }}
              className="text-lg font-semibold"
            >
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span
                    style={{ color: "hsl(var(--footer-text))" }}
                    className="text-sm"
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3
              style={{ color: "hsl(var(--footer-heading))" }}
              className="text-lg font-semibold"
            >
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span
                  style={{ color: "hsl(var(--footer-text))" }}
                  className="text-sm"
                >
                  D-14 Block 2, Gulshan e Iqbal,
                  <br />
                  Karachi, Pakistan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span
                  style={{ color: "hsl(var(--footer-text))" }}
                  className="text-sm"
                >
                  +92 3365009343
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span
                  style={{ color: "hsl(var(--footer-text))" }}
                  className="text-sm"
                >
                   info@wws-logistics.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p style={{ color: "hsl(var(--footer-text))" }} className="text-sm">
              © 2025 WorldWide Shipping & Logistics.. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                style={{ color: "hsl(var(--footer-text))" }}
                className="text-sm hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{ color: "hsl(var(--footer-text))" }}
                className="text-sm hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;