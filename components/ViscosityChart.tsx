import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea, Label } from 'recharts';

// Simulated data based on typical EVA hot melt adhesive rheology curves
const data = [
  { temp: 140, viscosity: 12000, state: 'Solid-like' },
  { temp: 150, viscosity: 8500, state: 'Melting' },
  { temp: 160, viscosity: 5000, state: 'High Viscosity' },
  { temp: 170, viscosity: 3200, state: 'Stringing Zone' },
  { temp: 180, viscosity: 2100, state: 'Optimal' },
  { temp: 190, viscosity: 1500, state: 'Optimal' },
  { temp: 200, viscosity: 1100, state: 'Runny' },
  { temp: 210, viscosity: 800, state: 'Degradation Risk' },
  { temp: 220, viscosity: 600, state: 'Degradation Risk' },
];

export const ViscosityChart: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg h-[400px] text-stone-900">
      <h3 className="text-lg font-bold mb-4 text-center text-stone-800">Viscosity (cP) vs. Temperature (°C)</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis 
            dataKey="temp" 
            label={{ value: 'Temperature (°C)', position: 'insideBottom', offset: -10 }} 
            stroke="#78716c"
          />
          <YAxis 
            label={{ value: 'Viscosity (Centipoise)', angle: -90, position: 'insideLeft' }} 
            stroke="#78716c"
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e5e5' }}
            formatter={(value: number) => [`${value} cP`, 'Viscosity']}
          />
          
          {/* Highlight the Ideal Operating Range */}
          <ReferenceArea x1={180} x2={200} strokeOpacity={0} fill="#fef3c7" fillOpacity={0.6}>
             <Label value="Optimal Range" position="top" fill="#d97706" fontSize={12} />
          </ReferenceArea>

          {/* Highlight Stringing Zone */}
          <ReferenceArea x1={150} x2={170} strokeOpacity={0} fill="#fee2e2" fillOpacity={0.4}>
             <Label value="High Stringing" position="top" fill="#b91c1c" fontSize={12} />
          </ReferenceArea>

          <Line 
            type="monotone" 
            dataKey="viscosity" 
            stroke="#d97706" 
            strokeWidth={3}
            dot={{ r: 4, fill: '#d97706' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};