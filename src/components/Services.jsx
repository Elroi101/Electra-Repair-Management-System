import {
  Smartphone,
  Laptop,
  Tablet,
  Gamepad2,
  Watch,
  Headphones,
  Cpu,
  Battery,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Smartphone Repair",
      description:
        "Screen replacement, battery service, charging port repair, and water damage recovery for all major brands.",
      devices: "iPhone, Samsung, Google, OnePlus",
    },
    {
      icon: Laptop,
      title: "Laptop & Mac Repair",
      description:
        "Motherboard diagnostics, keyboard replacement, screen repair, and data recovery services.",
      devices: "MacBook, Dell, HP, Lenovo, Acer",
    },
    {
      icon: Tablet,
      title: "Tablet Repair",
      description:
        "Cracked screen repair, battery replacement, charging issues, and software troubleshooting.",
      devices: "iPad, Samsung Galaxy Tab, Microsoft Surface",
    },
    {
      icon: Gamepad2,
      title: "Gaming Console Repair",
      description:
        "HDMI port repair, disc drive replacement, overheating issues, and controller repairs.",
      devices: "PlayStation, Xbox, Nintendo Switch",
    },
    {
      icon: Watch,
      title: "Smartwatch Repair",
      description:
        "Screen replacement, battery service, water damage repair, and strap replacement.",
      devices: "Apple Watch, Samsung Galaxy Watch, Garmin",
    },
    {
      icon: Headphones,
      title: "Audio Device Repair",
      description:
        "Headphone jack repair, battery replacement, driver repair, and connectivity issues.",
      devices: "AirPods, Sony, Bose, Beats",
    },
    {
      icon: Cpu,
      title: "Data Recovery",
      description:
        "Hard drive recovery, SSD data retrieval, corrupted file restoration, and backup solutions.",
      devices: "All storage devices and formats",
    },
    {
      icon: Battery,
      title: "Battery Optimization",
      description:
        "Battery diagnostics, replacement services, and power management optimization.",
      devices: "All portable electronic devices",
    },
  ];

  return (
    <section
      id="Services"
      className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#720e07ff]"></span>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#720e07ff]">
              Our Expertise
            </span>
            <span className="w-8 h-px bg-[#720e07ff]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#322e18ff]">
            Professional Repair Services
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#8a817cff] max-w-2xl mx-auto mt-4 leading-relaxed">
            Comprehensive repair solutions for all your electronic devices,
            performed by certified technicians with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-[#8a817cff]/20 hover:border-[#720e07ff]/30 transition-all duration-300 p-6 sm:p-8"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-12 h-px bg-[#720e07ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-px h-12 bg-[#720e07ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="mb-5 inline-flex p-2 bg-[#322e18ff]/5 group-hover:bg-[#322e18ff]/10 transition-colors duration-300">
                  <Icon
                    className="w-6 h-6 text-[#322e18ff] group-hover:text-[#720e07ff] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-[#322e18ff] mb-2 group-hover:text-[#720e07ff] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#8a817cff] leading-relaxed mb-3">
                  {service.description}
                </p>

                <div className="text-xs font-sans text-[#8a817cff]/70">
                  <span className="font-medium text-[#322e18ff]">
                    Devices:{" "}
                  </span>
                  {service.devices}
                </div>

                {/* Subtle hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#720e07ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center pt-12 border-t border-[#8a817cff]/20">
          <p className="font-sans text-[#8a817cff] text-sm sm:text-base mb-6">
            Need a repair not listed here? We handle custom electronics repairs
            too.
          </p>
          <a href="#Contact">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-sans font-medium text-white bg-[#322e18ff] hover:bg-[#322e18ff]/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
              Request Custom Repair
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
