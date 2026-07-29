import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "Small Business Owner",
      image: "JM",
      content:
        "Electra saved my business when my main laptop crashed. They recovered all my data and had it running better than before in just 48 hours. Their team is incredibly professional and transparent about pricing.",
      rating: 5,
      device: "MacBook Pro",
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "Freelance Photographer",
      image: "RC",
      content:
        "My editing workstation stopped working right before a major deadline. Electra diagnosed the issue immediately and had my system back online within 24 hours. They truly understand urgency and quality.",
      rating: 5,
      device: "Custom PC",
    },
    {
      id: 3,
      name: "Amanda Foster",
      role: "University Professor",
      image: "AF",
      content:
        "After my iPad screen shattered, I thought I'd lose all my lecture notes. Electra replaced the screen in 2 hours and even transferred my data securely. Their service is absolutely top-notch.",
      rating: 5,
      device: "iPad Pro",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Software Engineer",
      image: "DK",
      content:
        "I was skeptical about third-party repairs, but Electra proved me wrong. They use genuine parts and their diagnostic process is thorough. My iPhone feels like new again.",
      rating: 5,
      device: "iPhone 14 Pro",
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Healthcare Professional",
      image: "LP",
      content:
        "My daughter's gaming console stopped working and she was devastated. Electra fixed it in one day and even cleaned the entire system. The look on her face was priceless. Thank you, Electra!",
      rating: 5,
      device: "PlayStation 5",
    },
    {
      id: 6,
      name: "Marcus Thompson",
      role: "Real Estate Agent",
      image: "MT",
      content:
        "I need my devices working 24/7 for my business. Electra offers quick turnaround times without compromising quality. Their team is knowledgeable, friendly, and genuinely cares about their customers.",
      rating: 5,
      device: "Surface Laptop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState("left");

  // Number of items to show based on screen size
  const getItemsPerView = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  const goToSlide = (index, dir = "left") => {
    if (isSliding) return;
    setIsSliding(true);
    setDirection(dir);
    setCurrentIndex(index);
    setTimeout(() => setIsSliding(false), 400);
  };

  const nextSlide = () => {
    const next = currentIndex === maxIndex ? 0 : currentIndex + 1;
    goToSlide(next, "left");
  };

  const prevSlide = () => {
    const prev = currentIndex === 0 ? maxIndex : currentIndex - 1;
    goToSlide(prev, "right");
  };

  useEffect(() => {
    const interval = setInterval(() => {}, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-[#720e07ff] fill-[#720e07ff]" : "text-[#8a817cff]/30"}`}
        strokeWidth={1.5}
      />
    ));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section
      id="Testimonials"
      className="bg-[#fefeffff] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#253c78ff]"></span>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#253c78ff] bg-[#253c78ff]/10 px-4 py-1.5">
              Client Testimonials
            </span>
            <span className="w-12 h-px bg-[#253c78ff]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#322e18ff] relative inline-block">
            What Our Clients Say
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#720e07ff]/30"></span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#8a817cff] max-w-2xl mx-auto mt-6 leading-relaxed">
            Real stories from real customers who trusted us with their devices
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 transition-all duration-400 ease-in-out ${
                isSliding
                  ? direction === "left"
                    ? "translate-x-0"
                    : "translate-x-0"
                  : ""
              }`}
            >
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={`${testimonial.id}-${currentIndex}`}
                  className={`flex-shrink-0 ${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                        ? "w-[calc(50%-12px)]"
                        : "w-[calc(33.333%-16px)]"
                  } ${isSliding ? `animate-slide-${direction}` : ""}`}
                >
                  <div className="h-full border border-[#8a817cff]/15 bg-white p-6 sm:p-8 hover:border-[#720e07ff]/30 transition-all duration-300 group relative">
                    {/* Decorative Quote */}
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <Quote className="w-12 h-12 text-[#322e18ff]" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-0.5 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Content */}
                    <blockquote className="font-sans text-[#8a817cff] leading-relaxed mb-6 relative z-10 text-sm sm:text-base">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Device Tag */}
                    <div className="inline-block px-3 py-1 text-xs font-sans font-medium text-[#720e07ff] bg-[#720e07ff]/10 mb-4">
                      {testimonial.device}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#8a817cff]/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#720e07ff]/20 to-[#253c78ff]/20 flex items-center justify-center font-serif font-bold text-[#322e18ff] group-hover:from-[#720e07ff]/30 group-hover:to-[#253c78ff]/30 transition-colors duration-300">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-[#322e18ff] text-sm group-hover:text-[#720e07ff] transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="font-sans text-xs text-[#8a817cff]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 bg-white border border-[#8a817cff]/20 hover:border-[#720e07ff] hover:bg-[#720e07ff] hover:text-white transition-all duration-300 p-2 z-10 shadow-sm"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 bg-white border border-[#8a817cff]/20 hover:border-[#720e07ff] hover:bg-[#720e07ff] hover:text-white transition-all duration-300 p-2 z-10 shadow-sm"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() =>
                goToSlide(index, index > currentIndex ? "left" : "right")
              }
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-2 bg-[#720e07ff]"
                  : "w-2 h-2 bg-[#8a817cff]/30 hover:bg-[#8a817cff]/60"
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-[#322e18ff]/5 px-6 py-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#720e07ff] fill-[#720e07ff]"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="font-serif text-xl font-bold text-[#322e18ff]">
              4.9
            </span>
            <span className="font-sans text-sm text-[#8a817cff]">
              Average Rating
            </span>
            <span className="w-px h-6 bg-[#8a817cff]/30"></span>
            <span className="font-sans text-sm text-[#8a817cff]">
              Based on <span className="font-bold text-[#322e18ff]">1,247</span>{" "}
              reviews
            </span>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes slide-left {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-left {
          animation: slide-left 0.4s ease-out forwards;
        }
        .animate-slide-right {
          animation: slide-right 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
