import React from "react"
import { useEffect, useRef, useState } from "react"
import {
  Bolt,
  BookOpen,
  Brain,
  LineChartIcon as ChartLine,
  Globe,
  Hammer,
  Headphones,
  Layers,
  Leaf,
  Lightbulb,
  PuzzleIcon as PuzzlePiece,
  Rocket,
  Search,
  DollarSignIcon as SearchDollar,
  Shield,
  SlidersHorizontal,
  FolderSyncIcon as Sync,
  PenToolIcon as Tool,
  SquareIcon as WaveSquare,
  Wrench,
  GlassWaterIcon as Water,
  ArrowDown,
} from "lucide-react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js"
import { Doughnut } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, Title)

export default function BusinessesIdeas() {
  const [activeReveals, setActiveReveals] = useState<{ [key: string]: boolean }>({})
  const revealRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const elementVisible = 120

      revealRefs.current.forEach((el, index) => {
        if (!el) return

        const elementTop = el.getBoundingClientRect().top
        if (elementTop < windowHeight - elementVisible) {
          setActiveReveals((prev) => ({ ...prev, [index]: true }))
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    setTimeout(handleScroll, 300)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Chart data
  const chartData = {
    labels: [
      "Personal Pain",
      "Market Gaps",
      "Emerging Trends",
      "Skills/Passions",
      "User Complaints",
      "Copy/Improve",
      "Collaboration",
    ],
    datasets: [
      {
        data: [27, 18, 13, 11, 8, 7, 5],
        backgroundColor: ["#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#3b82f6", "#ec4899", "#14b8a6"],
        borderColor: "#22223c",
        borderWidth: 2,
        borderRadius: 10,
      },
    ],
  }

  // const chartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "bottom" as const,
  //       labels: {
  //         color: "#a5b4fc",
  //         font: {
  //           size: 13,
  //           family: "Roboto, sans-serif",
  //         },
  //       },
  //     },
  //     title: {
  //       display: true,
  //       text: "How Founders Spark New Ideas",
  //       color: "#5eead4",
  //       font: {
  //         size: 15,
  //         weight: "bold",
  //         family: "Roboto, sans-serif",
  //       },
  //       padding: {
  //         top: 16,
  //         bottom: 10,
  //       },
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  //   cutout: "45%",
  // }

  return (
    <div className="bg-gray-900 overflow-x-hidden text-gray-100 font-sans mt-16" style={{ scrollBehavior: "smooth" }}>
      {/* HEADER */}
      <header className="w-full px-4 pt-12 pb-4 md:pb-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2 drop-shadow-lg bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
          Actionable Ways to Uncover Business Ideas <br />
          <span className="text-xl md:text-2xl font-semibold text-blue-300 block mt-3">with AI Prompts</span>
        </h1>
        <div className="flex items-center justify-center mt-6 mb-2 flex-wrap gap-1">
          <Bolt className="text-cyan-400 mx-1" size={24} />
          <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
            ChatGPT
          </span>
          <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
            Gemini
          </span>
          <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
            DeepResearch
          </span>
          <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
            DeepSeek
          </span>
          <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
            Perplexity
          </span>
          <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
            and more
          </span>
          <Bolt className="text-cyan-400 mx-1" size={24} />
        </div>
        <div className="mt-4">
          <span className="text-gray-300 text-lg mx-auto font-normal max-w-[860px] block">
            Discover creative, practical ways to find and validate startup ideas using smart AI tools.
          </span>
        </div>
        <div className="flex items-center justify-center mt-8 animate-bounce">
          <ArrowDown className="text-green-300 drop-shadow-lg" size={32} />
        </div>
      </header>

      {/* Chart Section */}
      <div className="max-w-[330px] h-[230px] mx-auto my-8 bg-[rgba(25,45,75,0.78)] rounded-3xl shadow-xl p-4">
        <Doughnut data={chartData} />
      </div>

      {/* WHAT ARE AI TOOLS FOR BUSINESS */}
      <section className="bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-10 mx-auto max-w-[980px] opacity-0 transform translate-y-8 animate-[fadeInUp_1s_forwards_0.2s]">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
          <Lightbulb className="inline mr-3" />
          How AI Tools Power Startup Discovery
        </h2>
        <p className="text-lg text-gray-300 mb-3">
          AI research &amp; conversation engines like <span className="font-semibold text-cyan-300">Gemini</span>,{" "}
          <span className="font-semibold text-purple-300">ChatGPT</span>,{" "}
          <span className="font-semibold text-green-300">DeepSeek</span>, and others are like supercharged assistants
          for finding and growing new business ideas.
        </p>
        <ul className="list-none text-base space-y-1">
          <li>
            <Search className="inline text-cyan-400 mr-2" size={16} /> Spot market gaps and rising trends, fast
          </li>
          <li>
            <Brain className="inline text-pink-400 mr-2" size={16} /> Help you analyze massive data, pain points, and
            feedback
          </li>
          <li>
            <PuzzlePiece className="inline text-yellow-300 mr-2" size={16} /> Brainstorm unique solutions from your
            personal skills & interests
          </li>
          <li>
            <ChartLine className="inline text-green-400 mr-2" size={16} /> Size up competitors, customer needs, and
            market size
          </li>
          <li>
            <Rocket className="inline text-purple-400 mr-2" size={16} /> Fast-track validation with custom surveys and
            feedback
          </li>
          <li>
            <Tool className="inline text-blue-400 mr-2" size={16} /> Build strong go-to-market & business models
          </li>
        </ul>
        <div className="mt-6 text-sm text-gray-400 italic">
          AI isn&apos;t just for &quot;tech people&quot; — it&apos;s for anyone hungry to uncover their next big
          business move.
          <br />
          Scroll on for a visual, step-by-step AI-powered journey.
        </div>
      </section>

      {/* MAIN CONTENT FLOW USING TIMELINE & TABS */}
      <section className="mx-auto max-w-[1120px]">
        <div className="flex flex-col md:flex-row">
          <div className="timeline-bar md:mr-8 md:ml-5 hidden md:block w-[2px] min-h-[60px] bg-gradient-to-b from-[#07e7c9] to-[#6568fa]"></div>
          <div className="flex-1">
            {/* Phase 1 */}
            <div className="mb-5">
              <span className="inline-block mb-3 mr-3 align-middle w-[22px] h-[22px] rounded-full bg-gradient-to-r from-[#00F260] to-[#0575E6] shadow-[0_0_12px_6px_rgba(0,204,255,0.19)] border-2 border-[#0ff1ce]"></span>
              <h2 className="bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent text-xl md:text-2xl font-bold inline-block align-middle">
                PHASE 1: Discovering Opportunities
              </h2>
              <p className="text-gray-400 mt-1 mb-5 ml-8">
                Here&apos;s the creative toolkit: Try one or mix a few. AI makes these 10x easier!
              </p>
            </div>

            {/* 1. Solve a Personal Problem */}
            <div
              ref={(el) => (revealRefs.current[0] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 max-w-[1000px] ${activeReveals[0] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Shield className="text-yellow-300 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    1. Solve a Personal Problem
                  </h3>
                  <div className="mb-2 text-gray-300 text-base">
                    <span className="font-medium text-yellow-200">Your everyday headaches = business gold.</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>
                        Jot down annoyances in a <span className="text-green-300 font-bold">Problem Journal</span>
                      </li>
                      <li>
                        Dig. Ask <span className="font-bold text-green-300">&quot;Why?&quot;</span> five times (root
                        cause style!)
                      </li>
                      <li>Sketch out how users move through the pain</li>
                      <li>Check it&apos;s real—run a survey (ask at least 30 people!)</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt for ChatGPT / Gemini / DeepSeek:
                    </span>
                    <br />
                    I&apos;m documenting personal problems that might become business opportunities. I&apos;ve
                    identified this: <br />
                    <code className="bg-[#1e293b] text-[#9ef3c4] rounded-[.45em] px-2 py-1 font-mono text-[0.93em]">
                      [Describe the problem in detail...etc]
                    </code>
                    <br />
                    <br />
                    Please help me assess by:
                    <br />
                    1. Estimating market size
                    <br />
                    2. Listing existing solutions + limits
                    <br />
                    3. Suggesting new, better approaches
                    <br />
                    4. Outlining what research I should do
                    <br />
                    5. Drafting 5-7 good user survey questions
                    <br />
                    6. Spotting potential revenue models
                    <br />
                    Also, rate this opportunity (1-10) for:
                    <br />- Problem severity
                    <br />- Solution urgency
                    <br />- Market size
                    <br />- Feasibility
                    <br />- Competitive edge
                    <br />- Revenue clarity
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Leverage Your Skills and Experience */}
            <div
              ref={(el) => (revealRefs.current[1] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[1] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Hammer className="text-green-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    2. Leverage Your Skills &amp; Experience
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-green-200">
                      Put your unique combo of skills, stories &amp; passions on blast.
                    </span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>
                        <strong>Map skills</strong>: Professional, industry, hobby
                      </li>
                      <li>Arrange into &quot;Value vs Enjoyment&quot; chart</li>
                      <li>Brainstorm ways to get paid sharing or building on those skills</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt for DeepSeek / Perplexity:
                    </span>
                    <br />I want to build a business with my skills.
                    <br />
                    Here&apos;s my background:
                    <br />- Professional skills: [List yours]
                    <br />- Industry knowledge: [List sectors]
                    <br />- Education, career, interests: [Add your story]
                    <br />
                    <br />
                    Please:
                    <br />
                    1. Suggest 10-15 business ideas
                    <br />
                    2. For each, specify: target audience, problem, revenue model, competitors, go-to-market, needed
                    skills
                    <br />
                    3. Rank each idea (skills fit, market, effort, capital, growth)
                    <br />
                    4. Highlight the top 3 with a short &quot;why&quot;
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Spot Market Gaps */}
            <div
              ref={(el) => (revealRefs.current[2] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[2] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <SearchDollar className="text-cyan-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    3. Spot Market Gaps
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-cyan-300">Where are customers ignored or underserved?</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Use value chain maps — see where friction or waste piles up</li>
                      <li>Read 1-star reviews &amp; social rants for pain patterns</li>
                      <li>Zoom in: Who&apos;s NOT getting what they want?</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt for Gemini DeepResearch / genspark:
                    </span>
                    <br />
                    I&apos;m researching gaps in [SPECIFIC INDUSTRY].
                    <br />
                    Please:
                    <br />
                    1. Map industry value chain, big players, pain points
                    <br />
                    2. List ignored demographics, poorly served needs
                    <br />
                    3. Summarize top 5 customer complaints + workaround hacks
                    <br />
                    4. Call out 7-10 new ideas: who&apos;s it for, the problem, solution approach, business model, how
                    hard is it?
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Follow Emerging Trends */}
            <div
              ref={(el) => (revealRefs.current[3] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[3] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <WaveSquare className="text-pink-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    4. Follow Emerging Trends
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-pink-300">Catch a wave early. Spot what&apos;s next.</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Trendtrack: Tech shifts, funding surges, startup launches</li>
                      <li>Dive into forums and VC reports</li>
                      <li>Find where 2-3 trends collide</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt for Gemini DeepResearch:
                    </span>
                    <br />I want to ride the next big trends.
                    <br />
                    Please:
                    <br />
                    1. Outline macro trends (behavior, tech, economy, etc)
                    <br />
                    2. For each: timeline, startups, business models emerging
                    <br />
                    3. List promising intersections and what&apos;s needed
                    <br />
                    4. Suggest 5+ idea spaces: concept, who it&apos;s for, how to monetize, what&apos;s needed to build
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Improve Existing Products */}
            <div
              ref={(el) => (revealRefs.current[4] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[4] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Wrench className="text-orange-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    5. Improve Existing Products
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-orange-300">Make something familiar 10x better.</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Line up competing products—list strengths, gaps, what annoys users</li>
                      <li>Spot &quot;sticky&quot; issues: missing integrations, bad usability, dated tech</li>
                      <li>Brainstorm what &quot;10X better&quot; means in your category</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt for Gemini DeepResearch / DeepSeek / genspark:
                    </span>
                    <br />I want to make [PRODUCT CATEGORY] way better.
                    <br />
                    Please:
                    <br />
                    1. Review top 5 solutions—features, pricing, strengths/weaknesses
                    <br />
                    2. Where do users complain/wish for more?
                    <br />
                    3. Spot 7-10 &quot;here&apos;s what to improve&quot; points
                    <br />
                    4. Go deep on top 3: how, tech needed, timeline, pricing, go-to-market
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Listen to Customer Complaints */}
            <div
              ref={(el) => (revealRefs.current[5] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[5] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Headphones className="text-blue-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    6. Listen to Customer Complaints
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-blue-300">Goldmine: honest, passionate feedback.</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Scan reviews, tweets, and support logs for what hurts</li>
                      <li>Categorize by frequency & severity</li>
                      <li>Check: Is this a fix that big players ignore?</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt:
                    </span>
                    <br />
                    I&apos;m researching customer pain points in [INDUSTRY].
                    <br />
                    Please:
                    <br />
                    1. List frequent complaint types (product issues, tech bugs, pricing, etc)
                    <br />
                    2. Estimate impact, # of users, which customer groups
                    <br />
                    3. For top 5, suggest solutions, needed skills/resources, business model
                    <br />
                    4. Rank opportunities by severity, size, solution ease, etc
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Reinvent Traditional Business Models */}
            <div
              ref={(el) => (revealRefs.current[6] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[6] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Sync className="text-purple-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    7. Reinvent Traditional Business Models
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-purple-300">What if you did it a radically new way?</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Study how models evolved (think: Blockbuster → Netflix!)</li>
                      <li>Borrow tactics from other industries</li>
                      <li>Consider platform, direct-to-customer, or subscription twists</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt:
                    </span>
                    <br />I want to reinvent business models in [INDUSTRY].
                    <br />
                    Please:
                    <br />
                    1. Summarize the business model history here, what&apos;s new
                    <br />
                    2. Rate opportunity for subscriptions, platforms, DTC, or &quot;unbundled&quot; offers
                    <br />
                    3. Point to good case studies from other fields
                    <br />
                    4. Suggest 5-7 bold innovations—who&apos;s it for, how it works, revenue model
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Collaborate Across Fields */}
            <div
              ref={(el) => (revealRefs.current[7] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[7] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Layers className="text-teal-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    8. Collaborate Across Fields
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-teal-300">
                      Magic happens where disciplines collide 🟰 innovation.
                    </span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Mix methods or tech from two (or more) very different fields</li>
                      <li>Seek out unlikely collaborators</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt:
                    </span>
                    <br />
                    I&apos;m exploring business ideas at the intersection of [FIELD 1] and [FIELD 2].
                    <br />
                    Please:
                    <br />
                    1. List examples where these fields combine (startups, research)
                    <br />
                    2. Spot crossover hacks (tech, process, methods)
                    <br />
                    3. Suggest 10-12 concepts, with who it serves & what it solves
                    <br />
                    4. For top options, map out team & skills needed, timeline, and key obstacles
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Create Blue Ocean Opportunities */}
            <div
              ref={(el) => (revealRefs.current[8] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[8] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Water className="text-sky-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    9. Create Blue Ocean Opportunities
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-sky-300">Can you play where nobody else is looking?</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Ask: What does everyone &quot;know&quot; in this business… but maybe it&apos;s wrong?</li>
                      <li>Analyze non-customers (why don&apos;t they buy?)</li>
                      <li>Apply the &quot;four actions&quot; method: Eliminate, Reduce, Raise, Create</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt:
                    </span>
                    <br />I want a blue ocean strategy for [INDUSTRY].
                    <br />
                    Please:
                    <br />
                    1. List the main things firms compete on
                    <br />
                    2. Challenge &quot;industry truths&quot; and how customers decide
                    <br />
                    3. Apply four-actions (eliminate, reduce, raise, create)
                    <br />
                    4. Analyze non-customers, their workarounds, hidden needs
                    <br />
                    5. Suggest 3-5 untapped blue ocean ideas, with market, how it breaks the mold, and what&apos;s
                    required
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Create Social/Environmental Impact */}
            <div
              ref={(el) => (revealRefs.current[9] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[9] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Leaf className="text-green-500 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    10. Create Social/Environmental Impact
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-green-400">Solve big challenges for people and the planet.</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Align with UN&apos;s Sustainable Development Goals (SDGs)</li>
                      <li>Spot waste or inefficiencies (&quot;circular economy&quot; hacks)</li>
                      <li>Figure out how to measure and increase positive impact</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt:
                    </span>
                    <br />I want a business that solves [ENVIRONMENTAL or SOCIAL CHALLENGE].
                    <br />
                    Please:
                    <br />
                    1. Map current solutions, key players, funding
                    <br />
                    2. List biggest gaps / underserved folks
                    <br />
                    3. Suggest business models for profit + impact
                    <br />
                    4. Spot 7-10 opportunities: market, how it works, impact measure, &quot;scaling up&quot; play
                    <br />
                    5. For top 3, outline step-by-step roadmap to launch and sustain
                  </div>
                </div>
              </div>
            </div>

            {/* 11. Address Global Challenges */}
            <div
              ref={(el) => (revealRefs.current[10] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[10] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <Globe className="text-blue-500 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    11. Address Global Challenges
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-blue-400">
                      Tackle big-picture problems like resource shortages or crisis response.
                    </span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Spot urgent needs caused by climate, demographics, disruption</li>
                      <li>Map what&apos;s being tried and where the gaps lie</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt:
                    </span>
                    <br />I want a business to address [GLOBAL CHALLENGE].
                    <br />
                    Please:
                    <br />
                    1. Map the scale & hot spots
                    <br />
                    2. List what&apos;s been tried and who&apos;s involved
                    <br />
                    3. Spot market needs for adaptation, coordination, resource allocation, or tech
                    <br />
                    4. Suggest 7-10 business concepts—market, how it stands out, business model.
                    <br />
                    5. For best options, flesh out: how to scale, what resources, main hurdles, long-term outlook
                  </div>
                </div>
              </div>
            </div>

            {/* End Section: Phase 1 */}
            <div className="ml-6 mt-8 md:ml-12">
              <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-r from-[#00F260] to-[#0575E6] shadow-[0_0_12px_6px_rgba(0,204,255,0.19)] border-2 border-[#0ff1ce]"></div>
              <div className="w-[2px] min-h-[60px] bg-gradient-to-b from-[#07e7c9] to-[#6568fa] mx-auto"></div>
            </div>

            <div className="mt-10 mb-6 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent opacity-0 transform translate-y-8 animate-[fadeInUp_1s_forwards_0.2s]">
              <ChartLine className="inline mr-3" />
              PHASE 2: Validate & Build Your Startup Idea
            </div>

            {/* Phase 2: Market Research */}
            <div
              ref={(el) => (revealRefs.current[11] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-10 ${activeReveals[11] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <BookOpen className="text-cyan-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    Step 1. Deep-Dive Market Research
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-cyan-300">Go from hunch to rock-solid data story.</span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Get a full snapshot on market, trends, and competitors</li>
                      <li>Pinpoint buyer types and market gaps</li>
                      <li>See what investors care about!</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt for Gemini DeepResearch:
                    </span>
                    <br />I have a startup idea: [YOUR IDEA].
                    <br />
                    Please provide a deep market research report, covering:
                    <br />- Industry overview (size, segments, key tech, trends)
                    <br />- SWOT (strengths, weaknesses, opportunities, threats + impact ratings)
                    <br />- Market sizing (TAM, method, assumptions)
                    <br />- Competitive landscape (min 5-7 companies: what they do, revenue, go-to-market)
                    <br />- Entry strategy and pricing
                    <br />- Buyer personas
                    <br />- Required tech, build-vs-buy
                    <br />- Future trends, regulatory, major hurdles
                    <br />- What investors want, needed milestones, funding tips
                    <br />
                    Also: include example sources and snappy recommendations!
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: Strategic Presentation Creation */}
            <div
              ref={(el) => (revealRefs.current[12] = el)}
              className={`bg-[rgba(30,41,59,0.75)] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-250 px-6 md:px-10 py-8 mb-6 ${activeReveals[12] ? "opacity-100 transform-none" : "opacity-0 translate-y-10"} transition-all duration-700`}
            >
              <div className="flex flex-row items-start">
                <SlidersHorizontal className="text-pink-400 mr-6 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-[#00F260] to-[#0575E6] bg-clip-text text-transparent">
                    Step 2. Visual Business Overview Creation
                  </h3>
                  <div className="mb-2 text-base text-gray-300">
                    <span className="font-medium text-pink-300">
                      Turn your research into an engaging pitch or team doc.
                    </span>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Highlight the most powerful points visually</li>
                      <li>Break complex info into slides with clear headlines and callouts</li>
                      <li>Make it &quot;investor ready&quot; with real data and sharp conclusions</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(17,24,39,.985)] border-l-4 border-[#00F260] my-6 rounded-lg p-4 text-[#e0e9ff] font-mono text-base shadow-[0_3px_12px_0_rgba(0,255,200,.08)] overflow-x-auto break-words">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold tracking-wide py-1 px-3 rounded-lg text-[#021C22] text-sm shadow-[0_1px_8px_rgba(90,255,255,0.28)]">
                      Prompt for Genspark.ai or other AI deck tools:
                    </span>
                    <br />
                    This is my business research:
                    <br />
                    [PASTE REPORT HERE]
                    <br />
                    Please turn this into an engaging visual slide presentation.
                    <br />- Exec summary
                    <br />- Problem &amp; solution
                    <br />- Market, competitors, business model
                    <br />- Projections, funding, call to action
                    <br />- Make each slide concise (max 150 words), with headline + visuals
                  </div>
                  <div className="text-sm text-gray-400 mt-4">
                    Tip: Click your AI tool&apos;s &quot;Export&quot; button or use your browser &quot;Print → Save as
                    PDF&quot; for a slick one-page business deck!
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16 mt-12 opacity-0 transform translate-y-8 animate-[fadeInUp_1s_forwards_0.2s]">
              <span className="inline-block rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 text-gray-900 font-bold text-lg px-7 py-2 shadow-2xl uppercase tracking-wide">
                Ready to turn an idea into your next business?
              </span>
              <div className="mt-5 text-base text-gray-300">
                Try out a few prompts above—or blend them, remix them.{" "}
                <span className="text-green-300 font-bold">AI helps you go from zero to launch</span> faster than ever!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom scrollbar styles */}
      <style>{`
        ::-webkit-scrollbar {
          width: 10px;
          background: #222;
        }
        ::-webkit-scrollbar-thumb {
          background: #444;
          border-radius: 12px;
        }
        html, body {
          background: #111827;
          color: #f3f4f6;
          font-family: 'Roboto', sans-serif;
          scroll-behavior: smooth;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 2px #71ffe3);}
          50% { filter: drop-shadow(0 0 14px #02d2fc);}
        }
      `}</style>
    </div>
  )
}
