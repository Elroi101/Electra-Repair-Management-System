import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Smartphone,
  Laptop,
  Tablet,
  Gamepad2,
  ArrowUpRight,
  Shield,
  Award,
  Heart,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#Services" },
    { name: "About Us", href: "#About" },
    { name: "Testimonials", href: "#Testimonials" },
    { name: "Contact", href: "#Contact" },
  ];

  const serviceLinks = [
    { name: "Smartphone Repair", icon: Smartphone },
    { name: "Laptop Repair", icon: Laptop },
    { name: "Tablet Repair", icon: Tablet },
    { name: "Gaming Console Repair", icon: Gamepad2 },
  ];

  const contactInfo = [
    { icon: Phone, text: "+251 713 324 345", href: "tel:+251713324345" },
    { icon: Mail, text: "electra@gmail.com", href: "mailto:electra@gmail.com" },
    { icon: MapPin, text: "Ayat, Addis Ababa, Ethiopia" },
    { icon: Clock, text: "Mon-Sat: 8:00 AM - 8:00 PM" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#322e18ff] text-[#fefeffff]">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight">
                  Electra
                  <span className="text-[#720e07ff]">.</span>
                </h2>
                <p className="font-sans text-sm text-[#8a817cff] mt-3 leading-relaxed">
                  Professional electronics repair services with precision, care,
                  and transparency. Trusted by thousands of customers since
                  2010.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-[#fefeffff]/5 px-3 py-2">
                  <Award
                    className="w-4 h-4 text-[#720e07ff]"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs font-sans text-[#8a817cff]">
                    Certified
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#fefeffff]/5 px-3 py-2">
                  <Shield
                    className="w-4 h-4 text-[#253c78ff]"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs font-sans text-[#8a817cff]">
                    Warranty
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 border border-[#8a817cff]/30 flex items-center justify-center hover:border-[#720e07ff] hover:bg-[#720e07ff]/20 transition-all duration-300 group"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#720e07ff]"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-[#8a817cff] hover:text-[#fefeffff] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#720e07ff] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                      <ArrowUpRight
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#720e07ff]"></span>
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index}>
                      <a
                        href="#"
                        className="font-sans text-sm text-[#8a817cff] hover:text-[#fefeffff] transition-colors duration-200 flex items-center gap-3 group"
                      >
                        <Icon
                          className="w-4 h-4 text-[#720e07ff] group-hover:scale-110 transition-transform duration-200"
                          strokeWidth={1.5}
                        />
                        {service.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#720e07ff]"></span>
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#fefeffff]/5 flex items-center justify-center group-hover:bg-[#720e07ff]/20 transition-colors duration-300">
                        <Icon
                          className="w-4 h-4 text-[#8a817cff] group-hover:text-[#720e07ff] transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="font-sans text-sm text-[#8a817cff] group-hover:text-[#fefeffff] transition-colors duration-200">
                        {info.text}
                      </span>
                    </div>
                  );

                  if (info.href) {
                    return (
                      <li key={index}>
                        <a href={info.href}>{content}</a>
                      </li>
                    );
                  }
                  return <li key={index}>{content}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#8a817cff]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-[#8a817cff]">
              © {new Date().getFullYear()} Electra Electronics Repair. All
              rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-sans text-xs text-[#8a817cff] hover:text-[#fefeffff] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="w-px h-4 bg-[#8a817cff]/30"></span>
              <a
                href="#"
                className="font-sans text-xs text-[#8a817cff] hover:text-[#fefeffff] transition-colors duration-200"
              >
                Terms of Service
              </a>
              <span className="w-px h-4 bg-[#8a817cff]/30"></span>
              <div className="flex items-center gap-1.5">
                <Heart
                  className="w-3 h-3 text-[#720e07ff] fill-[#720e07ff]"
                  strokeWidth={1}
                />
                <span className="font-sans text-xs text-[#8a817cff]">
                  Made with care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Hidden on mobile */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hidden sm:flex fixed bottom-8 right-8 w-12 h-12 bg-[#720e07ff] hover:bg-[#720e07ff]/90 text-white items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
