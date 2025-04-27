import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const TreasureSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="khajna" className="section bg-dark relative  mt-5 mx-[-1rem] ">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
          The Founder's <span className="gradient-text">Treasure Vault</span>
          </h2>
          <p className="text-lg text-white/70 ">
             Unlock your curated collection of essential startup resources that make smooth your entrepreneurship journey.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between p-8  shadow-md max-w-5xl mx-auto mt-[-3rem] ">
          
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
            {/* <h2 className="text-2xl font-bold text-zinc-300">Unlock Hidden Treasures</h2> */}
            <ul className="space-y-3 text-left">
                {[
                  '140+ Business Ideas in FMCG',
                  '150+ AI Startup Ideas',
                  'Legal Templates',
                  'Marketing Strategy Templates',
                  'Sales Templates',
                  'Case Studies',
                  'Research Papers',
                  '100 crores+ Pan India Data'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-purple-blue flex-shrink-0 mt-1"></div>
                    <span className="ml-3 text-white/80 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            <Button onClick={() => navigate('/allkhajna')}  className="bg-gradient-purple-blue hover:opacity-90 transition-opacity mt-6 ">
              Unlock Your Khazana Now
            </Button>
          </div>
          {/* Right Side: Text and Button */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/padlock_78370-547.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_hybrid&w=740"
              alt="Treasure Chest"
              className="w-[300px] h-[300px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TreasureSection;
