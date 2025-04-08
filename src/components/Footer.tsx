
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-11 mr-2 rounded-md bg-gradient-purple-blue flex items-center justify-center">
                <span className="text-white text-lg font-bold">TSW</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-white">The Startup Wallah</span>
            </div>
            <p className="text-white/60 mb-6">
              Empowering founders with the tools and resources to build exceptional startups.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-vibrant-blue/20 transition-colors">
                <Facebook size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-vibrant-blue/20 transition-colors">
                <Twitter size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-vibrant-blue/20 transition-colors">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-vibrant-blue/20 transition-colors">
                <Linkedin size={16} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Guides</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Templates</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">© 2025 TheStartupWallah. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors text-sm">Privacy</a>
            <a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors text-sm">Terms</a>
            <a href="#" className="text-white/60 hover:text-vibrant-blue transition-colors text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
