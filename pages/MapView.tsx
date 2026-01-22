
import React from 'react';

const MapView: React.FC = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-white/90 to-transparent">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">coffee</span>
            <h1 className="text-xl font-bold tracking-tight">BeanMap</h1>
          </div>
          <button className="bg-white shadow-sm rounded-full p-2"><span className="material-symbols-outlined">notifications</span></button>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input className="w-full h-12 pl-10 pr-4 bg-white border-none rounded-xl shadow-lg text-sm" placeholder="Search cafes..." />
          </div>
          <button className="bg-primary text-white h-12 w-12 flex items-center justify-center rounded-xl shadow-lg">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar py-1">
          <button className="flex h-9 shrink-0 items-center gap-2 rounded-full bg-primary text-white px-4 text-xs font-semibold shadow-sm">
            <span className="material-symbols-outlined text-sm fill-1">near_me</span> Nearby
          </button>
          {['Open Now', 'Top Rated', 'Roasters'].map(t => (
            <button key={t} className="flex h-9 shrink-0 items-center rounded-full bg-white px-4 text-xs font-medium shadow-sm border border-gray-100">
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-full bg-gray-200 relative">
        <img src="https://picsum.photos/1000/1000?map=1" className="w-full h-full object-cover" alt="Map" />
        
        {/* Map Pins */}
        <div className="absolute top-1/3 left-1/4">
          <div className="bg-primary text-white p-2 rounded-full shadow-xl animate-bounce">
            <span className="material-symbols-outlined text-lg fill-1">local_cafe</span>
          </div>
        </div>
        <div className="absolute top-1/2 right-1/3">
          <div className="bg-teal text-primary p-2 rounded-full shadow-xl">
            <span className="material-symbols-outlined text-lg fill-1">nutrition</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/2">
          <div className="bg-primary text-white p-2 rounded-full shadow-xl">
            <span className="material-symbols-outlined text-lg fill-1">local_cafe</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-0 right-0 p-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex">
          <img src="https://picsum.photos/300/300?cafe=1" className="w-32 h-32 object-cover" alt="Cafe" />
          <div className="flex-1 p-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-sm">Yardstick Coffee</h3>
                <div className="flex items-center text-primary">
                  <span className="material-symbols-outlined text-xs fill-1">star</span>
                  <span className="text-[10px] font-bold ml-0.5">4.8</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 mt-0.5">Legazpi Village, Makati</p>
              <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-md font-bold mt-1 inline-block">Cupping Today</span>
            </div>
            <button className="w-full bg-primary/10 text-primary py-1.5 rounded-lg text-[10px] font-bold">VIEW DETAILS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
