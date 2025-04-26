
import { useEffect, useRef, useState } from 'react';
import { Book, DollarSign, FileCheck, Users, Briefcase, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import {useNavigate} from 'react-router-dom'
import { link } from 'fs';

const vaultItems = [
  {
    title: '140+ AI Business Ideas',
    description: 'Step-by-step guides for every business model',
    icon: Book,
    color: 'from-blue-600 to-purple-600',
    link: '/ai-startup-ideas'
  },
  {
    title: 'Funding Guidance',
    description: 'Expert advice on raising capital efficiently',
    icon: DollarSign,
    color: 'from-green-500 to-teal-500',
    link: '#'
  },
  {
    title: '140+ FMCG Business Ideas',
    description: 'Comprehensive lists to keep you on track',
    icon: FileCheck,
    color: 'from-orange-500 to-red-500',
    link: '/khajna'
  },
  {
    title: 'Investor Database',
    description: 'Strategies for building high-performing teams',
    icon: Users,
    color: 'from-vibrant-blue  to-pink-800',
    link: '/investorsvault'
  },
  {
    title: 'Market Research',
    description: 'Tools to understand your market deeply',
    icon: Briefcase,
    color: 'from-vibrant-blue to-blue-800',
    link: '#'
  },
  {
    title: 'Top Business Ideas',
    description: 'Proven tactics for successful product launches',
    icon: Rocket,
    color: 'from-red-500 to-purple-600',
    link: '/business-ideas'
  }
];

const TreasureVaultSection = () => {
  const [isVisible, setIsVisible] = useState(Array(vaultItems.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setIsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  const navigate = useNavigate();
  return (
    <section id="khajna" className="section bg-dark relative ">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
          The Founder's <span className="gradient-text">Treasure Vault</span>
          </h2>
          <p className="text-lg text-white/70 ">
             Unlock a curated collection of essential startup resources—all for just ₹299 (originally ₹19,999):
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaultItems.map((item, index) => (
            <div 
              key={index} 
              ref={(el) => cardRefs.current[index] = el}
              className={`
                glass-card rounded-xl p-6 border border-white/5 hover:glow-border transition-all duration-500 group cursor-pointer
                transform ${isVisible[index] ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}
              `}
            >
              <div className={`w-12 h-12 rounded-lg mb-5 flex items-center justify-center bg-gradient-to-br ${item.color} transition-transform group-hover:scale-110`}>
                <item.icon className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/70 mb-4">{item.description}</p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="pt-4 flex justify-between items-center">
                <span className="text-sm font-medium text-white/50">12 Resources</span>
                <button onClick={() => navigate(item.link)} className="text-vibrant-blue hover:underline text-sm font-medium">Explore</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gradient-purple-blue hover:opacity-90 transition-opacity">
            Unlock the Vault
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreasureVaultSection;
