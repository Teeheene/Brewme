
import React from 'react';

const Marketplace: React.FC = () => {
  return (
    <div className="pb-10">
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-teal">coffee_maker</span>
          <h1 className="text-xl font-bold tracking-tight">Marketplace</h1>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface">
            <span className="material-symbols-outlined text-teal">favorite</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface">
            <span className="material-symbols-outlined text-teal">shopping_bag</span>
          </button>
        </div>
      </nav>

      <div className="px-4 py-2">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input className="w-full h-14 pl-12 pr-4 rounded-xl border-none bg-surface focus:ring-2 focus:ring-teal/20 text-base" placeholder="Find your perfect roast..." type="text" />
        </div>
      </div>

      <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar">
        {['All Roasts', 'Light Roast', 'Espresso', 'Single Origin', 'Decaf'].map((cat, i) => (
          <button key={i} className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap ${i === 0 ? 'bg-teal text-white' : 'bg-surface text-teal'}`}>
            {cat}
          </button>
        ))}
      </div>

      <section className="mt-6">
        <div className="flex items-center justify-between px-4 mb-4">
          <h2 className="text-2xl font-bold">Recommended</h2>
          <button className="text-teal font-semibold text-sm">View All</button>
        </div>
        <div className="px-4 grid grid-cols-2 gap-3">
          <div className="col-span-2 relative rounded-xl aspect-[16/9] overflow-hidden">
            <img src="https://picsum.photos/800/450?coffee=4" className="w-full h-full object-cover opacity-90" alt="Special" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-2 py-1 rounded-md bg-accent text-white text-[10px] font-bold uppercase mb-2 inline-block">Editor's Choice</span>
              <h3 className="text-white text-xl font-bold">Ethiopia Yirgacheffe</h3>
              <p className="text-white/80 text-sm">Jasmine • Peach • Citrus</p>
            </div>
          </div>
          <div className="bg-surface p-3 rounded-xl">
             <img src="https://picsum.photos/300/300?coffee=5" className="w-full aspect-square rounded-lg object-cover" alt="Bean" />
             <p className="text-[10px] font-bold text-accent uppercase mt-2">Moonlight Roasters</p>
             <p className="text-sm font-bold truncate">Midnight Blend</p>
          </div>
          <div className="bg-surface p-3 rounded-xl">
             <img src="https://picsum.photos/300/300?coffee=6" className="w-full aspect-square rounded-lg object-cover" alt="Bean" />
             <p className="text-[10px] font-bold text-accent uppercase mt-2">Origin Collective</p>
             <p className="text-sm font-bold truncate">Colombia Huila</p>
          </div>
        </div>
      </section>

      <section className="mt-8 px-4 space-y-4">
        <h2 className="text-2xl font-bold mb-2">Discover All</h2>
        {[
          { name: 'Kenya Nyeri AA', roaster: 'Summit Roastery', price: '$24.00', tags: ['Berry', 'Wine'] },
          { name: 'Brazil Cerrado', roaster: 'Vibe Coffee', price: '$22.50', tags: ['Nutty', 'Caramel'] }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
            <img src={`https://picsum.photos/200/200?coffee=${i+7}`} className="w-24 h-24 rounded-xl object-cover" alt="Bag" />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <p className="text-xs font-bold text-teal uppercase">{item.roaster}</p>
                  <p className="text-sm font-bold text-accent">{item.price}</p>
                </div>
                <h4 className="text-lg font-bold leading-tight">{item.name}</h4>
                <div className="flex gap-1.5 mt-2">
                  {item.tags.map(tag => <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{tag}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Marketplace;
