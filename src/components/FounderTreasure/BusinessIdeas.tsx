"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  GraduationCap,
  Heart,
  Home,
  LightbulbIcon,
  BikeIcon as Motorcycle,
  Phone,
  SproutIcon as Seedling,
  ShoppingCart,
  Utensils,
  Shirt,
  DollarSign,
  Users,
  BarChart,
  ExpandIcon as ArrowsExpand,
  ClipboardList,
} from "lucide-react"

export default function BusinessIdeas() {
  // State for category visibility
  const [visibleCategories, setVisibleCategories] = useState({
    foodCategory: true,
    homeCategory: true,
    agricultureCategory: true,
    fashionCategory: true,
    healthCategory: true,
    electronicsCategory: true,
    educationCategory: true,
    automotiveCategory: true,
  })

  // Toggle category visibility
  const toggleCategory = (category: string) => {
    setVisibleCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  // Fade-in animation on scroll
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    fadeElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  // Add staggered animations to cards
  useEffect(() => {
    const cards = document.querySelectorAll(".idea-card")
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("opacity-100", "translate-y-0")
      }, 100 * index)
    })
  }, [])

  return (
    <div className=" text-zinc-200 font-sans pb-20 mt-20">
    {/* Header Section */}
    <header className="py-12 px-4 text-center fade-in opacity-0 translate-y-5 transition-all duration-600">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue-500 animate-pulse">
        50 Product-Based Business Ideas
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300">For Tier 3 Cities in India</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-400 mb-6">
          A collection of practical business opportunities with low initial investment, designed specifically for
          smaller cities and towns in India.
        </p>
        <div className="h-[3px] w-1/2 mx-auto my-8 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
      </div>
    </header>

    {/* Navigation Menu */}
    <nav className=" bg-gray-900 py-4 px-4 shadow-lg mb-8 fade-in opacity-0 translate-y-5 transition-all duration-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
          <a href="#overview" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700  transition-all">
            Overview
          </a>
          <a href="#food" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Food & Beverage
          </a>
          <a href="#home" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Home Essentials
          </a>
          <a href="#agriculture" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Agriculture
          </a>
          <a href="#fashion" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Fashion
          </a>
          <a href="#health" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Health
          </a>
          <a href="#electronics" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Electronics
          </a>
          <a href="#education" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Education
          </a>
          <a href="#automotive" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Automotive
          </a>
          <a href="#advantages" className="px-3 py-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all">
            Why These Work
          </a>
        </div>
      </div>
    </nav>

    <main className="max-w-6xl mx-auto px-4">
      {/* Overview Section */}
      <section id="overview" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <h2 className="text-3xl font-bold mb-8 text-gray-200 text-center">Understanding <span className=" gradient-text">Tier 3 Cities</span></h2>
        <div className="bg-gray-800 rounded border border-gray-700 p-6 shadow-custom-heavy">
        <p className="mb-4">
            Tier 3 cities in India are smaller urban areas with populations typically below 1 million. They offer
            unique business opportunities due to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Growing consumer market with rising income levels</li>
            <li>Lower business setup and operation costs</li>
            <li>Less competition compared to metro cities</li>
            <li>Strong local networks and community support</li>
            <li>Access to local resources and traditional skills</li>
          </ul>
          <p>
            These product-based business ideas focus on essential goods that meet everyday needs, traditional products
            with modern packaging, and solutions to local challenges.
          </p>
        </div>

        <div className="mt-8 bg-gray-800 rounded p-6 border border-gray-700 shadow-2xl">
          <h3 className="text-xl font-semibold mb-6 text-white">Starting Requirements:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-xl shadow-xl border border-gray-700 hover:shadow-[0_0_12px_2px_rgba(0,150,255,0.4)] transition-all duration-300 animate-float">
              <DollarSign className="text-green-500 w-8 h-8 mb-3" />
              <h4 className="text-white font-medium mb-2">Initial Investment</h4>
              <p className="text-gray-400">Most ideas require ₹50,000 to ₹5 lakhs to start, depending on scale.</p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl shadow-xl border border-gray-700 hover:shadow-[0_0_12px_2px_rgba(0,150,255,0.4)] transition-all duration-300 animate-float">
              <Home className="text-blue-500 w-8 h-8 mb-3" />
              <h4 className="text-white font-medium mb-2">Space Requirements</h4>
              <p className="text-gray-400">Many can start from home or with small rented spaces of 100-500 sq. ft.</p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl shadow-xl border border-gray-700 hover:shadow-[0_0_12px_2px_rgba(0,150,255,0.4)] transition-all duration-300 animate-float">
              <Users className="text-purple w-8 h-8 mb-3" />
              <h4 className="text-white font-medium mb-2">Team Size</h4>
              <p className="text-gray-400">Start with 1-3 people for most ideas; scale as business grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Food & Beverage */}
      <section id="food" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <div
          className="flex items-center cursor-pointer mb-6 animate-glow rounded border border-gray-800 p-2"
          onClick={() => toggleCategory("foodCategory")}
        >
          <Utensils className="text-yellow-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-gray-200">Food & Beverage</h2>
          <ChevronDown
            className={`ml-auto text-gray-400 transition-transform duration-300 ${visibleCategories.foodCategory ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${visibleCategories.foodCategory ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="mb-4 bg-gray-800 bg-opacity-50 p-4 rounded border border-gray-700">
            <p>
              Food products offer excellent business potential in Tier 3 cities due to universal demand and strong
              cultural connection to local flavors. Many food businesses can start from a home kitchen with proper
              packaging and branding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Food Item 1 */}
            <div className="idea-card opacity-0 translate-y-2 bg-gray-800 rounded border border-gray-700 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_12px_2px_rgba(0,150,255,0.4)]">
              <div className="h-1.5 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Organic Spices & Masala Powder</h3>
                <p className="text-gray-400 mb-4">
                  Locally sourced, branded spices without preservatives or additives. Package traditional masalas in
                  attractive, reusable containers.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹50,000 - ₹1.5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Blending</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Packaging</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Marketing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Item 2 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready-to-Cook Snacks</h3>
                <p className="text-gray-400 mb-4">
                  Instant idli/dosa batter, poha, upma mixes packaged for convenience. Targets busy households looking
                  for quick meal solutions.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple to-blue-500 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹50,000 - ₹1 lakh</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Food Processing</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Packaging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Item 3 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pickles & Chutneys</h3>
                <p className="text-gray-400 mb-4">
                  Homemade mango, lemon, or mixed pickles using regional recipes. Focus on preservative-free recipes
                  with extended shelf life.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹30,000 - ₹80,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Cooking</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Preservation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Item 4 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Healthy Breakfast Cereals</h3>
                <p className="text-gray-400 mb-4">
                  Millet-based flakes, muesli, and traditional grain mixes. Promotes local grains with health-focused
                  marketing.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹1 lakh - ₹2.5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Food Processing</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Nutrition Knowledge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Item 5 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cold-Pressed Oils</h3>
                <p className="text-gray-400 mb-4">
                  Mustard, coconut, or groundnut oil using traditional extraction methods. Focus on purity and health
                  benefits as selling points.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹2 lakhs - ₹5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Oil Production</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Quality Control</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Item 6 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Traditional Sweets (Mithai)</h3>
                <p className="text-gray-400 mb-4">
                  Besan laddu, peanut chikki, and regional specialties with innovative packaging and longer shelf
                  life.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹50,000 - ₹1 lakh</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Sweet Making</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Food Preservation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-4 bg-indigo-900 bg-opacity-20 rounded border border-indigo-800">
            <h4 className="font-semibold mb-2 flex items-center">
              <LightbulbIcon className="text-yellow-500 w-5 h-5 mr-2 animate-pulse" />
              Success Tip
            </h4>
            <p>
              Focus on clean, attractive packaging that clearly displays ingredients and manufacturing dates. Partner
              with local stores and use social media to showcase your preparation process and quality ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Home & Daily Essentials */}
      <section id="home" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <div
          className="flex items-center cursor-pointer mb-6 animate-glow rounded-lg p-2"
          onClick={() => toggleCategory("homeCategory")}
        >
          <Home className="text-green-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-gray-200">Home & Daily Essentials</h2>
          <ChevronDown
            className={`ml-auto text-gray-400 transition-transform duration-300 ${visibleCategories.homeCategory ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${visibleCategories.homeCategory ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
            <p>
              Home essentials are daily-use products with consistent demand. These products solve everyday problems at
              affordable prices, making them ideal for Tier 3 markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Home Item 1 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-green-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Low-Cost Sanitary Napkins</h3>
                <p className="text-gray-400 mb-4">
                  Affordable feminine hygiene products made with local materials. Addresses a critical health need
                  while creating awareness.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹1.5 lakhs - ₹3 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Manufacturing</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Health Education</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Item 2 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-green-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ayurvedic Soaps & Shampoos</h3>
                <p className="text-gray-400 mb-4">
                  Neem, aloe vera, or herbal variants using traditional formulations. Appeals to growing natural
                  products market.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹50,000 - ₹1.5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Formulation</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Herbal Knowledge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Item 3 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-green-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mosquito Repellent Products</h3>
                <p className="text-gray-400 mb-4">
                  Coils, mats, or herbal sprays using natural ingredients. Essential in regions with mosquito-borne
                  diseases.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹1 lakh - ₹2.5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Chemical Knowledge</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Manufacturing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Item 4 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-green-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Cleaning Products</h3>
                <p className="text-gray-400 mb-4">
                  Bio-enzyme cleaners, dishwash bars made from natural ingredients. Appeals to environmentally
                  conscious consumers.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹50,000 - ₹1 lakh</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Formulation</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Eco Knowledge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Item 5 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-green-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Clay & Copper Bottles</h3>
                <p className="text-gray-400 mb-4">
                  Traditional water storage solutions with health benefits. Combines traditional wisdom with modern
                  designs.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹75,000 - ₹1.5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Craftsmanship</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-900 bg-opacity-20 rounded-lg border border-green-800">
            <h4 className="font-semibold mb-2 flex items-center">
              <LightbulbIcon className="text-yellow-500 w-5 h-5 mr-2 animate-pulse" />
              Success Tip
            </h4>
            <p>
              Create small trial packs for first-time buyers to reduce purchase barriers. Develop relationships with
              local women's groups and community organizations to promote your products.
            </p>
          </div>
        </div>
      </section>

      {/* Agriculture & Farming */}
      <section id="agriculture" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <div
          className="flex items-center cursor-pointer mb-6 animate-glow rounded-lg p-2"
          onClick={() => toggleCategory("agricultureCategory")}
        >
          <Seedling className="text-green-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-gray-200">Agriculture & Farming</h2>
          <ChevronDown
            className={`ml-auto text-gray-400 transition-transform duration-300 ${visibleCategories.agricultureCategory ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${visibleCategories.agricultureCategory ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
            <p>
              Agriculture remains the backbone of Tier 3 economies. These business ideas support local farmers with
              products that improve yields and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Agriculture Item 1 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-green-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Vermicompost & Organic Fertilizers</h3>
                <p className="text-gray-400 mb-4">
                  Eco-friendly alternatives to chemical fertilizers. Growing demand as farmers shift toward organic
                  practices.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹50,000 - ₹2 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Composting</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Agri Knowledge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agriculture Item 2 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-green-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hydroponic Farming Kits</h3>
                <p className="text-gray-400 mb-4">
                  Small-scale urban farming solutions for growing vegetables without soil. Modern solution for limited
                  space gardening.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹1 lakh - ₹3 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Hydroponics</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Technical</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion & Lifestyle */}
      <section id="fashion" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <div
          className="flex items-center cursor-pointer mb-6 animate-glow rounded-lg p-2"
          onClick={() => toggleCategory("fashionCategory")}
        >
          <Shirt className="text-pink-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-gray-200">Fashion & Lifestyle</h2>
          <ChevronDown
            className={`ml-auto text-gray-400 transition-transform duration-300 ${visibleCategories.fashionCategory ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${visibleCategories.fashionCategory ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
            <p>
              Fashion products that combine traditional craftsmanship with modern aesthetics appeal to both local and
              urban markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fashion Item 1 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-pink-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Handmade Jute Bags</h3>
                <p className="text-gray-400 mb-4">
                  Eco-friendly shopping bags as alternatives to plastic bags. Rising demand due to plastic bans in
                  many states.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹25,000 - ₹75,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Stitching</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fashion Item 2 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-pink-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ethnic Handloom Clothing</h3>
                <p className="text-gray-400 mb-4">
                  Sarees, kurtis, dhotis made with traditional weaving techniques. Preserves local crafts while
                  creating modern styles.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹1 lakh - ₹3 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Weaving</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Fashion Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Wellness */}
      <section id="health" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <div
          className="flex items-center cursor-pointer mb-6 animate-glow rounded-lg p-2"
          onClick={() => toggleCategory("healthCategory")}
        >
          <Heart className="text-red-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-gray-200">Health & Wellness</h2>
          <ChevronDown
            className={`ml-auto text-gray-400 transition-transform duration-300 ${visibleCategories.healthCategory ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${visibleCategories.healthCategory ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
            <p>
              Health products combining traditional remedies with modern packaging have strong appeal in Tier 3
              markets with limited healthcare access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Health Item 1 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-red-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ayurvedic Hair Oil</h3>
                <p className="text-gray-400 mb-4">
                  Amla, bhringraj, onion hair oil using traditional Ayurvedic recipes. Addresses common hair problems
                  with natural solutions.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹50,000 - ₹1 lakh</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Ayurveda</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Formulation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Item 2 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-red-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Herbal Pain Relief Balms</h3>
                <p className="text-gray-400 mb-4">
                  Capsaicin, eucalyptus-based balms for muscle and joint pain. Targets manual laborers and elderly
                  populations.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹75,000 - ₹1.5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Herbal Medicine</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Manufacturing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electronics & Gadgets */}
      <section id="electronics" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <div
          className="flex items-center cursor-pointer mb-6 animate-glow rounded-lg p-2"
          onClick={() => toggleCategory("electronicsCategory")}
        >
          <Phone className="text-blue-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-gray-200">Electronics & Gadgets</h2>
          <ChevronDown
            className={`ml-auto text-gray-400 transition-transform duration-300 ${visibleCategories.electronicsCategory ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${visibleCategories.electronicsCategory ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
            <p>
              Low-cost, durable electronic products designed for rural conditions and power fluctuations have strong
              market potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Electronics Item 1 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-blue-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Solar-Powered Chargers</h3>
                <p className="text-gray-400 mb-4">
                  For mobile & small devices, especially useful in areas with frequent power cuts. Solves real
                  problems in areas with inconsistent electricity.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹1 lakh - ₹2.5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Electronics</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Solar Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Electronics Item 2 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-blue-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Low-Cost Bluetooth Speakers</h3>
                <p className="text-gray-400 mb-4">
                  Affordable audio solutions with rugged designs for rural environments. Appeals to youth market with
                  growing smartphone penetration.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹2 lakhs - ₹5 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Electronics</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Audio Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids & Education */}
      <section id="education" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <div
          className="flex items-center cursor-pointer mb-6 animate-glow rounded-lg p-2"
          onClick={() => toggleCategory("educationCategory")}
        >
          <GraduationCap className="text-yellow-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-gray-200">Kids & Education</h2>
          <ChevronDown
            className={`ml-auto text-gray-400 transition-transform duration-300 ${visibleCategories.educationCategory ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${visibleCategories.educationCategory ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
            <p>
              Educational products that are affordable yet effective have strong potential in Tier 3 cities where
              parents highly value education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education Item 1 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">High Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Low-Cost STEM Toys</h3>
                <p className="text-gray-400 mb-4">
                  Science experiment kits, puzzles, and construction sets using affordable materials. Makes learning
                  fun and accessible.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹75,000 - ₹2 lakhs</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Product Design</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Education</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Handmade Wooden Toys</h3>
                <p className="text-gray-400 mb-4">
                  Eco-friendly baby products using non-toxic paints and finishes. Appeals to parents concerned about
                  plastic toys.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹50,000 - ₹1 lakh</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Woodworking</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Toy Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive & Hardware */}
      <section id="automotive" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <div
          className="flex items-center cursor-pointer mb-6 animate-glow rounded-lg p-2"
          onClick={() => toggleCategory("automotiveCategory")}
        >
          <Motorcycle className="text-red-500 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-gray-200">Automotive & Hardware</h2>
          <ChevronDown
            className={`ml-auto text-gray-400 transition-transform duration-300 ${visibleCategories.automotiveCategory ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${visibleCategories.automotiveCategory ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className="mb-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
            <p>
              Two-wheelers and agricultural equipment are essential in Tier 3 cities. Accessories and maintenance
              products for these vehicles have steady demand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Automotive Item 1 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-red-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Bicycle Accessories</h3>
                <p className="text-gray-400 mb-4">
                  Seats, baskets, repair kits for the common mode of transport. Essential for students and workers who
                  rely on bicycles.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹30,000 - ₹80,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Basic Mechanics</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automotive Item 2 */}
            <div className="idea-card opacity-0 translate-y-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="h-1.5 bg-red-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"></span>
                  <span className="text-xs text-gray-400">Medium Potential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Low-Cost Car Fresheners</h3>
                <p className="text-gray-400 mb-4">
                  Herbal & natural variants using local ingredients like lemongrass and jasmine. Appeals to growing
                  car ownership in smaller cities.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting Cost</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="h-full w-1/5 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-1000"></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">₹20,000 - ₹50,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Skills Required</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Fragrance</span>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Packaging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Ideas Work in Tier 3 Cities */}
      <section id="advantages" className="mb-16 fade-in opacity-0 translate-y-5 transition-all duration-600">
        <h2 className="text-3xl font-bold mb-8 text-gray-200">Why These Ideas Work in Tier 3 Cities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="bg-purple-600 p-3 rounded-full mr-4">
                <BarChart className="text-white w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold">Low Competition</h3>
            </div>
            <p className="text-gray-400">
              Many products need to be imported from larger cities, creating an opportunity for local producers. Being
              the first or second business in your category gives you a significant advantage.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="bg-green-600 p-3 rounded-full mr-4">
                <ShoppingCart className="text-white w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold">High Demand</h3>
            </div>
            <p className="text-gray-400">
              Essential daily-use products consistently sell well regardless of economic conditions. Focus on
              necessities rather than luxury items for steady sales.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="bg-blue-600 p-3 rounded-full mr-4">
                <DollarSign className="text-white w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold">Low-Cost Production</h3>
            </div>
            <p className="text-gray-400">
              Raw materials are often easily available locally at lower costs. Lower rent and labor costs compared to
              metro cities help maintain healthy profit margins.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-600 p-3 rounded-full mr-4">
                <ArrowsExpand className="text-white w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold">Scalable</h3>
            </div>
            <p className="text-gray-400">
              Start small and expand to nearby towns and villages as your business grows. Many businesses can begin
              from home before moving to dedicated facilities.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Getting Started Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <ClipboardList className="text-yellow-400 w-5 h-5 mr-2" />
                Market Research
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span>Identify local needs and gaps in the market</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span>Study existing products and their pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span>Talk to potential customers about their preferences</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <LightbulbIcon className="text-yellow-400 w-5 h-5 mr-2" />
                Start Small
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span>Begin with 2-3 product variants to test the market</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span>Use home-based production initially if possible</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span>Reinvest profits to scale gradually</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <style>{`
      .fade-in.active {
        opacity: 1;
        transform: translateY(0);
      }
      
      ::-webkit-scrollbar {
        width: 8px;
        background-color: #1e1e1e;
      }
      
      ::-webkit-scrollbar-thumb {
        background-color: #3d3d3d;
        border-radius: 4px;
      }

      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(6px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      .animate-float {
        animation: float 4s ease-in-out infinite;
      }

      @keyframes glow {
        0% {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        }
        50% {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        100% {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        }
      }

      .animate-glow {
        animation: glow 3s ease-in-out infinite;
      }
    `}</style>
  </div>
  )
}