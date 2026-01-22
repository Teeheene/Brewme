
import React from 'react';
import { MemoryRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Discovery from './pages/Discovery';
import Journal from './pages/Journal';
import Marketplace from './pages/Marketplace';
import Events from './pages/Events';
import BrewLog from './pages/BrewLog';
import MapView from './pages/MapView';
import Subscription from './pages/Subscription';
import RoasterProfile from './pages/RoasterProfile';

const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-md mx-auto bg-background min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        <main className="flex-1 overflow-y-auto no-scrollbar">
          <Routes>
            <Route path="/" element={<Discovery />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/beans" element={<Marketplace />} />
            <Route path="/society" element={<Events />} />
            <Route path="/profile" element={<Subscription />} />
            <Route path="/brew-log" element={<BrewLog />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/roaster" element={<RoasterProfile />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  );
};

const Navigation: React.FC = () => {
  const location = useLocation();
  const hideNavPaths = ['/brew-log'];
  if (hideNavPaths.includes(location.pathname)) return null;

  const links = [
    { path: '/', icon: 'explore', label: 'Discovery' },
    { path: '/journal', icon: 'book', label: 'Journal' },
    { path: '/beans', icon: 'potted_plant', label: 'Beans' },
    { path: '/society', icon: 'group', label: 'Social' },
    { path: '/profile', icon: 'person', label: 'Profile' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-lg border-t border-gray-100 px-6 py-4 pb-8 flex justify-between items-center z-50">
      {links.map((link) => (
        <Link 
          key={link.path} 
          to={link.path} 
          className={`flex flex-col items-center gap-1 ${location.pathname === link.path ? 'text-teal' : 'text-gray-400'}`}
        >
          <span className={`material-symbols-outlined ${location.pathname === link.path ? 'fill-1' : ''}`}>
            {link.icon}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">{link.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default App;
