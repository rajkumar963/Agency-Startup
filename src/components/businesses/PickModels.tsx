
import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
import {
  ShoppingCart,
  RefreshCw,
  List,
  Gift,
  UserIcon as UserTie,
  Users,
  ClapperboardIcon as ChalkboardTeacher,
  UsersIcon,
  Handshake,
  Megaphone,
  Link,
  Store,
  Coins,
  Heart,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Lightbulb,
  Rocket,
  Play,
} from "lucide-react"

// Register Chart.js components
Chart.register(...registerables)

export default function PickModels() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  // Initialize chart when component mounts
  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Cost-plus", "Value-based", "Skimming", "Penetration", "Tiers", "Competitive"],
            datasets: [
              {
                label: "Relative Revenue Potential",
                data: [3, 8, 7, 5, 9, 4],
                backgroundColor: ["#3b82f6", "#7c3aed", "#f59e42", "#10b981", "#e11d48", "#fbbf24"],
                borderWidth: 1,
                borderRadius: 8,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: { backgroundColor: "#22223b", bodyColor: "#fff" },
            },
            scales: {
              x: {
                title: { display: true, text: "Pricing Strategy", color: "#C7D2FE" },
                grid: { color: "#22223b" },
                ticks: { color: "#C7D2FE" },
              },
              y: {
                beginAtZero: true,
                title: { display: true, text: "Potential (1-10)", color: "#C7D2FE" },
                grid: { color: "#22223b" },
                ticks: { color: "#C7D2FE", stepSize: 1 },
              },
            },
          },
        })
      }
    }

    // Cleanup chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  // Reveal sections on scroll
  useEffect(() => {
    function revealOnScroll() {
      const reveals = document.querySelectorAll(".section-fade-in")
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        if (elementTop < windowHeight - 80) {
          reveals[i].classList.add("visible")
        }
      }
    }

    // Initial check on load
    revealOnScroll()

    // Add scroll event listener
    window.addEventListener("scroll", revealOnScroll)

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <div className="bg-gray-900 font-sans text-gray-100 mt-20">
      <style>{`
        body {
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          background: #111827;
          color: #F3F4F6;
          scroll-behavior: smooth;
        }
        h1, h2, h3, h4 {
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
        }
        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #7c3aed, #f59e42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        /* Animated underline for heading */
        .animated-underline {
          position: relative;
        }
        .animated-underline:after {
          content: "";
          display: block;
          height: 3px;
          background: linear-gradient(90deg, #7c3aed, #60a5fa, #f59e42);
          width: 0;
          transition: 0.5s;
          position: absolute;
          bottom: -4px;
          left: 0;
        }
        .animated-underline:hover:after {
          width: 100%;
        }
        /* Card hover animation */
        .card-hover {
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.025);
          box-shadow: 0 10px 32px rgba(92,55,255,0.12);
          z-index: 2;
        }
        /* For animated section headings */
        .section-fade-in {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 1s, transform 1s;
        }
        .section-fade-in.visible {
          opacity: 1;
          transform: none;
        }
        .gradient-bar {
          background: linear-gradient(90deg, #7c3aed 0%, #60a5fa 50%, #f59e42 100%);
          height: 4px;
          border-radius: 2px;
          margin-bottom: 24px;
          width: 120px;
        }
        /* Custom scrollbar for on-screen, ignored in PDF export */
        ::-webkit-scrollbar {
          width: 8px;
          background: #22223b;
        }
        ::-webkit-scrollbar-thumb {
          background: #3c366b;
          border-radius: 4px;
        }
        /* Remove focus ring for buttons unless keyboard navigation */
        button:focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 py-9">
        {/* HEADER */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text animated-underline inline-block">
            Business Models
          </h1>
          <div className="mt-3 text-xl text-gray-300 font-light">How to Make Money & Strategy to Implement It</div>
          <div className="gradient-bar mx-auto mt-5"></div>
        </header>

        {/* HOOK INTRO */}
        <section className="section-fade-in mb-14" id="intro">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-lg text-gray-200 font-medium">
              Are you an entrepreneur, founder, or startup visionary? The right{" "}
              <strong className="text-indigo-300">business model</strong> can make or break your enterprise. Learn which
              models win, how to execute them, and the strategies that turn ideas into scalable profits.
            </p>
          </div>
        </section>

        {/* WHAT IS A BUSINESS MODEL */}
        <section className="section-fade-in mb-14" id="what-is">
          <h2 className="text-3xl font-bold gradient-text mb-3 animated-underline inline-block">
            What Is a Business Model?
          </h2>
          <p className="text-lg text-gray-300">
            A <span className="text-blue-400 font-semibold">business model</span> is the blueprint for how your startup
            creates, delivers, and captures value. It outlines what you offer, who your customers are, how you deliver
            your product or service, and how you make money.
            <br />
            <br />
            In essence, it's "<em>how you make money and why your company will survive and thrive</em>."
          </p>
        </section>

        {/* 15 BUSINESS MODELS IN CARDS */}
        <section className="section-fade-in mb-14" id="models">
          <h2 className="text-2xl font-bold gradient-text mb-5 animated-underline inline-block">
            15 Proven Business Models (With Examples)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-indigo-300 flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" /> Direct Sales / B2C
              </h3>
              <p className="text-gray-200 mt-1">Sell products/services directly to consumers, often online.</p>
              <div className="text-sm text-blue-400 mt-2">
                Example: <span className="font-bold">Apple Store, Dell</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-orange-300 flex items-center">
                <RefreshCw className="mr-2 h-5 w-5" /> Razor & Blade
              </h3>
              <p className="text-gray-200 mt-1">Sell a main, low-margin item with necessary high-margin consumables.</p>
              <div className="text-sm text-orange-400 mt-2">
                Example: <span className="font-bold">Gillette, HP Printers & Ink</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-purple-300 flex items-center">
                <List className="mr-2 h-5 w-5" /> Subscription
              </h3>
              <p className="text-gray-200 mt-1">Charge recurring fees for continuous access to a product/service.</p>
              <div className="text-sm text-purple-400 mt-2">
                Example: <span className="font-bold">Netflix, Spotify, Salesforce</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-teal-300 flex items-center">
                <Gift className="mr-2 h-5 w-5" /> Freemium
              </h3>
              <p className="text-gray-200 mt-1">
                Offer basic functionalities for free, monetize through premium features.
              </p>
              <div className="text-sm text-teal-400 mt-2">
                Example: <span className="font-bold">Dropbox, Slack, LinkedIn</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-pink-300 flex items-center">
                <UserTie className="mr-2 h-5 w-5" /> Consulting
              </h3>
              <p className="text-gray-200 mt-1">Sell expert advice/services, usually per hour or per project.</p>
              <div className="text-sm text-pink-400 mt-2">
                Example: <span className="font-bold">Accenture, McKinsey</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-yellow-300 flex items-center">
                <Users className="mr-2 h-5 w-5" /> Agency
              </h3>
              <p className="text-gray-200 mt-1">
                A team provides specialized services (marketing, web, etc) for clients.
              </p>
              <div className="text-sm text-yellow-400 mt-2">
                Example: <span className="font-bold">WPP, Ogilvy</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-red-300 flex items-center">
                <ChalkboardTeacher className="mr-2 h-5 w-5" /> Educational
              </h3>
              <p className="text-gray-200 mt-1">Charge to transfer skills or knowledge via courses or coaching.</p>
              <div className="text-sm text-red-400 mt-2">
                Example: <span className="font-bold">Coursera, Udemy</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-blue-300 flex items-center">
                <UsersIcon className="mr-2 h-5 w-5" /> Peer-to-Peer
              </h3>
              <p className="text-gray-200 mt-1">Connect two groups for exchange, earning a fee on each interaction.</p>
              <div className="text-sm text-blue-400 mt-2">
                Example: <span className="font-bold">Airbnb, Upwork</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-green-300 flex items-center">
                <Handshake className="mr-2 h-5 w-5" /> Leasing/Rental
              </h3>
              <p className="text-gray-200 mt-1">
                Rent products for a fee, often for expensive or infrequent-use items.
              </p>
              <div className="text-sm text-green-400 mt-2">
                Example: <span className="font-bold">Hertz, WeWork</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-orange-200 flex items-center">
                <Megaphone className="mr-2 h-5 w-5" /> Attention/Sponsorship
              </h3>
              <p className="text-gray-200 mt-1">Monetize attention via ads or sponsors on high-reach platforms.</p>
              <div className="text-sm text-orange-300 mt-2">
                Example: <span className="font-bold">YouTube, Instagram Influencers</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-cyan-300 flex items-center">
                <Link className="mr-2 h-5 w-5" /> Affiliate Marketing
              </h3>
              <p className="text-gray-200 mt-1">Earn commission promoting others' products/services.</p>
              <div className="text-sm text-cyan-400 mt-2">
                Example: <span className="font-bold">Amazon Associates, Wirecutter</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-indigo-200 flex items-center">
                <Store className="mr-2 h-5 w-5" /> Marketplace
              </h3>
              <p className="text-gray-200 mt-1">
                Operate a platform for buyers and sellers, taking a cut on transactions.
              </p>
              <div className="text-sm text-indigo-300 mt-2">
                Example: <span className="font-bold">eBay, Etsy, Alibaba</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-gray-200 flex items-center">
                <Coins className="mr-2 h-5 w-5" /> Pay-As-You-Go
              </h3>
              <p className="text-gray-200 mt-1">Charge users by usage rather than a flat fee.</p>
              <div className="text-sm text-gray-400 mt-2">
                Example: <span className="font-bold">AWS, Twilio</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-fuchsia-300 flex items-center">
                <Heart className="mr-2 h-5 w-5" /> Buy One, Give One
              </h3>
              <p className="text-gray-200 mt-1">For every sale, a donation is made (product or funds).</p>
              <div className="text-sm text-fuchsia-400 mt-2">
                Example: <span className="font-bold">TOMS, Warby Parker</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 card-hover">
              <h3 className="text-xl font-bold text-lime-300 flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" /> Franchising
              </h3>
              <p className="text-gray-200 mt-1">Allow others to operate your business formula for a fee.</p>
              <div className="text-sm text-lime-400 mt-2">
                Example: <span className="font-bold">McDonalds, Subway</span>
              </div>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION GUIDE */}
        <section className="section-fade-in mb-14" id="implementation">
          <h2 className="text-2xl font-bold gradient-text mb-5 animated-underline inline-block">
            How to Implement Your Business Model: A Step-by-Step Plan
          </h2>
          <ol className="space-y-4 text-gray-200 pl-5">
            <li>
              <span className="font-bold text-blue-300">1. Define Your Value Proposition</span>
              <div className="text-sm text-gray-400">
                What unique problem do you solve? Why should customers choose you?
              </div>
            </li>
            <li>
              <span className="font-bold text-purple-300">2. Identify Your Target Market</span>
              <div className="text-sm text-gray-400">
                Research your ideal customer, their pain points, and buying behavior.
              </div>
            </li>
            <li>
              <span className="font-bold text-yellow-300">3. Analyze the Competition</span>
              <div className="text-sm text-gray-400">
                Understand direct competitors, their strengths, and gaps you can fill.
              </div>
            </li>
            <li>
              <span className="font-bold text-teal-300">4. Choose & Document Your Model</span>
              <div className="text-sm text-gray-400">
                Pick the business model that fits your product, market, and growth goals. Document the revenue streams,
                cost structure, partners, and channels.
              </div>
            </li>
            <li>
              <span className="font-bold text-pink-300">5. Build and Test an MVP (Minimum Viable Product)</span>
              <div className="text-sm text-gray-400">
                Launch a minimal feature version to market. Gather real user feedback.
              </div>
            </li>
            <li>
              <span className="font-bold text-indigo-300">6. Develop Go-to-Market Channels</span>
              <div className="text-sm text-gray-400">
                Set up your sales, distribution (e.g., online, retail, partners), and marketing tactics.
              </div>
            </li>
            <li>
              <span className="font-bold text-green-300">7. Monitor, Learn, and Iterate</span>
              <div className="text-sm text-gray-400">Use data to refine your model, pricing, and growth processes.</div>
            </li>
          </ol>
        </section>

        {/* STRATEGY SECTION */}
        <section className="section-fade-in mb-14" id="strategy">
          <h2 className="text-2xl font-bold gradient-text mb-5 animated-underline inline-block">
            Winning Strategy: Pricing, Revenue, MVPs & Growth
          </h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center">
              <DollarSign className="mr-2 h-5 w-5" /> Pricing Strategy
            </h3>
            <p className="text-gray-300 mb-2">Pricing can make or break a business. Consider:</p>
            <ul className="list-disc pl-6 text-gray-400">
              <li>
                <strong>Cost-plus:</strong> Markup on top of production cost (common, but not always optimal)
              </li>
              <li>
                <strong>Value-based:</strong> Set prices based on customer perceived value
              </li>
              <li>
                <strong>Competitive:</strong> Match or undercut competitor pricing
              </li>
              <li>
                <strong>Skimming:</strong> High initial price, lower over time
              </li>
              <li>
                <strong>Penetration:</strong> Low initial price to gain market share, then increase
              </li>
              <li>
                <strong>Tiers:</strong> Offer packages at different price/value points
              </li>
            </ul>
            <div className="my-6">
              <canvas ref={chartRef} height="100"></canvas>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-purple-400 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" /> Revenue Streams
            </h3>
            <p className="text-gray-300 mb-2">
              Diversify risk and fuel growth with multiple streams (e.g., direct sales, subscriptions, licensing,
              advertising).
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-green-400 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" /> MVP (Minimum Viable Product)
            </h3>
            <p className="text-gray-300 mb-2">
              Launch an MVP – a simple, testable product version – to get real feedback and iterate fast. Examples:
              Instagram launching with photo uploads only; Dropbox's launch video.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-pink-400 flex items-center">
              <Rocket className="mr-2 h-5 w-5" /> Growth Playbook
            </h3>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Start with a focused beachhead market</li>
              <li>Build virality or referral engines where possible</li>
              <li>Use data-driven decision making for product and marketing</li>
              <li>Continuously test new channels & iterate your approach</li>
            </ul>
          </div>
        </section>

        {/* CHART LEGEND */}
        <section className="section-fade-in mb-10" id="chart-legend">
          <div className="inline-flex rounded-lg bg-gray-800 p-2 items-center space-x-2">
            <div className="w-4 h-4 bg-blue-400 rounded"></div>
            <span className="text-gray-300 text-sm">Pricing strategies vs. revenue potential (example)</span>
          </div>
        </section>

        {/* FINAL TAKEAWAY */}
        <section className="section-fade-in mb-10" id="cta">
          <h2 className="text-2xl font-bold gradient-text mb-4">Make Your Model, Make Your Mark</h2>
          <div className="text-lg text-gray-200 mb-4">
            Business models are dynamic. The winners are those who{" "}
            <span className="text-green-300 font-semibold">iterate rapidly</span>, focus on customer value, and execute
            relentlessly. Ready to launch or pivot your business model? The time to start is now.
          </div>
          <a
            href="#intro"
            className="bg-gradient-purple-blue hover:opacity-90 transition-opacity text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Play className="inline-block mr-1 h-4 w-4" /> Start Building Your Model
          </a>
        </section>

        {/* References */}
        {/* <footer className="border-t border-gray-800 pt-7 mt-10 text-xs text-gray-500">
          <div className="mb-2">
            <span className="font-semibold text-gray-300">Further Reading / References:</span>
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="https://www.investopedia.com/terms/b/businessmodel.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Investopedia: Business Model Definition & Examples
                </a>
              </li>
              <li>
                <a
                  href="https://www.123financials.com/insights/types-of-business-models-choose-the-right-one/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  123Financials: Types of Business Models
                </a>
              </li>
              <li>
                <a
                  href="https://business.tutsplus.com/articles/what-is-a-business-model--cms-32830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  TutsPlus: Business Model Types
                </a>
              </li>
              <li>
                <a
                  href="https://www.strategyzer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Strategyzer (Business Model Canvas)
                </a>
              </li>
            </ul>
          </div>
          <div>© 2024 Business Model Guide</div>
        </footer> */}
      </div>
    </div>
  )
}
