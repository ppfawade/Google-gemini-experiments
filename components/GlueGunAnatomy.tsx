import React, { useState } from 'react';
import { Info } from 'lucide-react';

export const GlueGunAnatomy: React.FC = () => {
  const [activePart, setActivePart] = useState<string | null>(null);

  const parts = [
    {
      id: 'trigger',
      name: 'Mechanical Trigger',
      desc: 'Converts linear force into hydraulic pressure. The "feed rate" is critical; pushing too fast exceeds the heater\'s melting capacity (Q_in > Q_melt).',
      x: 300, y: 350
    },
    {
      id: 'heater',
      name: 'PTC Heating Element',
      desc: 'Positive Temperature Coefficient heaters self-regulate. Fluctuations here directly alter viscosity (η). Poor thermal recovery leads to cold extrusions and high stringing.',
      x: 500, y: 220
    },
    {
      id: 'nozzle',
      name: 'Nozzle & Check Valve',
      desc: 'The final exit. A ball-check valve is often added to prevent drooling. Stringing occurs here when the adhesive tail fails to fracture cleanly upon separation.',
      x: 750, y: 220
    },
    {
      id: 'stick',
      name: 'Solid EVA Stick',
      desc: 'Ethylene-Vinyl Acetate copolymer. Solid at room temp, viscoelastic melt at >150°C. The elastic modulus (G\') determines how "rubbery" it feels.',
      x: 100, y: 220
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden flex flex-col lg:flex-row">
      {/* Diagram Side */}
      <div className="lg:w-2/3 bg-stone-100 p-8 relative flex items-center justify-center min-h-[400px]">
        <svg viewBox="0 0 900 600" className="w-full h-full drop-shadow-lg">
          {/* Glue Stick */}
          <rect x="50" y="200" width="300" height="40" fill="#fde68a" rx="5" 
            className={`transition-opacity duration-300 ${activePart && activePart !== 'stick' ? 'opacity-40' : 'opacity-100'}`}
          />
          
          {/* Main Body */}
          <path d="M 250 180 L 600 180 L 650 200 L 650 240 L 600 260 L 300 260 L 300 450 L 200 450 L 200 260 L 250 180" 
            fill="#44403c" stroke="#292524" strokeWidth="4" 
          />
          
          {/* Trigger */}
          <path d="M 280 280 Q 320 350 280 420 L 260 420 Q 300 350 260 280 Z" 
            fill="#d97706" stroke="#b45309" strokeWidth="2"
            className={`cursor-pointer transition-all duration-300 ${activePart === 'trigger' ? 'fill-glue-400 filter drop-shadow-glow' : ''}`}
            onClick={() => setActivePart('trigger')}
            onMouseEnter={() => setActivePart('trigger')}
          />

          {/* Heater Block (Internal) */}
          <rect x="450" y="190" width="120" height="60" fill="#ef4444" opacity="0.8" rx="4"
            className={`cursor-pointer transition-all duration-300 ${activePart === 'heater' ? 'fill-red-400 filter drop-shadow-glow' : ''}`}
            onClick={() => setActivePart('heater')}
            onMouseEnter={() => setActivePart('heater')}
          />
          
          {/* Nozzle */}
          <path d="M 650 210 L 750 215 L 750 225 L 650 230 Z" fill="#d4d4d8" stroke="#71717a" strokeWidth="2"
             className={`cursor-pointer transition-all duration-300 ${activePart === 'nozzle' ? 'fill-white filter drop-shadow-glow' : ''}`}
             onClick={() => setActivePart('nozzle')}
             onMouseEnter={() => setActivePart('nozzle')}
          />
          
          {/* Hot Glue exiting */}
          <path d="M 750 220 Q 800 220 850 300" stroke="#f59e0b" strokeWidth="6" fill="none" strokeDasharray="10 5" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Labels / Hotspots */}
          {parts.map(part => (
             <g key={part.id} 
                onClick={() => setActivePart(part.id)}
                onMouseEnter={() => setActivePart(part.id)}
                className="cursor-pointer group"
             >
                <circle cx={part.x} cy={part.y} r="12" className="fill-white stroke-glue-500 stroke-2 animate-pulse" />
                <circle cx={part.x} cy={part.y} r="6" className="fill-glue-600" />
             </g>
          ))}
        </svg>
      </div>

      {/* Info Side */}
      <div className="lg:w-1/3 bg-white p-8 border-l border-stone-200 flex flex-col justify-center">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-stone-800 flex items-center">
            <Info className="w-5 h-5 mr-2 text-glue-500" />
            System Analysis
          </h3>
          <p className="text-stone-500 text-sm mt-1">Hover over the diagram components.</p>
        </div>

        {activePart ? (
          <div className="animate-fade-in">
             <h4 className="text-2xl font-serif font-bold text-glue-600 mb-2">
               {parts.find(p => p.id === activePart)?.name}
             </h4>
             <p className="text-stone-700 leading-relaxed">
               {parts.find(p => p.id === activePart)?.desc}
             </p>
          </div>
        ) : (
          <div className="p-6 bg-stone-50 rounded-lg border border-stone-200 text-stone-500 italic text-center">
             Select a component to view its role in the extrusion process.
          </div>
        )}
      </div>
    </div>
  );
};