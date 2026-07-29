import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#Services" },
    { name: "About Us", href: "#About" },
    { name: "Testimonials", href: "#Testimonials" },
    { name: "Contact", href: "#Contact" },
  ];
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-b border-[#8a817cff]/20 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold tracking-tight text-[#720e07ff]">
              Electra
              <span className="text-[#322e18ff]">.</span>
            </h1>
          </div>

          {/* Desktop Navigation - Center Links */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-sans font-medium text-[#8a817cff] hover:text-[#720e07ff] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Sign In Button */}
          <div className="hidden md:block">
            <button
              onClick={() => alert("Sign in clicked!")}
              onClick={() => navigate("/SignIn")}
              className="px-6 py-2.5 text-sm font-sans font-medium text-white bg-[#720e07ff] hover:bg-[#720e07ff]/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#322e18ff] hover:text-[#720e07ff] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#8a817cff]/20">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-sans font-medium text-[#8a817cff] hover:text-[#720e07ff] transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  alert("Sign in clicked!");
                  setIsMenuOpen(false);
                }}
                className="mt-2 px-6 py-3 text-sm font-sans font-medium text-white bg-[#720e07ff] hover:bg-[#720e07ff]/90 transition-all duration-200 text-center"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
