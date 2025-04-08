
import { BookOpen, Eye, Target } from 'lucide-react';

const aboutItems = [
  {
    title: "Our Story",
    description: "Born from the struggles of first-time founders, we've built the platform we wished we had when starting out. Our journey from bootstrapped startup to helping thousands of entrepreneurs fuels our mission.",
    icon: BookOpen,
    color: "from-vibrant-blue to-purple"
  },
  {
    title: "Our Vision",
    description: "We envision a world where entrepreneurial talent thrives regardless of background or location. Our platform democratizes access to resources previously available only to the privileged few.",
    icon: Eye,
    color: "from-purple to-vibrant-blue"
  },
  {
    title: "Our Mission",
    description: "To empower one million founders globally by 2030, providing them with the essential tools, knowledge, and community support needed to build sustainable, impactful businesses.",
    icon: Target,
    color: "from-vibrant-blue to-teal"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-dark relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Platform That Understands <span className="gradient-text">Founders</span></h2>
          <p className="text-lg text-white/70">
            We're more than just a platform - we're a mission-driven team of entrepreneurs dedicated to helping founders succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutItems.map((item, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg group"
            >
              <div className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
