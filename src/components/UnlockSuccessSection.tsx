
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const UnlockSuccessSection = () => {
  return (
    <section id="resources" className="section bg-dark relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Unlock the <span className="gradient-text">Resources</span> and <span className="gradient-text">Tools</span> You Need to Succeed
              </h2>
              
              <p className="text-lg text-white/80">
                Access our extensive knowledge vault filled with proven strategies, templates, and insights gathered from successful founders and startup experts worldwide.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Curated resources for every stage of your journey',
                  'Expert-validated strategies and frameworks',
                  'Templates that save you hundreds of hours',
                  'Community insights from fellow founders'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-gradient-purple-blue flex-shrink-0 mt-1"></div>
                    <span className="ml-3 text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="mt-4 bg-gradient-purple-blue hover:opacity-90 transition-opacity">
                Elevate with Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glowing treasure chest */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-vibrant-blue/20 to-purple/20 animate-glow"></div>
              <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-vibrant-blue/30 to-purple/30 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 relative animate-float">
                  {/* Stylized treasure chest icon */}
                  <svg viewBox="0 0 24 24" className="w-full h-full text-vibrant-blue drop-shadow-[0_0_15px_rgba(30,144,255,0.5)]">
                    <path
                      fill="currentColor"
                      d="M5,4H19V8H5V4M14,10V18H10V10H14M16,10H19V18H16V10M8,10V18H5V10H8Z"
                    />
                  </svg>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-vibrant-blue/20 rounded-full blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSuccessSection;
