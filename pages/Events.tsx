
import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="pb-10">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <span className="material-symbols-outlined">search</span>
        <h1 className="text-lg font-bold font-display">Events & Education</h1>
        <span className="material-symbols-outlined">tune</span>
      </header>

      <div className="px-4 py-3">
        <div className="relative h-[220px] rounded-xl overflow-hidden shadow-lg">
          <img src="https://picsum.photos/800/600?barista=1" className="absolute inset-0 w-full h-full object-cover" alt="Feature" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 rounded-full mb-2 inline-block">Featured Event</span>
            <h2 className="text-white text-2xl font-bold font-display">Manila Latte Art Throwdown 2024</h2>
            <p className="text-white/80 text-sm mt-1">BGC Arts Center • Oct 24, 2023</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
        {['All', 'Cupping', 'Workshops', 'Talks'].map((f, i) => (
          <div key={i} className={`h-9 shrink-0 flex items-center px-5 rounded-full text-sm font-semibold ${i === 0 ? 'bg-primary text-white' : 'bg-white border border-gray-100'}`}>
            {f}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 pt-6 pb-2">
        <h3 className="text-lg font-bold font-display">Schedule</h3>
        <button className="text-primary text-sm font-bold">View full</button>
      </div>

      <div className="px-4 py-3 flex gap-3 overflow-x-auto no-scrollbar">
        {[20, 21, 22, 23, 24, 25].map((d, i) => (
          <div key={d} className={`flex flex-col items-center gap-1 min-w-[50px] py-3 rounded-2xl border ${i === 2 ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-gray-100'}`}>
            <span className={`text-[10px] font-bold uppercase ${i === 2 ? 'opacity-100' : 'opacity-40'}`}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}
            </span>
            <span className="text-sm font-bold">{d}</span>
          </div>
        ))}
      </div>

      <div className="px-4 space-y-4 mt-4">
        {[
          { title: 'Specialty Cupping Session', price: '₱450', loc: 'Yardstick, Makati', time: '10:00 AM' },
          { title: 'Barista Basics Workshop', price: '₱1,200', loc: 'EDSA BDG, Pasig', time: '02:00 PM' }
        ].map((ev, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-gray-100">
            <img src={`https://picsum.photos/200/200?event=${i+10}`} className="size-20 rounded-xl object-cover shrink-0" alt="Event" />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm leading-tight font-display">{ev.title}</h4>
                  <span className="text-primary font-bold text-sm">{ev.price}</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> {ev.loc}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> {ev.time}
                </p>
              </div>
              <button className="bg-primary text-white text-[10px] font-bold py-2 px-4 rounded-full self-end mt-2">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
