import { Award, Users, Clock, Shield, Wrench, Target } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years of Excellence", value: "15+", icon: Award },
    { label: "Happy Customers", value: "12,000+", icon: Users },
    { label: "Service Guarantee", value: "100%", icon: Shield },
    { label: "Average Turnaround", value: "24hrs", icon: Clock },
  ];

  const values = [
    {
      icon: Wrench,
      title: "Expert Craftsmanship",
      description:
        "Every repair is performed by certified technicians with years of hands-on experience.",
    },
    {
      icon: Target,
      title: "Precision Diagnostics",
      description:
        "We use advanced diagnostic tools to identify and fix issues with surgical accuracy.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "All repairs come with a comprehensive warranty and thorough quality testing.",
    },
  ];

  return (
    <section
      id="About"
      className="bg-[#fefeffff] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#720e07ff]"></span>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#720e07ff]">
              Our Story
            </span>
            <span className="w-8 h-px bg-[#720e07ff]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#322e18ff]">
            About Electra
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#8a817cff] max-w-2xl mx-auto mt-4 leading-relaxed">
            Built on a foundation of technical excellence and customer trust
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          {/* Text Content - spans 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative pl-6 border-l-2 border-[#720e07ff]">
              <p className="font-serif text-xl sm:text-2xl leading-relaxed text-[#322e18ff] font-medium">
                We're not just fixing electronics — we're preserving the
                moments, memories, and work that lives inside them.
              </p>
            </div>

            <div className="space-y-4 font-sans text-[#8a817cff] leading-relaxed">
              <p>
                Founded in 2010, Electra emerged from a simple belief:
                electronics repair should be transparent, reliable, and
                accessible. What started as a small workshop in downtown has
                grown into a trusted destination for thousands of customers
                seeking expert care for their devices.
              </p>
              <p>
                Our team of certified technicians combines traditional
                craftsmanship with modern diagnostic technology to deliver
                repairs that stand the test of time. We specialize in everything
                from smartphone screen replacements to complex motherboard
                repairs, always maintaining the highest standards of quality and
                precision.
              </p>
              <p>
                At Electra, we understand that your devices are essential to
                your daily life. That's why we're committed to providing fast,
                reliable service with complete transparency — we explain what's
                wrong, what it costs, and how long it will take, every step of
                the way.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#720e07ff] rounded-full"></span>
                <span className="text-sm font-sans text-[#322e18ff]">
                  Certified Technicians
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#720e07ff] rounded-full"></span>
                <span className="text-sm font-sans text-[#322e18ff]">
                  Genuine Parts Guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#720e07ff] rounded-full"></span>
                <span className="text-sm font-sans text-[#322e18ff]">
                  12-Month Warranty
                </span>
              </div>
            </div>
          </div>

          {/* Values - spans 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-[#322e18ff]/5 p-6 border-l-4 border-[#720e07ff]"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      className="w-5 h-5 text-[#720e07ff] flex-shrink-0 mt-1"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#322e18ff] mb-1">
                        {value.title}
                      </h4>
                      <p className="font-sans text-sm text-[#8a817cff] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-12 border-t border-[#8a817cff]/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-[#322e18ff]/5 group-hover:bg-[#720e07ff]/10 transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-[#322e18ff] group-hover:text-[#720e07ff] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#322e18ff] group-hover:text-[#720e07ff] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="font-sans text-xs sm:text-sm text-[#8a817cff] mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
