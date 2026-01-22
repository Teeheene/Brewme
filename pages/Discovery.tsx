
import React from 'react';
import { Link } from 'react-router-dom';

const Discovery: React.FC = () => {
  return (
    <div className="pb-10">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <div className="text-teal flex size-10 items-center justify-center bg-teal/10 rounded-full">
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="flex bg-teal/5 p-1 rounded-full">
          <button className="px-4 py-1.5 rounded-full bg-teal text-white text-xs font-bold">For You</button>
          <button className="px-4 py-1.5 rounded-full text-teal/60 text-xs font-bold">Following</button>
        </div>
        <button className="size-10 flex items-center justify-center text-teal">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Stories */}
      <div className="flex w-full overflow-x-auto no-scrollbar px-4 py-6 gap-4">
        {[
          { label: 'Live Brew', icon: 'coffee_maker', active: true },
          { label: 'Latte Art', icon: 'palette' },
          { label: 'Roasting', icon: 'heat' },
          { label: 'V60 Tips', icon: 'tips_and_updates' },
          { label: 'New Beans', icon: 'eco' }
        ].map((story, i) => (
          <div key={i} className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className={`size-16 rounded-full p-0.5 border-2 ${story.active ? 'border-accent' : 'border-teal/20'}`}>
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                <span className={`material-symbols-outlined text-teal ${story.active ? 'fill-1' : ''}`}>{story.icon}</span>
              </div>
            </div>
            <p className={`text-[11px] font-semibold ${story.active ? 'text-teal' : 'opacity-60'}`}>{story.label}</p>
          </div>
        ))}
      </div>

      {/* Trending */}
      <div className="px-4 pb-6">
        <h2 className="text-xl font-bold mb-4">Trending Now</h2>
        <div className="grid grid-cols-2 gap-3 h-[280px]">
          <Link to="/roaster" className="row-span-2 relative rounded-xl overflow-hidden bg-gray-200">
            <img src="https://picsum.photos/400/800?coffee=1" className="absolute inset-0 w-full h-full object-cover" alt="Trending" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-white text-sm">play_circle</span>
              <span className="text-white text-xs font-semibold">Perfecting the Bloom</span>
            </div>
          </Link>
          <div className="bg-teal text-white p-4 rounded-xl flex flex-col justify-between">
            <span className="material-symbols-outlined opacity-60">lightbulb</span>
            <p className="text-sm font-bold leading-tight">Water Temp Guide for Medium Roasts</p>
          </div>
          <div className="relative rounded-xl overflow-hidden">
             <img src="https://picsum.photos/400/400?coffee=2" className="absolute inset-0 w-full h-full object-cover" alt="Trending" />
             <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>

      {/* Roaster Spotlight */}
      <div className="px-4 pb-8">
        <div className="bg-gradient-to-br from-[#fefaf4] to-[#f4eee6] rounded-xl overflow-hidden shadow-sm border border-teal/5 p-5">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-1">ROASTER OF THE WEEK</span>
              <h3 className="text-2xl font-bold text-teal">Onyx Coffee Lab</h3>
            </div>
            <div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
              <span className="material-symbols-outlined text-teal">local_cafe</span>
            </div>
          </div>
          <p className="text-sm text-teal/70 mb-6 leading-relaxed">
            Masters of the craft in Arkansas, specializing in carbonic maceration and unique fermentations.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(n => (
                <div key={n} className="size-8 rounded-full border-2 border-white bg-gray-300" />
              ))}
              <div className="size-8 rounded-full border-2 border-white bg-teal/10 flex items-center justify-center text-[10px] font-bold text-teal">+12k</div>
            </div>
            <button className="flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full font-bold text-sm">
              Shop Beans <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Community Feed */}
      <div className="px-4 flex flex-col gap-6">
        <h2 className="text-xl font-bold">Community Feed</h2>
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gray-200" />
              <div>
                <p className="text-sm font-bold">sara_brews</p>
                <p className="text-[10px] opacity-60">Home Barista • 2h ago</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-teal">more_horiz</span>
          </div>
          <img src="https://picsum.photos/600/600?coffee=3" className="w-full aspect-square object-cover px-4 rounded-3xl" alt="Post" />
          <div className="p-4">
            <div className="flex items-center gap-4 mb-3">
              <span className="material-symbols-outlined text-accent fill-1">favorite</span>
              <span className="material-symbols-outlined">mode_comment</span>
              <span className="ml-auto material-symbols-outlined">bookmark</span>
            </div>
            <p className="text-sm"><span className="font-bold">sara_brews</span> Morning rituals with the Chemex. Meditation in a cup. <span className="text-teal">#coffeetime</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
