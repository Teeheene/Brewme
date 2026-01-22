
import React from 'react';
import { Link } from 'react-router-dom';

const Journal: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-teal">coffee_maker</span>
          </div>
          <h1 class="font-bold text-xl tracking-tight">Journal</h1>
        </div>
        <div className="flex gap-2">
          <span className="material-symbols-outlined p-2">search</span>
          <span className="material-symbols-outlined p-2">settings</span>
        </div>
      </header>

      <section className="px-4 pt-6 pb-2">
        <p className="text-sm font-medium text-teal/70 uppercase tracking-widest mb-1">Welcome back, Artisan</p>
        <h2 className="text-3xl font-bold leading-tight font-display">Your daily grind is looking sharp.</h2>
      </section>

      <section className="p-4 grid grid-cols-2 gap-3">
        <div className="col-span-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between relative overflow-hidden">
          <div className="z-10">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Activity Score</p>
            <p className="text-2xl font-bold">8 cups <span className="text-sm font-normal text-gray-400">/ last 7 days</span></p>
          </div>
          <span className="material-symbols-outlined text-8xl absolute -right-4 -bottom-4 opacity-5 fill-1">bar_chart</span>
        </div>
        
        <div className="bg-teal text-white p-5 rounded-xl shadow-md flex flex-col justify-between aspect-square">
          <span className="material-symbols-outlined text-3xl">analytics</span>
          <div>
            <p className="text-3xl font-bold">124</p>
            <p className="text-xs font-medium opacity-80 uppercase">Total Brews</p>
          </div>
        </div>

        <div className="bg-[#ebefee] p-5 rounded-xl flex flex-col justify-between aspect-square">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-teal text-3xl">water_drop</span>
            <span className="text-[10px] font-bold bg-white/50 px-2 py-1 rounded-full text-teal uppercase">GO-TO</span>
          </div>
          <div>
            <p className="text-lg font-bold leading-tight">V60 Pour Over</p>
            <p className="text-xs font-medium opacity-70 uppercase">Favorite Method</p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h3 className="text-xl font-bold">Recent Logs</h3>
        <button className="text-sm font-bold text-teal">View All</button>
      </div>

      <div className="space-y-3 px-4 pb-24">
        {[
          { name: 'Ethiopia Yirgacheffe', note: 'Bright acidity, floral notes.', rating: '4.5', time: '2:45s', dose: '18g/300ml', icon: 'coffee_maker' },
          { name: 'Brazil Santos', note: 'Chocolatey, heavy body.', rating: '4.0', time: '0:28s', dose: '18g/36g', icon: 'precision_manufacturing', color: 'text-accent' },
          { name: 'Colombia Huila', note: 'Aeropress inverted method.', rating: '5.0', time: '2:00s', dose: '15g/250ml', icon: 'air' }
        ].map((log, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4">
            <div className={`w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 ${log.color || 'text-teal'}`}>
              <span className="material-symbols-outlined text-2xl">{log.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-base truncate">{log.name}</h4>
                <div className="flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded text-xs font-bold text-accent">
                  <span className="material-symbols-outlined text-xs fill-1">star</span>
                  <span>{log.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic mb-2">"{log.note}"</p>
              <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">timer</span> {log.time}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">scale</span> {log.dose}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/brew-log" className="fixed bottom-24 right-6 bg-teal text-white flex items-center gap-2 px-6 py-4 rounded-xl shadow-2xl hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined">add_circle</span>
        <span className="font-bold">Start New Brew</span>
      </Link>
    </div>
  );
};

export default Journal;
