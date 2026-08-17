import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Act1 from './pages/act1';
import Act2 from './pages/act2';
import Act3 from './pages/act3';
import Act4 from './pages/act4';
import Act5 from './pages/act5';

export default function App() {
  const navItems = [
    { name: 'Activity 1', path: '/act1' },
    { name: 'Activity 2', path: '/act2' },
    { name: 'Activity 3', path: '/act3' },
    { name: 'Activity 4', path: '/act4' },
    { name: 'Activity 5', path: '/act5' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-[#f4f7fa] flex flex-col font-sans">
        <header className="bg-white border-b border-slate-100 shadow-xs sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#4f36f6] rounded-xl text-white font-bold text-lg flex items-center justify-center shadow-xs">
                R
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                My React Activity Portal
              </span>
            </div>
            <nav className="flex items-center space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-[#4f36f6] text-white px-5 py-2.5 rounded-xl font-bold text-base shadow-xs transition-all'
                      : 'text-slate-600 hover:text-slate-900 px-4 py-2.5 font-medium text-base transition-all'
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/act1" element={<Act1 />} />
            <Route path="/act2" element={<Act2 />} />
            <Route path="/act3" element={<Act3 />} />
            <Route path="/act4" element={<Act4 />} />
            <Route path="/act5" element={<Act5 />} />
            <Route path="*" element={<Navigate to="/act1" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
