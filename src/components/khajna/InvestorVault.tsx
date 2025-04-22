
import { useEffect, useRef, useState } from "react"
import {Link} from 'react-router-dom'
import {
  Calendar,
  ChevronDown,
  CheckCircle,
  DollarSign,
  FileText,
  LineChart,
  Lock,
  LockOpen,
  Mail,
  MapPin,
  PieChart,
  Shield,
  User,
  Building,
  Lightbulb,
} from "lucide-react"

export default function InvestorVault() {
  const particlesContainerRef = useRef<HTMLDivElement>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    // Create particles
    if (particlesContainerRef.current) {
      const particleCount = 30

      for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainerRef.current)
      }
    }

    // Animation on scroll
    const animatedElements = document.querySelectorAll(".fadeIn, .slide-in-left, .slide-in-right")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running"
          }
        })
      },
      { threshold: 0.1 },
    )

    animatedElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.animationPlayState = "paused"
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const createParticle = (container: HTMLDivElement) => {
    const particle = document.createElement("div")
    particle.classList.add("particle")

    // Random position
    const posX = Math.random() * 100
    const posY = Math.random() * 100

    // Random size
    const size = Math.random() * 5 + 1

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1

    // Random animation duration
    const duration = Math.random() * 20 + 10

    particle.style.left = `${posX}%`
    particle.style.top = `${posY}%`
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.opacity = String(opacity)

    // Create floating animation
    particle.style.animation = `float ${duration}s ease-in-out infinite`
    particle.style.animationDelay = `${Math.random() * 5}s`

    container.appendChild(particle)
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div className="font-sans text-gray-100 bg-[#0c0c0c] overflow-x-hidden mt-20">
      {/* Custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        :root {
          --primary-color: #0af;
          --hover-color: #07f;
          --bg-color: #0c0c0c;
          --card-bg: #161616;
          --text-color: #f0f0f0;
        }
        
        .bg-gradient {
          background: linear-gradient(135deg, rgba(10,10,10,1) 0%, rgba(20,20,20,1) 100%);
        }
        
        .card {
          background-color: var(--card-bg);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,170,255,0.2);
        }
        
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          outline: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,170,255,0.3);
        }
        
        .btn-primary:hover {
          background-color: var(--hover-color);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,170,255,0.4);
        }
        
        .btn-primary::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .btn-primary:hover::after {
          opacity: 1;
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .typewriter {
          overflow: hidden;
          border-right: .15em solid var(--primary-color);
          white-space: nowrap;
          margin: 0 auto;
          animation: 
              typing 3.5s steps(40, end),
              blink-caret .75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: var(--primary-color); }
        }
        
        .fadeIn {
          animation: fadeIn 1s ease-in forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px var(--primary-color), 0 0 20px var(--primary-color); }
          to { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px var(--primary-color), 0 0 40px var(--primary-color); }
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(0,170,255,0.5);
          pointer-events: none;
        }
        
        .slide-in-left {
          animation: slideInLeft 1s ease forwards;
          opacity: 0;
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .slide-in-right {
          animation: slideInRight 1s ease forwards;
          opacity: 0;
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>

      

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 slide-in-left" style={{ animationDelay: "0.3s" }}>
                <span className="text-white">Investor</span>&nbsp;
                <span className="gradient-text">Vault</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 text-gray-300 typewriter" style={{ animationDelay: "0.6s" }}>
                You don't need connections. You need the right direction.
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 fadeIn" style={{ animationDelay: "0.9s" }}>
                Access ethically sourced, comprehensive investor information to fuel your fundraising strategy.
              </p>
              <button className="btn-primary fadeIn" style={{ animationDelay: "1.2s" }}>
                Unlock the Vault
              </button>
            </div>

            {/* Right Card */}
            <div className="w-full lg:w-1/2">
              <div className="bg-blue-900 bg-opacity-20 rounded-xl p-6 sm:p-8 border border-blue-800 floating">
                <div className="text-center mb-4 sm:mb-6">
                  <span className="text-blue-400 text-4xl">
                    <Shield className="inline-block w-10 h-10 mx-auto" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold mt-2">Ethically Sourced Information</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Our investor information is compiled from public sources, with strict adherence to privacy laws and
                  ethical standards.
                </p>
                <div className="flex justify-center">
                  <span className="text-xs text-gray-500">Trusted by 500+ founders</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated particles in the background */}
        <div ref={particlesContainerRef} className="absolute top-0 left-0 w-full h-full z-0"></div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-white">Key</span>
            <span className="text-blue-400"> Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6 fadeIn" style={{ animationDelay: "0.3s" }}>
              <div className="text-blue-400 mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cold Email Templates</h3>
              <p className="text-gray-400">
                Never stare at a blank email again. Our proven templates get responses and help you stand out from the
                crowd.
              </p>
            </div>
            <div className="card p-6 fadeIn" style={{ animationDelay: "0.5s" }}>
              <div className="text-blue-400 mb-4">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Investor Analytics</h3>
              <p className="text-gray-400">
                Track your outreach performance and see which strategies work best. Data-driven decisions lead to better
                results.
              </p>
            </div>
            <div className="card p-6 fadeIn" style={{ animationDelay: "0.7s" }}>
              <div className="text-blue-400 mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Meeting Scheduler</h3>
              <p className="text-gray-400">
                Book meetings directly through our platform. No back-and-forth emails—just efficient scheduling that
                respects everyone's time.
              </p>
            </div>
            <div className="card p-6 fadeIn" style={{ animationDelay: "0.9s" }}>
              <div className="text-blue-400 mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Weekly Updates</h3>
              <p className="text-gray-400">
                Stay ahead with fresh investor insights delivered to your inbox every week. Know who's investing and
                what they're looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside the Vault Section */}
      <section id="inside" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center fadeIn">What's Inside the Vault?</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto fadeIn" style={{ animationDelay: "0.3s" }}>
            Our carefully curated investor information resource provides you with everything you need to connect with
            the right investors for your startup.
          </p>

          <div className="bg-gray-900 rounded-xl p-8 mb-12 fadeIn" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Comprehensive Investor Details</h3>
            <p className="text-gray-300 mb-6">Each investor profile in our ethically compiled directory includes:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="text-blue-400 mr-4 mt-1">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Investor Names</h4>
                  <p className="text-gray-400">
                    Full names of active investors, sourced from public professional profiles.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-400 mr-4 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Email Addresses</h4>
                  <p className="text-gray-400">
                    Business email addresses for professional outreach, all ethically compiled.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-400 mr-4 mt-1">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="2"
                      y="9"
                      width="4"
                      height="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="4"
                      cy="4"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">LinkedIn Profile URLs</h4>
                  <p className="text-gray-400">Direct links to public LinkedIn profiles for research and connection.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-400 mr-4 mt-1">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Company Information</h4>
                  <p className="text-gray-400">
                    Current firm, role, and investment history from publicly available sources.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-400 mr-4 mt-1">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Investment Interests</h4>
                  <p className="text-gray-400">Areas of focus and sectors they're actively investing in.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-400 mr-4 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location Information</h4>
                  <p className="text-gray-400">Geographic focus and regional investment preferences.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-400 mr-4 mt-1">
                  <PieChart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stage Preferences</h4>
                  <p className="text-gray-400">Preferred funding stages (seed, Series A, growth, etc.).</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-400 mr-4 mt-1">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Investment Parameters</h4>
                  <p className="text-gray-400">Typical check sizes and investment criteria.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg fadeIn" style={{ animationDelay: "0.7s" }}>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Sample Information Format</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="bg-blue-400 bg-opacity-10 text-blue-400 font-semibold p-3 text-left rounded-tl-lg">
                        Information Type
                      </th>
                      <th className="bg-blue-400 bg-opacity-10 text-blue-400 font-semibold p-3 text-left rounded-tr-lg">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700 hover:bg-blue-400 hover:bg-opacity-5 transition-colors">
                      <td className="p-3 border-r border-gray-700">Investor Name</td>
                      <td className="p-3">Sarah Johnson</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-blue-400 hover:bg-opacity-5 transition-colors">
                      <td className="p-3 border-r border-gray-700">Email Address</td>
                      <td className="p-3">s.johnson@venturefirm.com</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-blue-400 hover:bg-opacity-5 transition-colors">
                      <td className="p-3 border-r border-gray-700">LinkedIn URL</td>
                      <td className="p-3">linkedin.com/in/sarahjohnson</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-blue-400 hover:bg-opacity-5 transition-colors">
                      <td className="p-3 border-r border-gray-700">Company</td>
                      <td className="p-3">Venture Capital Partners</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-blue-400 hover:bg-opacity-5 transition-colors">
                      <td className="p-3 border-r border-gray-700">Interests</td>
                      <td className="p-3">Fintech, SaaS, AI/ML</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-blue-400 hover:bg-opacity-5 transition-colors">
                      <td className="p-3 border-r border-gray-700">Location</td>
                      <td className="p-3">San Francisco, CA (Invests Globally)</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-blue-400 hover:bg-opacity-5 transition-colors">
                      <td className="p-3 border-r border-gray-700">Stage</td>
                      <td className="p-3">Seed to Series A</td>
                    </tr>
                    <tr className="hover:bg-blue-400 hover:bg-opacity-5 transition-colors">
                      <td className="p-3 border-r border-gray-700">Check Size</td>
                      <td className="p-3">$500K - $3M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">
                Note: All information is sourced from public domains in accordance with privacy laws and ethical
                standards.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-primary pulse">Unlock the Vault Now</button>
            <p className="mt-4 text-gray-500 text-sm">Over 10,000+ ethically sourced investor profiles</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-white">Frequently Asked</span>&nbsp;
            <span className="gradient-text"> Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "How is the investor information collected?",
                answer:
                  "All investor information is ethically sourced from publicly available information, including professional websites, social media profiles, news articles, and press releases. We do not use scraping tools or methods that violate terms of service. Our team manually verifies and updates information regularly to ensure accuracy.",
              },
              {
                question: "Is it legal to use this information for cold outreach?",
                answer:
                  "Yes, our service provides legally obtained business contact information for professional outreach. However, users must comply with applicable laws including CAN-SPAM, GDPR, and CCPA when using this information. We provide guidelines on compliant outreach strategies. Always include unsubscribe options and honor opt-out requests.",
              },
              {
                question: "How often is the investor information updated?",
                answer:
                  "Our team refreshes investor information monthly to ensure accuracy. We track career moves, new funds, and changing investment theses. Users can also report outdated information through our platform, which our team will verify and update accordingly.",
              },
              {
                question: "What makes your investor information better than what I can find online?",
                answer:
                  "Our value comes from thorough curation, verification, and comprehensive organization. While much of this information exists publicly, it's scattered across hundreds of sources. We save you countless hours of research by consolidating accurate, up-to-date information in one searchable resource. Our advanced filtering allows you to find exactly the right investors for your specific startup.",
              },
              {
                question: "How do I know which investors are right for my startup?",
                answer:
                  "Our advanced filtering system allows you to search by industry, check size, location, stage preference, and more. You can also see recent investments to understand if they're actively deploying capital. Our weekly investor activity updates highlight which investors are most active in your space.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`border-b border-gray-800 overflow-hidden ${activeFaq === index ? "pb-4" : ""}`}
              >
                <div
                  className="py-6 flex justify-between items-center cursor-pointer hover:text-blue-400 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <span className="text-blue-400">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeFaq === index ? "rotate-180" : ""}`}
                    />
                  </span>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 px-1 pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section id="legal" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-white">Legal</span>&nbsp;
            <span className="gradient-text"> Information</span>
          </h2>

          <div className="bg-black bg-opacity-30 border border-gray-800 rounded-lg p-8 fadeIn">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Ethical Usage Policy</h3>
            <p className="text-gray-400 mb-6">
              Investor Vault provides ethically sourced business contact information for professional use. By using our
              service, you agree to the following terms:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Legitimate Business Purpose",
                  text: "All information shall be used exclusively for legitimate business communications related to investment opportunities and professional networking.",
                },
                {
                  title: "Compliance with Laws",
                  text: "Users must comply with all applicable laws, including but not limited to CAN-SPAM, GDPR, CCPA, and other relevant data protection and privacy regulations.",
                },
                {
                  title: "Respect for Opt-Outs",
                  text: "Users must honor all unsubscribe, opt-out, or deletion requests promptly and maintain appropriate records of such requests.",
                },
                {
                  title: "No Redistribution",
                  text: "The information provided may not be sold, leased, shared, or redistributed to third parties without explicit written permission.",
                },
                {
                  title: "No Harassment",
                  text: "Users shall not engage in any form of harassment, excessive outreach, or practices that may be considered intrusive or unprofessional.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-gray-400">
                    <span className="font-semibold">{item.title}:</span> {item.text}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4 text-blue-400">Data Source Statement</h3>
            <p className="text-gray-400 mb-6">
              All investor information provided through Investor Vault is ethically compiled from legitimate public
              sources, including:
            </p>

            <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2 pl-4">
              <li>Public professional profiles on business networking platforms</li>
              <li>Company websites and official directories</li>
              <li>Press releases and official announcements</li>
              <li>Industry publications and news sources</li>
              <li>Public investment announcements and regulatory filings</li>
              <li>Information voluntarily shared by the individuals in professional contexts</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-blue-400">Disclaimer</h3>
            <p className="text-gray-400 mb-4">
              While we strive to maintain accurate and up-to-date information, we cannot guarantee absolute accuracy or
              completeness of all data. Users acknowledge that investor information may change and should verify
              critical details before important communications.
            </p>
            <p className="text-gray-400 mb-4">
              Investor Vault is not responsible for the results of any outreach activities conducted using our
              information. Success in fundraising depends on multiple factors beyond having accurate contact
              information.
            </p>
            <p className="text-gray-400">
              By using our service, you acknowledge that you have read, understood, and agree to comply with these terms
              and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Connect with the <span className="gradient-text">Right Investors?</span></h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop wasting time on research. Start having meaningful conversations with investors who are actively looking
            for startups like yours.
          </p>
          <div className="mb-10">
            <button className="btn-primary text-xl px-10 py-4 pulse">
              <LockOpen className="inline-block mr-2 w-5 h-5" /> Unlock the Vault Now
            </button>
          </div>
          <p className="text-gray-500">Join over 1,000+ founders who have successfully raised with Investor Vault</p>
        </div>
      </section>
    </div>
  )
}
