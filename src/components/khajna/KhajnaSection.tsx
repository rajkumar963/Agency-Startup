"use client"

import { useEffect, useRef, useState } from "react"
import { Shuffle } from "lucide-react"
// import { loadFull } from "tsparticles"
// import { tsParticles } from "tsparticles-engine"

// Types
interface StartupIdea {
  title: string
  description: string
  budget: string
}

// Data
const lowBudgetIdeas: StartupIdea[] = [
  {
    title: "Homemade Spice Blends",
    description: "Handcrafted, preservative-free spice blends targeting home chefs and health-conscious consumers.",
    budget: "₹50,000 - ₹80,000",
  },
  {
    title: "DIY Kombucha Kits",
    description: "Ready-to-brew kits for health enthusiasts to make gut-friendly kombucha at home.",
    budget: "₹60,000 - ₹90,000",
  },
  {
    title: "Eco-Friendly Cleaning Concentrates",
    description: "Concentrated cleaning solutions in recyclable packaging that reduce plastic waste.",
    budget: "₹70,000 - ₹95,000",
  },
  {
    title: "Handmade Bath Bombs",
    description: "Artisanal bath bombs with natural ingredients and essential oils.",
    budget: "₹40,000 - ₹70,000",
  },
  {
    title: "Subscription Snack Boxes",
    description: "Curated boxes of locally-sourced snacks delivered monthly to subscribers.",
    budget: "₹80,000 - ₹95,000",
  },
  {
    title: "Digital Recipe Cards",
    description: "Pre-packaged ingredient kits with QR code-enabled recipe instructions.",
    budget: "₹50,000 - ₹80,000",
  },
  {
    title: "Herbal Tea Blends",
    description: "Custom tea blends targeting specific wellness benefits.",
    budget: "₹60,000 - ₹90,000",
  },
  {
    title: "Zero-Waste Kitchen Supplies",
    description: "Biodegradable kitchen items like scrubbers and dishcloths.",
    budget: "₹70,000 - ₹95,000",
  },
  {
    title: "Personalized Pet Treats",
    description: "Natural, preservative-free treats for pets with health conditions.",
    budget: "₹60,000 - ₹85,000",
  },
  {
    title: "Artisanal Candles",
    description: "Hand-poured candles using sustainable soy wax and essential oils.",
    budget: "₹40,000 - ₹75,000",
  },
  {
    title: "Digital Meal Planners",
    description: "Subscription-based meal planning service with shopping lists.",
    budget: "₹30,000 - ₹60,000",
  },
  {
    title: "DIY Skincare Kits",
    description: "At-home facial and skincare kits with natural ingredients.",
    budget: "₹50,000 - ₹80,000",
  },
  {
    title: "Upcycled Packaging Products",
    description: "Consumer goods packaged in creatively reused materials.",
    budget: "₹60,000 - ₹90,000",
  },
  {
    title: "Microgreens Grow Kits",
    description: "Simple indoor kits to grow nutrient-rich microgreens at home.",
    budget: "₹40,000 - ₹70,000",
  },
  {
    title: "Digital Cooking Classes",
    description: "Subscription-based online cooking classes with ingredient boxes.",
    budget: "₹80,000 - ₹95,000",
  },
  {
    title: "Natural Air Fresheners",
    description: "Chemical-free, plant-based air fresheners using essential oils.",
    budget: "₹50,000 - ₹75,000",
  },
  {
    title: "Handcrafted Soaps",
    description: "Small-batch artisanal soaps using local ingredients.",
    budget: "₹40,000 - ₹70,000",
  },
  {
    title: "Sustainable Gift Wrapping",
    description: "Eco-friendly, reusable gift packaging made from recycled materials.",
    budget: "₹30,000 - ₹60,000",
  },
  {
    title: "Home Composting Kits",
    description: "Easy-to-use composting systems for urban households.",
    budget: "₹70,000 - ₹95,000",
  },
  {
    title: "Local Honey Distribution",
    description: "Packaging and selling locally-sourced, raw honey varieties.",
    budget: "₹60,000 - ₹90,000",
  },
  {
    title: "Reusable Food Wraps",
    description: "Beeswax or plant-based alternatives to plastic food wrap.",
    budget: "₹50,000 - ₹80,000",
  },
  {
    title: "Digital Wellness Packages",
    description: "Curated boxes of wellness products with online support.",
    budget: "₹80,000 - ₹99,000",
  },
  {
    title: "Homemade Nut Butters",
    description: "Custom blended nut butters without additives or preservatives.",
    budget: "₹60,000 - ₹90,000",
  },
  {
    title: "Plant-Based Milk Kits",
    description: "DIY kits for making almond, oat, and other plant milks at home.",
    budget: "₹50,000 - ₹85,000",
  },
  {
    title: "Children's Eco-Friendly Craft Supplies",
    description: "Non-toxic, sustainable art supplies for kids.",
    budget: "₹70,000 - ₹95,000",
  },
  {
    title: "Subscription Herb Boxes",
    description: "Monthly delivery of fresh culinary herbs and educational content.",
    budget: "₹60,000 - ₹90,000",
  },
  {
    title: "Natural Insect Repellents",
    description: "Chemical-free bug sprays and repellents using essential oils.",
    budget: "₹50,000 - ₹80,000",
  },
  {
    title: "Zero-Waste Bathroom Kits",
    description: "Starter kits for plastic-free bathroom essentials.",
    budget: "₹70,000 - ₹95,000",
  },
  {
    title: "Vegan Baking Mixes",
    description: "Pre-measured dry ingredients for plant-based baked goods.",
    budget: "₹60,000 - ₹85,000",
  },
  {
    title: "Mood-Enhancing Scent Diffusers",
    description: "Essential oil diffusers with carefully blended scents for specific moods.",
    budget: "₹50,000 - ₹80,000",
  },
  {
    title: "Menstrual Cups and Period Care",
    description: "Sustainable menstrual products with educational resources.",
    budget: "₹80,000 - ₹99,000",
  },
  {
    title: "Home Fermentation Kits",
    description: "Supplies and instructions for making fermented foods at home.",
    budget: "₹60,000 - ₹90,000",
  },
  {
    title: "Bio-Enzyme Cleaning Kits",
    description: "DIY kits to make eco-friendly cleaning solutions from fruit scraps.",
    budget: "₹40,000 - ₹70,000",
  },
  {
    title: "Specialty Coffee Subscriptions",
    description: "Curated single-origin coffee beans delivered to subscribers.",
    budget: "₹80,000 - ₹99,000",
  },
  {
    title: "Artisanal Vinegars and Infused Oils",
    description: "Small-batch specialty condiments for home cooks.",
    budget: "₹60,000 - ₹90,000",
  },
]

const midBudgetIdeas: StartupIdea[] = [
  {
    title: "Functional Beverages",
    description: "Drinks enhanced with adaptogens, nootropics, or other beneficial compounds.",
    budget: "₹3,00,000 - ₹5,00,000",
  },
  {
    title: "Plant-Based Meat Alternatives",
    description: "Innovative meat substitutes made from local ingredients.",
    budget: "₹5,00,000 - ₹8,00,000",
  },
  {
    title: "Smart Packaging Solutions",
    description: "Interactive packaging with QR codes that share product information.",
    budget: "₹2,00,000 - ₹4,00,000",
  },
  {
    title: "Personalized Nutrition Products",
    description: "Customized supplements based on individual health profiles.",
    budget: "₹4,00,000 - ₹7,00,000",
  },
  {
    title: "AI-Curated Meal Kits",
    description: "Meal kits tailored by AI to match dietary preferences and nutritional needs.",
    budget: "₹3,00,000 - ₹6,00,000",
  },
  {
    title: "Biodegradable Beauty Packaging",
    description: "Cosmetics in packaging that breaks down completely after use.",
    budget: "₹2,50,000 - ₹5,00,000",
  },
  {
    title: "Local Artisanal Food Marketplace",
    description: "Platform connecting local food artisans with consumers.",
    budget: "₹3,00,000 - ₹5,00,000",
  },
  {
    title: "Smart Home Consumables",
    description: "Products that integrate with smart home systems for automatic reordering.",
    budget: "₹5,00,000 - ₹8,00,000",
  },
  {
    title: "Adaptogen-Infused Snacks",
    description: "Stress-reducing snacks containing adaptogens and superfoods.",
    budget: "₹2,00,000 - ₹4,50,000",
  },
  {
    title: "Kid-Focused Functional Foods",
    description: "Nutritionally optimized snacks and meals for children's development.",
    budget: "₹3,00,000 - ₹6,00,000",
  },
  {
    title: "Premium Pet Food Subscription",
    description: "Customized, high-quality pet food delivered on schedule.",
    budget: "₹4,00,000 - ₹7,00,000",
  },
  {
    title: "Sustainable Personal Care Products",
    description: "Zero-waste personal hygiene items in plastic-free packaging.",
    budget: "₹2,50,000 - ₹5,00,000",
  },
  {
    title: "Mindful Eating Tech",
    description: "Smart dinnerware that encourages mindful eating habits.",
    budget: "₹5,00,000 - ₹9,00,000",
  },
  {
    title: "Local Craft Alcohol Brand",
    description: "Small-batch spirits using locally-sourced ingredients.",
    budget: "₹7,00,000 - ₹10,00,000",
  },
  {
    title: "Probiotic-Enhanced Foods",
    description: "Everyday food items enhanced with beneficial bacteria.",
    budget: "₹3,00,000 - ₹6,00,000",
  },
  {
    title: "Plant-Based Baby Food",
    description: "Organic, plant-focused baby food in recyclable packaging.",
    budget: "₹4,00,000 - ₹7,00,000",
  },
  {
    title: "Mood-Enhancing Food Products",
    description: "Foods formulated to boost specific mood states using natural ingredients.",
    budget: "₹3,50,000 - ₹6,50,000",
  },
  {
    title: "Traditional Wellness Formulations",
    description: "Products based on Ayurvedic or traditional medicine principles.",
    budget: "₹2,50,000 - ₹5,00,000",
  },
  {
    title: "Customizable Household Cleaners",
    description: "Base cleaning solutions with add-in concentrates for personalization.",
    budget: "₹2,00,000 - ₹4,00,000",
  },
  {
    title: "Ethical Chocolate Production",
    description: "Bean-to-bar chocolate with transparent sourcing.",
    budget: "₹3,00,000 - ₹6,00,000",
  },
  {
    title: "Digital Nutritionist Services",
    description: "Personalized nutrition guidance with product recommendations.",
    budget: "₹1,50,000 - ₹3,50,000",
  },
  {
    title: "Functional Chewing Gum",
    description: "Gum with added benefits like energy boosting or teeth whitening.",
    budget: "₹2,50,000 - ₹5,00,000",
  },
  {
    title: "Alternative Flour Products",
    description: "Baking mixes using climate-resilient ancient grains.",
    budget: "₹2,00,000 - ₹4,00,000",
  },
  {
    title: "AI Shopping Assistant",
    description: "App that recommends FMCG products based on preferences and usage patterns.",
    budget: "₹3,00,000 - ₹6,00,000",
  },
  {
    title: "Sustainable Period Products",
    description: "Eco-friendly menstrual products with subscription options.",
    budget: "₹2,50,000 - ₹5,00,000",
  },
  {
    title: "Hybrid Retail Model",
    description: "Digital-first FMCG brand with strategic physical touchpoints.",
    budget: "₹5,00,000 - ₹9,00,000",
  },
  {
    title: "Frozen Smoothie Packs",
    description: "Ready-to-blend nutritional smoothie ingredients in compostable packaging.",
    budget: "₹3,00,000 - ₹6,00,000",
  },
  {
    title: "Premium Home Fragrances",
    description: "Luxury scent products with sustainable refill options.",
    budget: "₹2,50,000 - ₹5,00,000",
  },
  {
    title: "Upcycled Food Products",
    description: "Foods made from ingredients that would otherwise be wasted.",
    budget: "₹2,00,000 - ₹4,50,000",
  },
  {
    title: "Personalized Hair Care",
    description: "Custom formulated hair products based on individual hair analysis.",
    budget: "₹4,00,000 - ₹8,00,000",
  },
  {
    title: "Indoor Gardening Systems",
    description: "Smart systems for growing herbs and vegetables at home.",
    budget: "₹5,00,000 - ₹9,00,000",
  },
  {
    title: "Immune-Supporting Food Line",
    description: "Products specifically formulated to boost immune function.",
    budget: "₹3,00,000 - ₹6,00,000",
  },
  {
    title: "Senior-Focused FMCG Products",
    description: "Easy-open packaging and formulations for older adults.",
    budget: "₹2,50,000 - ₹5,50,000",
  },
  {
    title: "Sustainable Pet Care Line",
    description: "Eco-friendly pet products with compostable packaging.",
    budget: "₹3,50,000 - ₹7,00,000",
  },
  {
    title: "Fermented Food Products",
    description: "Traditional fermentation methods applied to modern convenience foods.",
    budget: "₹2,00,000 - ₹5,00,000",
  },
]

const highBudgetIdeas: StartupIdea[] = [
  {
    title: "Blockchain-Verified Supply Chain",
    description: "FMCG products with blockchain tracking from source to consumer.",
    budget: "₹15,00,000 - ₹25,00,000",
  },
  {
    title: "Lab-Grown Food Alternatives",
    description: "Cultivated meat or dairy alternatives produced sustainably.",
    budget: "₹50,00,000 - ₹1,00,00,000",
  },
  {
    title: "Personalized Nutrition Factory",
    description: "Automated production facility for individualized nutritional products.",
    budget: "₹30,00,000 - ₹60,00,000",
  },
  {
    title: "Sustainable Packaging Innovation",
    description: "R&D center developing next-gen biodegradable packaging solutions.",
    budget: "₹25,00,000 - ₹50,00,000",
  },
  {
    title: "Home Biotech Kits",
    description: "Consumer biotech products for personalized health monitoring.",
    budget: "₹20,00,000 - ₹40,00,000",
  },
  {
    title: "Virtual Reality Shopping Experience",
    description: "FMCG brand with immersive VR shopping environments.",
    budget: "₹15,00,000 - ₹30,00,000",
  },
  {
    title: "Automated Micro-Factory",
    description: "Small-scale automated production of personalized consumer goods.",
    budget: "₹40,00,000 - ₹80,00,000",
  },
  {
    title: "3D-Printed Food Products",
    description: "Custom-designed food items created through 3D printing technology.",
    budget: "₹30,00,000 - ₹60,00,000",
  },
  {
    title: "Carbon-Negative Product Line",
    description: "FMCG products that remove more carbon than they produce.",
    budget: "₹20,00,000 - ₹40,00,000",
  },
  {
    title: "AI-Enhanced Product Development",
    description: "Using artificial intelligence to create optimized consumer products.",
    budget: "₹25,00,000 - ₹50,00,000",
  },
  {
    title: "Robotic Retail Experience",
    description: "Automated store concept for FMCG products with zero human contact.",
    budget: "₹50,00,000 - ₹1,00,00,000",
  },
  {
    title: "Precision Fermentation Facility",
    description: "Production of animal-free proteins through precision fermentation.",
    budget: "₹70,00,000 - ₹1,50,00,000",
  },
  {
    title: "Circular Economy Retail Model",
    description: "FMCG retail system with complete product lifecycle management.",
    budget: "₹30,00,000 - ₹60,00,000",
  },
  {
    title: "Smart Consumption Tracking",
    description: "IoT-enabled products that monitor usage and auto-replenish.",
    budget: "₹25,00,000 - ₹50,00,000",
  },
  {
    title: "Digital Twin Manufacturing",
    description: "FMCG production using digital twin technology for optimization.",
    budget: "₹40,00,000 - ₹80,00,000",
  },
  {
    title: "Neuromarketing-Designed Products",
    description: "Consumer goods developed using neuroscience and psychology insights.",
    budget: "₹20,00,000 - ₹40,00,000",
  },
  {
    title: "Environmental Impact Exchange",
    description: "Platform for trading environmental credits tied to FMCG consumption.",
    budget: "₹15,00,000 - ₹30,00,000",
  },
  {
    title: "Molecular Gastronomy Product Line",
    description: "Consumer versions of molecular gastronomy techniques for home use.",
    budget: "₹20,00,000 - ₹40,00,000",
  },
  {
    title: "Climate-Resilient Food Systems",
    description: "FMCG brand focused on ingredients adapted to climate change.",
    budget: "₹30,00,000 - ₹60,00,000",
  },
  {
    title: "Quantum Computing Supply Chain",
    description: "Using quantum computing to optimize FMCG logistics and production.",
    budget: "₹50,00,000 - ₹1,00,00,000",
  },
  {
    title: "Biomanufacturing Platform",
    description: "Creating consumer goods through engineered biological systems.",
    budget: "₹60,00,000 - ₹1,20,00,000",
  },
  {
    title: "Augmented Reality Product Experiences",
    description: "FMCG products with AR experiences built into packaging.",
    budget: "₹25,00,000 - ₹50,00,000",
  },
  {
    title: "Autonomous Delivery System",
    description: "Self-driving vehicles for FMCG last-mile delivery.",
    budget: "₹40,00,000 - ₹80,00,000",
  },
  {
    title: "Digital Sensory Labs",
    description: "Research facility for digital taste and smell product development.",
    budget: "₹35,00,000 - ₹70,00,000",
  },
  {
    title: "Synthetic Biology Ingredients",
    description: "Developing novel food and personal care ingredients through bioengineering.",
    budget: "₹50,00,000 - ₹1,00,00,000",
  },
  {
    title: "Space-Optimized FMCG",
    description: "Products designed for maximum efficiency in limited living spaces.",
    budget: "₹15,00,000 - ₹30,00,000",
  },
  {
    title: "Voice-Commerce Platform",
    description: "Voice-activated shopping system specialized for FMCG products.",
    budget: "₹20,00,000 - ₹40,00,000",
  },
  {
    title: "Nanotechnology Personal Care",
    description: "Skincare and cosmetics using nanotechnology for enhanced performance.",
    budget: "₹40,00,000 - ₹80,00,000",
  },
  {
    title: "Edible Packaging Systems",
    description: "Food products in completely edible or dissolvable packaging.",
    budget: "₹30,00,000 - ₹60,00,000",
  },
  {
    title: "Future-Forward Food Lab",
    description: "R&D facility dedicated to developing next-generation sustainable nutrition.",
    budget: "₹50,00,000 - ₹1,00,00,000",
  },
]

// Props interfaces
interface StartupCardProps {
  idea: StartupIdea
  budgetType: "low" | "mid" | "high"
  isFloating: boolean
}

interface BudgetSectionProps {
  id: string
  title: string
  description: string
  ideas: StartupIdea[]
  budgetType: "low" | "mid" | "high"
  isFloating: (title: string, index: number) => boolean
  onShuffle: () => void
}

// Startup Card Component
function StartupCard({ idea, budgetType, isFloating }: StartupCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const borderColors = {
    low: "border-t-[3px] border-t-[#00c896]",
    mid: "border-t-[3px] border-t-[#ff7846]",
    high: "border-t-[3px] border-t-[#4d79ff]",
  }

  const tagColors = {
    low: "bg-[rgba(0,200,150,0.15)] text-[#00c896]",
    mid: "bg-[rgba(255,120,70,0.15)] text-[#ff7846]",
    high: "bg-[rgba(77,121,255,0.15)] text-[#4d79ff]",
  }

  const floatingAnimation = isFloating ? "animate-floating" : ""

  return (
    <div
      className={`bg-[#1e1e1e] rounded-lg overflow-hidden transition-all duration-300 h-full border border-[rgba(255,255,255,0.05)] ${borderColors[budgetType]} ${floatingAnimation} ${
        isHovered ? "bg-[#2d2d2d] -translate-y-2 shadow-xl z-10" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 border-b border-[rgba(255,255,255,0.05)]">
        <h3 className="text-xl font-semibold">{idea.title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-300">{idea.description}</p>
      </div>
      <div className="p-3 bg-[rgba(0,0,0,0.2)]">
        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${tagColors[budgetType]}`}>
          {idea.budget}
        </span>
      </div>
    </div>
  )
}

// Budget Section Component
function BudgetSection({ id, title, description, ideas, budgetType, isFloating, onShuffle }: BudgetSectionProps) {
  const headerClasses = {
    low: "bg-gradient-to-r from-[#00c896] to-transparent pl-5 border-l-[5px] border-[#00c896] rounded px-3 ",
    mid: "bg-gradient-to-r from-[#ff7846] to-transparent pl-5 border-l-[5px] border-[#ff7846] rounded px-3 ",
    high: "bg-gradient-to-r from-[#4d79ff] to-transparent pl-5 border-l-[5px] border-[#4d79ff] rounded px-3",
  }

  return (
    <section id={id} className="mb-20">
      <div className={`${headerClasses[budgetType]} mb-10 py-3 flex justify-between items-center`}>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-200 mt-2 ">{description}</p>
        </div>
        <button
          onClick={onShuffle}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Shuffle ideas"
        >
          <Shuffle className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500 ">
        {ideas.map((idea, index) => (
          <StartupCard 
            key={`${idea.title}-${index}`}
            idea={idea}
            budgetType={budgetType}
            isFloating={isFloating(idea.title, index)}
          />
        ))}
      </div>
    </section>
  )
}

// Particles Background Component
function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initParticles = async () => {
     // await loadFull(tsParticles)

      try {
        await tsParticles.load("particles-js", {
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 },
            },
            color: { value: ["#00c896", "#ff7846", "#4d79ff"] },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
            },
            opacity: { value: 0.1 },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#333333",
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: { opacity: 0.3 },
              },
              push: { particles_nb: 3 },
            },
          },
          retina_detect: true,
        })
      } catch (error) {
        console.error("Failed to initialize particles:", error)
      }
    }

    initParticles()
  }, [])

  return <div id="particles-js" ref={containerRef} className="fixed w-full h-full top-0 left-0 -z-10"></div>
}

// Startup Ideas Header Component
function StartupIdeasHeader() {
  const [fadeIn, setFadeIn] = useState(false)
  const [fadeInDelay1, setFadeInDelay1] = useState(false)
  const [fadeInDelay2, setFadeInDelay2] = useState(false)

  useEffect(() => {
    setFadeIn(true)
    const timer1 = setTimeout(() => setFadeInDelay1(true), 500)
    const timer2 = setTimeout(() => setFadeInDelay2(true), 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <header className="bg-gray-900 py-16 px-4 text-center mt-10 border border-gray-800 rounded">
      <h1
        className={`gradient-text text-4xl font-bold mb-4 transform transition-all duration-1000 ${
          fadeIn ? "translate-y-0 opacity-100" : "translate-y-[-20px] opacity-0"
        }`}
      >
        Top 100 Trending FMCG Startup Ideas
      </h1>
      <p
        className={`text-xl text-gray-300 transition-opacity duration-1000 ${
          fadeInDelay1 ? "opacity-100" : "opacity-0"
        }`}
      >
        Kickstart Your Business in 2025
      </p>
      <div
        className={`flex justify-center mt-8 space-x-4 transition-all duration-1000 ${
          fadeInDelay2 ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
        }`}
      >
        <span className="px-4 py-2 bg-green-500 bg-opacity-20 rounded-full text-green-400">Low Budget</span>
        <span className="px-4 py-2 bg-yellow-500 bg-opacity-20 rounded-full text-yellow-400">Mid Budget</span>
        <span className="px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full text-blue-400">High Budget</span>
      </div>
    </header>
  )
}

// Footer Component
// function Footer() {
//   return (
//     <footer className="bg-gray-900 py-10 px-4 text-center">
//       <p className="text-gray-400 mb-3">Top 100 Trending FMCG Startup Ideas to Kickstart in 2025</p>
//       <p className="text-gray-500 text-sm">© 2025 All Rights Reserved</p>
//     </footer>
//   )
// }

// Main Component - Single export
export default function KhajnaSection() {
  const [shuffledLowBudget, setShuffledLowBudget] = useState(lowBudgetIdeas)
  const [shuffledMidBudget, setShuffledMidBudget] = useState(midBudgetIdeas)
  const [shuffledHighBudget, setShuffledHighBudget] = useState(highBudgetIdeas)
  const [floatingCards, setFloatingCards] = useState<Record<string, boolean>>({})

  // Function to shuffle an array
  const shuffleArray = (array: any[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Function to shuffle a specific section
  const shuffleSection = (section: string) => {
    if (section === "low") {
      setShuffledLowBudget(shuffleArray(shuffledLowBudget))
    } else if (section === "mid") {
      setShuffledMidBudget(shuffleArray(shuffledMidBudget))
    } else if (section === "high") {
      setShuffledHighBudget(shuffleArray(shuffledHighBudget))
    }
  }

  // Apply floating animation to random cards
  const applyFloatingAnimation = () => {
    const newFloatingCards: Record<string, boolean> = {}
    const allIdeas = [...lowBudgetIdeas, ...midBudgetIdeas, ...highBudgetIdeas]
    const totalCards = allIdeas.length
    const cardsToAnimate = Math.floor(totalCards * 0.3) // Animate 30% of cards

    for (let i = 0; i < cardsToAnimate; i++) {
      const randomIndex = Math.floor(Math.random() * totalCards)
      const idea = allIdeas[randomIndex]
      if (idea) {
        newFloatingCards[`${idea.title}-${randomIndex}`] = true
      }
    }

    setFloatingCards(newFloatingCards)
  }

  // Set up intervals for animations
  useEffect(() => {
    applyFloatingAnimation()

    const shuffleInterval = setInterval(() => {
      const random = Math.random()
      if (random < 0.33) {
        shuffleSection("low")
      } else if (random < 0.66) {
        shuffleSection("mid")
      } else {
        shuffleSection("high")
      }
    }, 8000) // Shuffle every 8 seconds

    const floatingInterval = setInterval(() => {
      applyFloatingAnimation()
    }, 6000) // Change floating cards every 6 seconds

    return () => {
      clearInterval(shuffleInterval)
      clearInterval(floatingInterval)
    }
  }, [])

  const isFloating = (title: string, index: number) => {
    return floatingCards[`${title}-${index}`] || false
  }

  return (
    <div className="min-h-screen bg-gradient-radial pt-16 text-white font-sans overflow-x-hidden px-4">
      <ParticlesBackground />

      <StartupIdeasHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Low Budget Section */}
        <BudgetSection
          id="low-budget"
          title="Low Budget Ideas (Below ₹1L)"
          description="Perfect for entrepreneurs starting with minimal capital"
          ideas={shuffledLowBudget}
          budgetType="low"
          isFloating={isFloating}
          onShuffle={() => shuffleSection("low")}
        />

        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#00c896] to-transparent my-12"></div>

        {/* Mid Budget Section */}
        <BudgetSection
          id="mid-budget"
          title="Mid Budget Ideas (₹1L - ₹10L)"
          description="For entrepreneurs ready to scale with moderate investment"
          ideas={shuffledMidBudget}
          budgetType="mid"
          isFloating={isFloating}
          onShuffle={() => shuffleSection("mid")}
        />

        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#ff7846] to-transparent my-12"></div>

        {/* High Budget Section */}
        <BudgetSection
          id="high-budget"
          title="High Budget Ideas (Above ₹10L)"
          description="Ambitious ventures requiring significant capital investment"
          ideas={shuffledHighBudget}
          budgetType="high"
          isFloating={isFloating}
          onShuffle={() => shuffleSection("high")}
        />
      </main>
    </div>
  )
}

