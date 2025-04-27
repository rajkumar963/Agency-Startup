import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const flowSteps = [
  { id: 1, title: 'Find Problem', description: 'Validate your idea with our market fit framework', link:'/businessesideas'},
  { id: 2, title: 'Test Idea', description: 'Find co-founders and build your initial team', link: '/mvpblueprint' },
  { id: 3, title: 'Pick Model', description: 'Create your minimum viable product efficiently', link: '/pickmodels' },
  { id: 4, title: 'Build Team', description: 'Track cash flow and manage startup finances', link: '#' },
  { id: 5, title: 'Make Plan', description: 'Strategies for a successful product launch', link: '#' },
  { id: 6, title: 'Get Cash', description: 'Scale your business with proven tactics', link: '#' },
  { id: 7, title: 'Build Product', description: 'Define your exit strategy and secure funding', link: '#' },
  { id: 8, title: 'Find Customers', description: 'Strategies for a successful product launch', link: '#' },
  { id: 9, title: 'Grow Right', description: 'Scale your business with proven tactics', link: '#' },
  { id: 10, title: 'Stay Flexible', description: 'Define your exit strategy and secure funding', link: '#' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { 
      duration: 1.5, 
      ease: "easeInOut" 
    }
  }
};

const connectorVariants = {
  hidden: { scaleX: 0 },
  visible: (isRight) => ({
    scaleX: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
      ease: "easeOut",
      originX: isRight ? 0 : 1
    }
  })
};

const BusinessFlowchart = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            How to Start a Business in <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-blue-500">2025</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
            Follow our proven roadmap to transform your idea into a thriving startup
          </p>
        </div>

        {/* Flowchart area */}
        <div className="relative flex flex-col items-center min-h-screen">
          {/* Vertical line */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
            className="absolute hidden lg:block w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 h-full left-1/2 transform -translate-x-1/2 z-0 rounded-full" 
          />

          <div className="flex flex-col gap-16 w-full">
            {flowSteps.map((step, index) => {
              const isRight = index % 2 !== 0; // First left (index 0), then right (index 1)
              const isHovered = hoveredStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  className="relative z-10 w-full flex flex-col lg:flex-row items-center"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Left side content */}
                  <div className={`w-full lg:w-5/12 ${isRight ? 'hidden lg:block' : ''}`}>
                    {!isRight && (
                      <div 
                        className={`bg-zinc-900/80 backdrop-blur border ${isHovered ? 'border-blue-500' : 'border-zinc-800'} rounded-xl p-6 shadow-lg transition-all duration-300`}
                        style={{
                          boxShadow: isHovered ? '0 0 25px rgba(59, 130, 246, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        <div className="flex items-start gap-5">
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg shadow-md">
                            {step.id}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-lg mb-2">{step.title}</h4>
                            {/* <p className="text-zinc-400 text-md mb-2">{step.description}</p> */}
                            <a
                              href={step.link}
                              className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group"
                            >
                              <span>Learn more</span>
                              <ExternalLink size={14} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center connector with dot */}
                  <div className="relative hidden lg:flex w-2/12 items-center justify-center">
                    <div className="relative w-full h-6 flex items-center justify-center">
                      {/* Horizontal connector - only on the side with a card */}
                      {!isRight ? (
                        // Left side connector (when card is on the left)
                        <motion.div 
                          custom={false}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={connectorVariants}
                          className={`absolute h-0.5 ${isHovered ? 'bg-blue-400' : 'bg-gradient-to-r from-indigo-500 to-blue-500'} left-0 w-1/2 transition-colors duration-300`}
                        />
                      ) : (
                        // Right side connector (when card is on the right)
                        <motion.div 
                          custom={true}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={connectorVariants}
                          className={`absolute h-0.5 ${isHovered ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} right-0 w-1/2 transition-colors duration-300`}
                        />
                      )}
                      
                      {/* Center dot - always visible */}
                      <motion.div 
                        className={`absolute z-20 w-6 h-6 rounded-full ${isHovered ? 'bg-white' : 'bg-blue-500'} border-4 border-black transition-all duration-300`}
                        animate={{
                          scale: isHovered ? 1.2 : 1,
                          boxShadow: isHovered ? '0 0 20px rgba(59, 130, 246, 0.8)' : '0 0 0px rgba(59, 130, 246, 0)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Right side content */}
                  <div className={`w-full lg:w-5/12 ${!isRight ? 'hidden lg:block' : ''}`}>
                    {isRight && (
                      <div 
                        className={`bg-zinc-900/80 backdrop-blur border ${isHovered ? 'border-blue-500' : 'border-zinc-800'} rounded-xl p-6 shadow-lg transition-all duration-300`}
                        style={{
                          boxShadow: isHovered ? '0 0 25px rgba(59, 130, 246, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        <div className="flex items-start gap-5">
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg shadow-md">
                            {step.id}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-lg mb-2">{step.title}</h4>
                            {/* <p className="text-zinc-400 text-md mb-2">{step.description}</p> */}
                            <a
                              href={step.link}
                              className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group"
                            >
                              <span>Learn more</span>
                              <ExternalLink size={14} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile view (always shows the card regardless of side) */}
                  {/* <div className="w-full lg:hidden">
                    <div 
                      className={`bg-zinc-900/80 backdrop-blur border ${isHovered ? 'border-blue-500' : 'border-zinc-800'} rounded-xl p-6 shadow-lg transition-all duration-300`}
                      style={{
                        boxShadow: isHovered ? '0 0 25px rgba(59, 130, 246, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg shadow-md">
                          {step.id}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-2">{step.title}</h4>
                          <p className="text-zinc-400 text-md mb-4">{step.description}</p>
                          <a
                            href={step.link}
                            className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group"
                          >
                            <span>Learn more</span>
                            <ExternalLink size={14} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>                 */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFlowchart;