const Hero = () => {
  return (
    <section className="relative bg-white min-h-[calc(100vh-80px)] flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      {/* Decorative background element - subtle and not gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#322e18ff] opacity-[0.03] rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#720e07ff] opacity-[0.03] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#253c78ff] opacity-[0.02] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Main Header */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-[#322e18ff] mb-6">
            Professional Electronics
            <br />
            <span className="text-[#720e07ff]">Repair Services</span>
          </h1>

          {/* Paragraph */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#8a817cff] max-w-2xl mx-auto leading-relaxed mb-10">
            Electra provides expert diagnostics and reliable repairs for
            smartphones, laptops, tablets, and gaming consoles. Trust our
            certified technicians to bring your devices back to life with
            precision and care.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#Contact">
              <button className="group relative px-8 sm:px-10 py-4 text-base sm:text-lg font-sans font-medium text-white bg-[#322e18ff] hover:bg-[#322e18ff]/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-[#720e07ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </a>

            <div className="text-sm font-sans text-[#8a817cff] flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#720e07ff] rounded-full"></span>
              Same-day service available
            </div>
          </div>

          {/* Trust indicators - subtle, no shadows */}
          <div className="mt-12 pt-10 border-t border-[#8a817cff]/20 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-[#322e18ff]">
                15+
              </div>
              <div className="text-xs font-sans text-[#8a817cff] uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-[#322e18ff]">
                10K+
              </div>
              <div className="text-xs font-sans text-[#8a817cff] uppercase tracking-wider">
                Devices Repaired
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-[#322e18ff]">
                4.9
              </div>
              <div className="text-xs font-sans text-[#8a817cff] uppercase tracking-wider">
                Customer Rating
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-[#322e18ff]">
                24hr
              </div>
              <div className="text-xs font-sans text-[#8a817cff] uppercase tracking-wider">
                Avg. Turnaround
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
