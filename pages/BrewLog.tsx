
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BrewLog: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-background min-h-screen flex flex-col p-4 pb-24">
      <header className="flex items-center justify-between mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold">New Pour Over Log</h1>
          <p className="text-xs text-accent font-medium">Benguet Arabica • Medium Roast</p>
        </div>
        <button className="size-10 rounded-xl bg-gray-100 flex items-center justify-center">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
      </header>

      {/* Timer Section */}
      <section className="flex flex-col items-center justify-center py-6">
        <div className="relative flex items-center justify-center w-56 h-56">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle className="text-gray-100" cx="112" cy="112" fill="transparent" r="100" stroke="currentColor" strokeWidth="8" />
            <circle 
              className="transition-all duration-1000" 
              cx="112" cy="112" fill="transparent" r="100" stroke="#dc6a18" 
              strokeWidth="8" strokeDasharray="628" strokeDashoffset={628 - (seconds % 180) * (628/180)} 
              strokeLinecap="round" 
            />
          </svg>
          <div className="flex flex-col items-center z-10 font-mono">
            <span className="text-accent text-sm font-bold uppercase tracking-widest mb-1">Brewing</span>
            <div className="text-5xl font-bold tracking-tighter">
              {formatTime(seconds)}
            </div>
            <span className="text-gray-400 text-sm mt-1">Goal: 03:00</span>
          </div>
        </div>

        <div className="flex gap-4 mt-8 w-full">
          <button 
            onClick={() => setIsActive(!isActive)}
            className="flex-1 h-12 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined">{isActive ? 'pause' : 'play_arrow'}</span>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button 
            onClick={() => { setSeconds(0); setIsActive(false); }}
            className="flex-1 h-12 rounded-xl bg-gray-100 text-gray-800 font-bold flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">restart_alt</span>
            Reset
          </button>
        </div>
      </section>

      {/* Form Fields */}
      <div className="space-y-6 mt-6">
        <section className="bg-white p-5 rounded-xl border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-400">settings_input_component</span>
              <h3 className="font-bold text-sm uppercase tracking-wide">Grind Size</h3>
            </div>
            <span className="text-primary font-bold text-lg">5.5</span>
          </div>
          <input type="range" min="1" max="10" step="0.1" defaultValue="5.5" className="w-full h-1.5 bg-gray-200 rounded-full appearance-none accent-primary" />
          <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-bold uppercase">
            <span>Fine</span>
            <span>Medium</span>
            <span>Coarse</span>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Dose', icon: 'scale', val: '18', unit: 'grams' },
            { label: 'Water Temp', icon: 'thermostat', val: '93', unit: '°C' },
            { label: 'Bloom', icon: 'timer', val: '30', unit: 'secs' },
            { label: 'Yield', icon: 'coffee', val: '300', unit: 'ml' }
          ].map((field, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-sm">{field.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">{field.label}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <input className="bg-transparent border-none p-0 text-2xl font-bold w-full focus:ring-0" type="number" defaultValue={field.val} />
                <span className="text-xs opacity-60 font-medium">{field.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white p-4 rounded-xl border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <span className="material-symbols-outlined text-sm">edit_note</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Tasting Notes</span>
          </div>
          <textarea className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary placeholder:text-gray-300" placeholder="Bright acidity, hints of sugar cane..." rows={3} />
        </section>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-gray-100 z-50">
        <button onClick={() => navigate('/journal')} className="w-full bg-primary text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/30">
          <span className="material-symbols-outlined">save</span>
          Save Brew Log
        </button>
      </footer>
    </div>
  );
};

export default BrewLog;
