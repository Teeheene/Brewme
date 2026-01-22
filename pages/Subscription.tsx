
import React from 'react';

const Subscription: React.FC = () => {
  return (
    <div className="pb-10">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <h2 className="text-lg font-bold">Subscription Hub</h2>
        <span className="material-symbols-outlined">settings</span>
      </header>

      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[22px] font-bold">Monthly Discovery Box</h2>
          <span className="bg-orange-100 text-teal text-xs font-bold px-2 py-1 rounded-full uppercase">Curated</span>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-teal text-white shadow-xl p-5 mb-6">
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/70 text-xs font-medium uppercase tracking-widest mb-1">Current Theme</p>
                <h3 className="text-2xl font-bold leading-tight">The High Altitude Series</h3>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center min-w-[60px]">
                <p className="text-[10px] uppercase font-bold">Oct</p>
                <p className="text-lg font-bold">12</p>
              </div>
            </div>
            <img src="https://picsum.photos/600/300?coffee=25" className="w-full h-32 object-cover rounded-lg shadow-inner" alt="Theme" />
            <div className="space-y-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span>Status: Roasting</span>
                  <span>65%</span>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%]" />
                </div>
                <p className="text-xs text-white/70 italic">Arriving in approx. 3 days</p>
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-white text-teal h-10 rounded-lg font-bold text-sm">Manage Box</button>
                <button className="flex-1 border border-white/30 text-white h-10 rounded-lg font-bold text-sm">View Lineup</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[22px] font-bold">Standard Subs</h2>
          <button className="text-teal text-sm font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add</span> Add New
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex gap-4">
              <img src="https://picsum.photos/200/200?coffee=30" className="size-20 rounded-lg object-cover" alt="Bean" />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold">Ethiopia Yirgacheffe</h4>
                    <span className="bg-teal/10 text-teal text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
                  </div>
                  <p className="text-sm text-teal/60 font-medium">Light Roast • Whole Bean</p>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <div>
                    <p className="text-[10px] text-gray-400">Frequency</p>
                    <p className="text-sm font-bold">Every 2 Weeks</p>
                  </div>
                  <p className="text-lg font-bold text-teal">$22.50</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-50">
              <button className="flex items-center justify-center gap-1 h-9 rounded-lg border border-gray-200 text-sm font-medium">
                <span className="material-symbols-outlined text-sm">edit</span> Edit
              </button>
              <button className="flex items-center justify-center gap-1 h-9 rounded-lg border border-gray-200 text-sm font-medium">
                <span className="material-symbols-outlined text-sm">fast_forward</span> Skip
              </button>
              <button className="flex items-center justify-center gap-1 h-9 rounded-lg border border-accent/20 text-accent text-sm font-medium">
                <span className="material-symbols-outlined text-sm">pause</span> Pause
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mt-4">
        <div className="bg-teal/5 rounded-xl p-6 border border-teal/10 flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-4xl text-teal/40 mb-3">coffee_maker</span>
          <h4 className="font-bold text-lg mb-1">Thirsty for more?</h4>
          <p className="text-sm text-teal/70 mb-4 px-4">Explore our seasonal single-origin beans.</p>
          <button className="bg-teal text-white px-6 h-10 rounded-full text-sm font-bold shadow-lg shadow-teal/20">
            Explore Marketplace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
