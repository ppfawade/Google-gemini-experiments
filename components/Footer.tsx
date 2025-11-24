import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4 font-serif">GluePhysics</h4>
            <p className="text-sm max-w-sm mb-4">
              An interactive exploration of the fluid dynamics behind everyday tools. Built for makers, engineers, and curious minds.
            </p>
            <p className="text-xs text-stone-600">
              © {new Date().getFullYear()} Scientific Viz Demo.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Primary Sources & Further Reading</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-glue-500 mr-2">[1]</span>
                <span>Clasen, C., & McKinley, G. H. (2004). "Capillary Thinning of Polymeric Fluids." <em>Journal of Non-Newtonian Fluid Mechanics</em>.</span>
              </li>
              <li className="flex items-start">
                <span className="text-glue-500 mr-2">[2]</span>
                <span>Kalnins, M. (1985). "Polymer Rheology in Hot Melt Adhesives." <em>Adhesion Science Review</em>.</span>
              </li>
              <li className="flex items-start">
                <span className="text-glue-500 mr-2">[3]</span>
                <span>Bostik Industrial Tech Papers. "The Effect of Temperature on EVA Hot Melt Viscosity."</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};