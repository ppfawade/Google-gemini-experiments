import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Abstract Background representing glue strings */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0,0 C30,50 70,50 100,100" stroke="#f59e0b" strokeWidth="0.5" fill="none" />
           <path d="M20,0 C40,60 60,40 80,100" stroke="#d97706" strokeWidth="0.8" fill="none" />
           <path d="M100,0 C70,30 30,70 0,100" stroke="#fbbf24" strokeWidth="0.3" fill="none" />
         </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-glue-100 text-glue-800 text-sm font-semibold mb-6 border border-glue-200">
          Based on Research in Polymer Physics
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight font-serif mb-6 leading-tight">
          Why Does Your <br />
          <span className="text-glue-600">Glue Gun String?</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          An exploration into the rheology of hot melt adhesives, viscoelastic failures, and the fluid dynamics behind the mess.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStart}
            className="group px-8 py-4 bg-glue-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-glue-700 transition-all duration-300 flex items-center"
          >
            Explore the Science
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};