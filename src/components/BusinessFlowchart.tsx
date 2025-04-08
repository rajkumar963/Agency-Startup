
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const flowSteps = [
  {
    id: 1,
    title: 'Business Idea',
    description: 'Validate your idea with our market fit framework',
    link: '#'
  },
  {
    id: 2,
    title: 'Team Building',
    description: 'Find co-founders and build your initial team',
    link: '#'
  },
  {
    id: 3,
    title: 'MVP Development',
    description: 'Create your minimum viable product efficiently',
    link: '#'
  },
  {
    id: 4,
    title: 'Finance Template',
    description: 'Track cash flow and manage startup finances',
    link: '#'
  },
  {
    id: 5,
    title: 'Market Launch',
    description: 'Strategies for a successful product launch',
    link: '#'
  },
  {
    id: 6,
    title: 'Growth Hacking',
    description: 'Scale your business with proven tactics',
    link: '#'
  }
];

const BusinessFlowchart = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="services" className="section bg-dark relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How to Start a Business in <span className="gradient-text">2025</span>
          </h2>
          <p className="text-lg text-white/70">
            Follow our proven roadmap designed to help new entrepreneurs navigate the complexities of building a successful startup.
          </p>
        </div>
        
        {/* Flowchart for desktop */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-vibrant-blue via-purple to-teal transform -translate-y-1/2 rounded-full"></div>
          
          <div className="grid grid-cols-6 gap-5">
            {flowSteps.map((step) => (
              <div 
                key={step.id}
                className="relative"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={`h-28 flex items-end justify-center ${activeStep === step.id ? 'translate-y-[-8px]' : ''} transition-transform duration-300`}>
                  <div className={`text-center p-3 rounded-lg glass-card w-full ${activeStep === step.id ? 'glow-border' : 'border-white/5'} transition-all duration-300`}>
                    <p className="text-sm font-medium text-white">{step.title}</p>
                  </div>
                </div>
                
                <div className="flex justify-center mt-3">
                  <div className={`w-5 h-5 rounded-full ${activeStep === step.id ? 'bg-vibrant-blue scale-125' : 'bg-white/20'} transition-all duration-300 z-10`}></div>
                </div>
                
                {activeStep === step.id && (
                  <div className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 w-60 p-4 glass-card rounded-xl border border-vibrant-blue/30 z-20 animate-fade-in">
                    <p className="text-sm text-white/80 mb-2">{step.description}</p>
                    <a href={step.link} className="text-vibrant-blue text-xs font-medium flex items-center">
                      Learn more <ArrowRight size={12} className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Flowchart for mobile */}
        <div className="lg:hidden space-y-4">
          {flowSteps.map((step) => (
            <div 
              key={step.id}
              className="glass-card rounded-xl p-4 border border-white/5"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vibrant-blue to-purple flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{step.id}</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFlowchart;
