import { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+251 713 324 345",
      href: "tel:+251713324345",
      color: "text-[#720e07ff]",
    },
    {
      icon: Mail,
      label: "Email",
      value: "electra@gmail.com",
      href: "mailto:electra@gmail.com",
      color: "text-[#253c78ff]",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ayat, Addis Ababa, Ethiopia",
      href: "#",
      color: "text-[#322e18ff]",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Sat: 8:00 AM - 8:00 PM",
      href: "#",
      color: "text-[#8a817cff]",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await axios.post(`${API_URL}/contact`, formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (er) {
      console.log(er);
      setIsSubmitting(false);
      setError("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section
      id="Contact"
      className="bg-[#fefeffff] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#720e07ff]"></span>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#720e07ff] bg-[#720e07ff]/10 px-4 py-1.5">
              Get In Touch
            </span>
            <span className="w-12 h-px bg-[#720e07ff]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#322e18ff] relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#720e07ff]/30"></span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#8a817cff] max-w-2xl mx-auto mt-6 leading-relaxed">
            Have a question or need a repair? Reach out to us and we'll get back
            to you within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#322e18ff]/5 p-8 border-l-4 border-[#720e07ff]">
              <h3 className="font-serif text-xl font-bold text-[#322e18ff] mb-6">
                Let's Connect
              </h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 mb-6 last:mb-0 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white border border-[#8a817cff]/20 flex items-center justify-center group-hover:border-[#720e07ff] transition-colors duration-300">
                      <Icon
                        className={`w-4 h-4 ${info.color}`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-medium uppercase tracking-wider text-[#8a817cff]">
                        {info.label}
                      </p>
                      {info.href && info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="font-sans text-sm text-[#322e18ff] hover:text-[#720e07ff] transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-[#322e18ff]">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Response Badge */}
            <div className="bg-white border border-[#8a817cff]/15 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#322e18ff]">
                  Quick Response
                </span>
              </div>
              <p className="font-sans text-sm text-[#8a817cff]">
                We typically respond within{" "}
                <span className="font-bold text-[#720e07ff]">2-4 hours</span>{" "}
                during business hours
              </p>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#8a817cff]/15 p-8 sm:p-10">
              <h3 className="font-serif text-2xl font-bold text-[#322e18ff] mb-2">
                Send Us a Message
              </h3>
              <p className="font-sans text-sm text-[#8a817cff] mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-sans font-medium uppercase tracking-wider text-[#322e18ff] mb-2"
                    >
                      Full Name <span className="text-[#720e07ff]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#8a817cff]/20 focus:border-[#720e07ff] outline-none transition-colors duration-300 bg-[#fefeffff] font-sans text-sm text-[#322e18ff] placeholder-[#8a817cff]/50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-sans font-medium uppercase tracking-wider text-[#322e18ff] mb-2"
                    >
                      Email Address <span className="text-[#720e07ff]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#8a817cff]/20 focus:border-[#720e07ff] outline-none transition-colors duration-300 bg-[#fefeffff] font-sans text-sm text-[#322e18ff] placeholder-[#8a817cff]/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-sans font-medium uppercase tracking-wider text-[#322e18ff] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#8a817cff]/20 focus:border-[#720e07ff] outline-none transition-colors duration-300 bg-[#fefeffff] font-sans text-sm text-[#322e18ff] placeholder-[#8a817cff]/50"
                    placeholder="+251 900 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-sans font-medium uppercase tracking-wider text-[#322e18ff] mb-2"
                  >
                    Message <span className="text-[#720e07ff]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-[#8a817cff]/20 focus:border-[#720e07ff] outline-none transition-colors duration-300 bg-[#fefeffff] font-sans text-sm text-[#322e18ff] placeholder-[#8a817cff]/50 resize-none"
                    placeholder="Describe your device issue or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`relative w-full py-4 text-sm font-sans font-medium text-white transition-all duration-300 overflow-hidden group ${
                    isSubmitted
                      ? "bg-green-600"
                      : isSubmitting
                        ? "bg-[#8a817cff] cursor-not-allowed"
                        : "bg-[#720e07ff] hover:bg-[#720e07ff]/90"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                  </span>

                  {!isSubmitted && !isSubmitting && (
                    <span className="absolute inset-0 bg-[#322e18ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  )}
                </button>

                {isSubmitted && (
                  <p className="text-center text-sm font-sans text-green-600 animate-fade-in">
                    ✓ Your message has been sent successfully! We'll contact you
                    soon.
                  </p>
                )}

                {error && (
                  <p className="text-center text-sm font-sans text-red-600 animate-fade-in">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Divider with Map */}
        <div className="mt-16 pt-12 border-t border-[#8a817cff]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-[#720e07ff]/5 border border-[#720e07ff]/20">
              <Phone
                className="w-6 h-6 text-[#720e07ff] mx-auto mb-3"
                strokeWidth={1.5}
              />
              <p className="font-sans text-sm text-[#322e18ff] font-medium">
                Call Us
              </p>
              <a
                href="tel:+251713324345"
                className="font-sans text-sm text-[#8a817cff] hover:text-[#720e07ff] transition-colors duration-300"
              >
                +251 713 324 345
              </a>
            </div>

            <div className="p-6 bg-[#253c78ff]/5 border border-[#253c78ff]/20">
              <Mail
                className="w-6 h-6 text-[#253c78ff] mx-auto mb-3"
                strokeWidth={1.5}
              />
              <p className="font-sans text-sm text-[#322e18ff] font-medium">
                Email Us
              </p>
              <a
                href="mailto:electra@gmail.com"
                className="font-sans text-sm text-[#8a817cff] hover:text-[#253c78ff] transition-colors duration-300"
              >
                electra@gmail.com
              </a>
            </div>

            <div className="p-6 bg-[#322e18ff]/5 border border-[#322e18ff]/20">
              <MapPin
                className="w-6 h-6 text-[#322e18ff] mx-auto mb-3"
                strokeWidth={1.5}
              />
              <p className="font-sans text-sm text-[#322e18ff] font-medium">
                Visit Us
              </p>
              <p className="font-sans text-sm text-[#8a817cff]">
                Ayat, Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional animation styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
