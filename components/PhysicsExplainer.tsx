import React from 'react';

export const PhysicsExplainer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-stone-900 mb-2">1. The Liquid Bridge</h3>
            <p className="text-stone-600">
                When you pull the gun away from the workpiece, a "liquid bridge" is formed. In a simple Newtonian fluid (like water), surface tension dominates, causing the bridge to become unstable and break cleanly into droplets (Rayleigh-Plateau instability).
            </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow border-l-4 border-l-glue-400">
            <h3 className="text-xl font-bold text-stone-900 mb-2">2. Viscoelastic Resistance</h3>
            <p className="text-stone-600">
                Hot melt adhesives are <strong>viscoelastic</strong>. They have long polymer chains that entangle. When pulled, these chains uncoil and resist stretching. This creates a high <em>extensional viscosity</em> that stabilizes the filament, preventing the clean break.
            </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-stone-900 mb-2">3. The Cooling Race</h3>
            <p className="text-stone-600">
                As the filament thins, its surface area-to-volume ratio skyrockets. It cools rapidly. If the viscosity increases (due to cooling) faster than the capillary forces can break the bridge, the filament "freezes" as a solid string.
            </p>
        </div>
      </div>

      <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
        <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-6 text-center">Filament Breakup Mechanics</h4>
        
        {/* Visualizing Capillary Breakup */}
        <div className="flex justify-between items-end h-64 relative">
            {/* Newtonian */}
            <div className="w-1/3 flex flex-col items-center group">
                 <div className="h-40 w-8 bg-blue-100 rounded-full relative overflow-hidden transition-all duration-1000 group-hover:h-0">
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between py-2">
                        <div className="w-6 h-6 bg-blue-400 rounded-full mx-auto animate-bounce"></div>
                        <div className="w-4 h-4 bg-blue-400 rounded-full mx-auto"></div>
                    </div>
                 </div>
                 <p className="mt-4 text-center font-bold text-blue-600">Water</p>
                 <p className="text-xs text-center text-stone-500">Low Viscosity<br/>Newtonian</p>
            </div>

            {/* Ideal Glue */}
            <div className="w-1/3 flex flex-col items-center group">
                 <div className="h-40 w-8 bg-glue-100 rounded-full relative overflow-hidden transition-all duration-700">
                    <div className="absolute inset-x-2 top-0 bottom-0 bg-glue-400 opacity-50 group-hover:inset-x-3 transition-all"></div>
                 </div>
                 <p className="mt-4 text-center font-bold text-glue-600">Hot Glue</p>
                 <p className="text-xs text-center text-stone-500">Shear Thinning<br/>Ideal Temp</p>
            </div>

            {/* Cold/Stringy Glue */}
            <div className="w-1/3 flex flex-col items-center">
                 <div className="h-48 w-4 bg-orange-200 rounded-full relative overflow-visible">
                    {/* The String */}
                    <svg className="absolute top-0 left-0 w-full h-full overflow-visible" viewBox="0 0 10 100" preserveAspectRatio="none">
                         <path d="M 0,0 Q 10,50 0,100" stroke="#f97316" strokeWidth="2" fill="none" className="animate-pulse" />
                    </svg>
                 </div>
                 <p className="mt-4 text-center font-bold text-orange-700">Cold Glue</p>
                 <p className="text-xs text-center text-stone-500">High Elasticity<br/>String Formation</p>
            </div>
        </div>
        <p className="mt-8 text-xs text-stone-400 text-center italic">
            *Simplified visualization of Capillary Breakup Rheometry (CaBER) concepts.
        </p>
      </div>
    </div>
  );
};