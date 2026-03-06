import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import TechSpecs from './pages/TechSpecs';
import Compare from './pages/Compare';
import Macbook from './pages/Macbook';

const Navbar = () => {
    const location = useLocation();
    const navItems = [
        { label: 'AirPods', path: '/' },
        { label: 'MacBook', path: '/macbook' },
        { label: 'Tech Specs', path: '/tech-specs' },
        { label: 'Compare', path: '/compare' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full h-[60px] z-50 flex items-center justify-between bg-black/80 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-white/10 px-[8%]">
            <Link to="/" className="text-sm font-black tracking-tighter text-white hover:opacity-80 transition-opacity">
                PRODUCT STORE
            </Link>

            <ul className="flex gap-10 list-none text-[10px] font-medium">
                {navItems.map(item => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className={`transition-colors uppercase tracking-widest ${location.pathname === item.path ? 'text-white' : 'text-apple-slate hover:text-white'}`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <button className="bg-white text-black text-[10px] font-black px-6 py-2 rounded-full hover:bg-apple-silver transition-all active:scale-95">
                BUY
            </button>
        </nav>
    );
};

const MorphingBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-20 blur-3xl mix-blend-screen" viewBox="0 0 200 200">
            <motion.path
                fill="#0071e3"
                animate={{
                    d: [
                        "M44.7,-76.4C58.1,-69.2,70.3,-59,78.4,-46.1C86.5,-33.2,90.5,-17.6,89.5,-2.4C88.5,12.8,82.5,27.6,73.5,41C64.5,54.4,52.5,66.4,38.3,73.1C24.1,79.8,7.7,81.2,-8.1,79.8C-23.9,78.4,-39.1,74.2,-52.3,66.2C-65.5,58.2,-76.7,46.4,-82.1,32.7C-87.5,19,-87.1,3.4,-84.6,-11.5C-82.1,-26.4,-77.5,-40.6,-68.2,-51.9C-58.9,-63.2,-44.9,-71.6,-31.1,-78.2C-17.3,-84.8,-3.7,-89.6,10.5,-89.4C24.7,-89.2,33.3,-83.6,44.7,-76.4Z",
                        "M41.5,-73.4C54.1,-67.2,65,-57.4,73.1,-45.3C81.2,-33.2,86.5,-18.8,87.4,-4.1C88.3,10.6,84.8,25.6,75.9,38C67,50.3,52.7,60.1,37.3,67.6C21.9,75.1,5.4,80.4,-11.9,79.2C-29.2,78,-47.3,70.3,-60.5,57.4C-73.7,44.5,-82,26.4,-84.4,8C-86.8,-10.4,-83.3,-29.1,-73.4,-44.2C-63.5,-59.3,-47.2,-70.8,-31.5,-76.5C-15.8,-82.2,-0.7,-82.1,13.7,-80.4C28.1,-78.7,31.9,-79.6,41.5,-73.4Z",
                        "M44.7,-76.4C58.1,-69.2,70.3,-59,78.4,-46.1C86.5,-33.2,90.5,-17.6,89.5,-2.4C88.5,12.8,82.5,27.6,73.5,41C64.5,54.4,52.5,66.4,38.3,73.1C24.1,79.8,7.7,81.2,-8.1,79.8C-23.9,78.4,-39.1,74.2,-52.3,66.2C-65.5,58.2,-76.7,46.4,-82.1,32.7C-87.5,19,-87.1,3.4,-84.6,-11.5C-82.1,-26.4,-77.5,-40.6,-68.2,-51.9C-58.9,-63.2,-44.9,-71.6,-31.1,-78.2C-17.3,-84.8,-3.7,-89.6,10.5,-89.4C24.7,-89.2,33.3,-83.6,44.7,-76.4Z"
                    ]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                transform="translate(100 100)"
            />
        </svg>
    </div>
);

export default function App() {
    return (
        <Router>
            <div className="relative min-h-screen bg-black overflow-x-hidden">
                <Navbar />
                <MorphingBackground />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/macbook" element={<Macbook />} />
                    <Route path="/tech-specs" element={<TechSpecs />} />
                    <Route path="/compare" element={<Compare />} />
                </Routes>

                <footer className="py-32 text-center border-t border-white/5 text-apple-slate text-[10px] tracking-[0.2em] uppercase">
                    <p>&copy; 2026 Product Store. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}
