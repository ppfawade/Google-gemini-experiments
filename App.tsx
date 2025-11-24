import React, { useState } from 'react';
import { BookOpen, Thermometer, Activity, MessageSquare, Menu, X, ChevronDown } from 'lucide-react';
import { Hero } from './components/Hero';
import { GlueGunAnatomy } from './components/GlueGunAnatomy';
import { PhysicsExplainer } from './components/PhysicsExplainer';
import { ViscosityChart } from './components/ViscosityChart';
import { AiRheologist } from './components/AiRheologist';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'anatomy', label: 'Mechanism', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'physics', label: 'Physics of Stringing', icon: <Activity className="w-4 h-4" /> },
    { id: 'data', label: 'Viscosity Data', icon: <Thermometer className="w-4 h-4" /> },
    { id: 'ask-ai', label: 'Ask Researcher', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-8 h-8 bg-glue-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-stone-800">GluePhysics</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-glue-600 bg-glue-50' 
                      : 'text-stone-600 hover:text-glue-600 hover:bg-stone-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-stone-600 hover:text-glue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 w-full text-left px-3 py-4 rounded-md text-base font-medium text-stone-700 hover:text-glue-600 hover:bg-stone-50"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <section id="hero">
          <Hero onStart={() => scrollToSection('anatomy')} />
        </section>

        <section id="anatomy" className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">The Anatomy of a Glue Gun</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Understanding the thermal and mechanical process is the first step to solving the stringing problem.
              </p>
            </div>
            <GlueGunAnatomy />
          </div>
        </section>

        <section id="physics" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">The Physics of Stringing</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Why does glue string? It comes down to viscoelasticity, capillary action, and the Deborah number.
              </p>
            </div>
            <PhysicsExplainer />
          </div>
        </section>

        <section id="data" className="py-20 bg-stone-900 text-stone-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-start md:space-x-12">
              <div className="md:w-1/3 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-6 font-serif border-l-4 border-glue-500 pl-4">Viscosity & Temperature</h2>
                <p className="text-stone-400 mb-6 leading-relaxed">
                  Hot melt adhesives (HMAs) are thermoplastics. Their viscosity drops exponentially with temperature, following an Arrhenius-like relationship.
                </p>
                <p className="text-stone-400 mb-6 leading-relaxed">
                  <strong>The Danger Zone:</strong> When glue is too cool (below 170°C for many consumer sticks), it retains high elasticity, leading to long strings. When too hot (>210°C), it may drip excessively or degrade.
                </p>
                <div className="bg-stone-800 p-6 rounded-lg border border-stone-700">
                  <h4 className="font-semibold text-glue-400 mb-2">Key Variable: Deborah Number (De)</h4>
                  <p className="text-sm text-stone-400 italic mb-2">De = Relaxation Time / Observation Time</p>
                  <p className="text-sm text-stone-300">
                    High De (fast pulling) makes the glue act like a solid rubber band (snap back or string). Low De (slow pulling) allows it to flow like a liquid (break cleanly).
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
                <ViscosityChart />
              </div>
            </div>
           </div>
        </section>

        <section id="ask-ai" className="py-20 bg-glue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-4 font-serif">Ask the Rheologist</h2>
              <p className="text-stone-600">
                Powered by Gemini 2.5 Flash. Ask specifically about "necking failures", "viscoelasticity", or practical tips to stop stringing.
              </p>
            </div>
            <AiRheologist />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;