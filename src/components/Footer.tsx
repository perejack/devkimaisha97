import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Steel Bars", href: "/category/steel-bars" },
        { name: "Security Products", href: "/category/security-products" },
        { name: "BRC Mesh", href: "/category/brc-mesh" },
        { name: "Construction Materials", href: "/category/construction-materials" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Quality Standards", href: "/quality" },
        { name: "Certifications", href: "/certifications" },
        { name: "News & Updates", href: "/news" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Technical Support", href: "/support" },
        { name: "Delivery Info", href: "/delivery" },
        { name: "Returns Policy", href: "/returns" },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <div className="h-10 w-10 rounded bg-industrial-orange flex items-center justify-center">
                <span className="text-industrial-orange-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">DevKi</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Leading supplier of premium quality steel products in Kenya. 
              Building the future with reliable, certified steel solutions for every construction need.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-industrial-orange" />
                <span>+254755335197</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-industrial-orange" />
                <span>info@steelmax.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-industrial-orange" />
                <span>Industrial Area, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-industrial-orange" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-industrial-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-primary-foreground/60">
                © {currentYear} DevKi. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-industrial-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-industrial-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;