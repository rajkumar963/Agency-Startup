
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-28 px-3 pb-20  md:pt-36 md:pb-32 bg-dark relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-blue/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/20 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 max-w-2xl">
          <div>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <p className="text-sm text-white/90 font-medium flex items-center">
                <span className="w-2 h-2 rounded-full bg-vibrant-blue mr-2"></span>
                Launching Dreams, Building Futures
              </p>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
              An all-in-one platform crafted by <span className="gradient-text">Founders,</span> for <span className="gradient-text">Founders</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          We simplify startup chaos with premium, affordable services, expert resources, and the world's most demanding and important khajana for founders—so you can build with clarity and grow faster.          </p> 
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="https://wa.me/message/DB45B2CA3YBTE1" className=" bg-gradient-purple-blue hover:opacity-90 transition-opacity text-lg px-5 flex items-center justify-center gap-2 py-2">
              Join the Community
            </a>
            <Button onClick={() => navigate('/services')} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 text-lg px-8">
              Explore Services
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-gradient-to-br from-gray-700 to-gray-900"></div>
              ))}
            </div>
            <p className="text-sm text-white/70">Join <span className="text-white font-semibold">50+</span> founders already onboard</p>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className="w-full h-60 md:h-66 lg:h-[25rem] relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-vibrant-blue/20 to-purple/20 rounded-2xl glow-border overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-vibrant-blue/30 flex items-center justify-center cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-vibrant-blue flex items-center justify-center transition-transform group-hover:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Video placeholder with 3D mesh grid effect */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full grid grid-cols-12 grid-rows-12">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-white/10"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
