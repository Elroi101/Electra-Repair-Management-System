import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield, Briefcase } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  async function submit_handler(user_info) {
    try {
      const response = await axios.post(
        "http://localhost:3000/submit",
        user_info,
        {
          withCredentials: true,
        },
      );
      if (response.data.isVerified === true) {
        navigate("/Dashboard");
      } else {
        alert("information not correct");
      }
    } catch (er) {
      console.error("failed to make request" + er);
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await submit_handler(formData);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fefeffff] flex flex-col lg:flex-row">
      {/* Left Side - Branding */}
      <div className="lg:w-1/2 bg-[#322e18ff] flex items-center justify-center px-6 py-12 lg:py-0 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#720e07ff]/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#253c78ff]/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#8a817cff]/10 rounded-full"></div>

        <div className="relative z-10 max-w-md w-full text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#720e07ff] flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-white">
                  E
                </span>
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
              Electra
              <span className="text-[#720e07ff]">.</span>
            </h1>
            <p className="font-sans text-[#8a817cff] mt-3 text-sm sm:text-base">
              Client Management Dashboard
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3 bg-[#fefeffff]/5 p-4 border-l-2 border-[#720e07ff]">
              <Shield
                className="w-5 h-5 text-[#720e07ff] flex-shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-sans text-sm font-semibold text-white">
                  Secure Access
                </h4>
                <p className="font-sans text-xs text-[#8a817cff]">
                  Your data is protected with enterprise-grade security
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#fefeffff]/5 p-4 border-l-2 border-[#253c78ff]">
              <Briefcase
                className="w-5 h-5 text-[#253c78ff] flex-shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <div>
                <h4 className="font-sans text-sm font-semibold text-white">
                  Role-Based Access
                </h4>
                <p className="font-sans text-xs text-[#8a817cff]">
                  Customized dashboards for every team member
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 pt-6 border-t border-[#8a817cff]/20">
            <p className="font-sans text-xs text-[#8a817cff]">
              Trusted by{" "}
              <span className="text-white font-semibold">12,000+</span>{" "}
              customers
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="lg:w-1/2 flex items-center justify-center px-6 py-12 lg:py-0">
        <div className="max-w-md w-full">
          {/* Form Header */}
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-[#322e18ff]">
              Welcome Back
            </h2>
            <p className="font-sans text-[#8a817cff] mt-2 text-sm">
              Sign in to access your Electra dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-sans font-medium uppercase tracking-wider text-[#322e18ff] mb-2"
              >
                Email Address <span className="text-[#720e07ff]">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-10 border-r border-[#8a817cff]/20 flex items-center justify-center bg-[#322e18ff]/5">
                  <Mail
                    className="w-4 h-4 text-[#8a817cff]"
                    strokeWidth={1.5}
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-[#8a817cff]/20 focus:border-[#720e07ff] outline-none transition-colors duration-300 bg-white font-sans text-sm text-[#322e18ff] placeholder-[#8a817cff]/50"
                  placeholder="john@electra.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-sans font-medium uppercase tracking-wider text-[#322e18ff] mb-2"
              >
                Password <span className="text-[#720e07ff]">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-10 border-r border-[#8a817cff]/20 flex items-center justify-center bg-[#322e18ff]/5">
                  <Lock
                    className="w-4 h-4 text-[#8a817cff]"
                    strokeWidth={1.5}
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-12 py-3 border border-[#8a817cff]/20 focus:border-[#720e07ff] outline-none transition-colors duration-300 bg-white font-sans text-sm text-[#322e18ff] placeholder-[#8a817cff]/50"
                  placeholder="Enter your password"
                  minLength="6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a817cff] hover:text-[#322e18ff] transition-colors duration-200"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" strokeWidth={1.5} />
                  ) : (
                    <Eye className="w-4 h-4" strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 text-sm font-sans font-medium text-white transition-all duration-300 relative overflow-hidden group ${
                isLoading
                  ? "bg-[#8a817cff] cursor-not-allowed"
                  : "bg-[#720e07ff] hover:bg-[#720e07ff]/90"
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
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
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      strokeWidth={2}
                    />
                  </>
                )}
              </span>
              {!isLoading && (
                <span className="absolute inset-0 bg-[#322e18ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#8a817cff]/20"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-[#fefeffff] font-sans text-[#8a817cff]">
                Secure sign in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
