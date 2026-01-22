
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoasterProfile: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background min-h-screen pb-24">
      <header className="fixed top-0 z-50 w-full max-w-md bg-white/80 backdrop-blur-md">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)} className="size-12 flex items-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="font-display uppercase tracking-widest text-[10px] font-bold">August Edition</h2>
          <span className="material-symbols-outlined size-12 flex items-center justify-end">share</span>
        </div>
      </header>

      <div className="pt-16">
        <div className="relative min-h-[500px] flex flex-col justify-end p-6">
          <img src="https://picsum.photos/800/1200?roaster=1" className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative z-10 flex flex-col gap-2">
            <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 w-fit rounded-full">Spotlight Roaster</span>
            <h1 className="text-white text-[42px] font-bold font-serif italic leading-none">Hermanos Coffee</h1>
            <p className="text-white/80 text-sm tracking-wide uppercase">Benguet, Philippines</p>
          </div>
        </div>

        <div className="px-4 pt-10">
          <h1 className="text-3xl font-bold font-serif">The Heart of the Highlands</h1>
          <div className="w-16 h-1 bg-primary mt-4" />
        </div>

        <div className="px-4 py-8">
          <p className="text-lg leading-relaxed mb-6 drop-cap font-serif italic">
            Hermanos Coffee began with a simple mission: to bridge the gap between high-altitude farms and bustling cafes. Their story is one of tradition and innovation.
          </p>
          <p className="text-lg leading-relaxed font-serif">
            For over a decade, they have worked directly with indigenous farmers to ensure fair practices and exceptional quality in every cup.
          </p>
        </div>

        <div className="px-8 py-10 my-4 bg-primary/10 border-l-4 border-primary italic">
          <p className="text-primary text-2xl font-serif leading-tight">"We don't just roast beans; we preserve the mountain's legacy in every brew."</p>
          <p className="mt-4 font-bold text-xs uppercase tracking-widest">— Mateo Santos, Head Roaster</p>
        </div>

        <div className="px-4 py-8">
          <h2 className="text-2xl font-bold font-serif mb-6">Signature Beans</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {[
              { name: 'Mt. Apo Single Origin', price: '₱650', note: 'Cacao, Plum' },
              { name: 'Laguna Dark Roast', price: '₱580', note: 'Tobacco, Molasses' }
            ].map((bean, i) => (
              <div key={i} className="min-w-[240px] flex flex-col gap-3">
                <img src={`https://picsum.photos/400/500?coffee=${i+20}`} className="w-full aspect-[4/5] object-cover rounded-lg" alt="Bean" />
                <div>
                  <h3 className="font-serif text-xl font-bold">{bean.name}</h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider">Natural Process</p>
                  <p className="text-sm text-gray-500 mt-1">Notes: {bean.note}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-bold">{bean.price}</span>
                    <button className="bg-primary text-white p-2 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoasterProfile;
