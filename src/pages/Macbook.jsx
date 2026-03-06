import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Cpu, Zap, Battery, Monitor, HardDrive } from 'lucide-react';
import macbookPro from '../assets/macbook_pro.png';
import heroVideo from '../assets/Make_landpage_video_mac_4e186b2a61.mp4';

const GLASS_CLASS = "bg-white/10 backdrop-blur-xl border border-white/20";
const TEXT_GRADIENT_CLASS = "bg-clip-text text-transparent bg-gradient-to-r from-white via-apple-slate to-white/30";

const ProductVisual = ({ image }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 30;
        const y = (e.clientY - top - height / 2) / 30;
        setTilt({ x: -y, y: x });
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            className="min-h-screen flex flex-col items-center justify-center p-10 relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="z-10 text-center mb-20"
            >
                <h2 className="text-7xl md:text-9xl font-black tracking-tight text-white mb-6">M4. Ready for more.</h2>
                <p className="text-xl md:text-2xl text-apple-slate max-w-3xl mx-auto">The most advanced chip ever in a personal computer. Built for Apple Intelligence.</p>
            </motion.div>

            <div className="relative w-full max-w-5xl [perspective:3000px]">
                <motion.div
                    animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <img src={image} alt="MacBook Pro M4 - High Performance Laptop" className="w-full drop-shadow-[0_100px_150px_rgba(0,0,0,0.9)] [transform:translateZ(100px)] pointer-events-none" />
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] -z-10 bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.1)_0%,transparent_70%)] opacity-30 blur-2xl"></div>
            </div>
        </section>
    );
};

const HighlightCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        className={`${GLASS_CLASS} p-12 rounded-[50px] group hover:bg-white/20 transition-all duration-500`}
    >
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 group-hover:bg-apple-blue/20 transition-all">
            <Icon className="w-8 h-8 text-white group-hover:text-apple-blue" />
        </div>
        <h3 className="text-3xl font-bold mb-6 text-white">{title}</h3>
        <p className="text-apple-slate text-lg leading-relaxed">{desc}</p>
    </motion.div>
);

export default function Macbook() {
    return (
        <main className="bg-black text-white">
            {/* Cinematic Video Hero */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-1000 will-change-transform"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

                <div className="relative z-10 text-center px-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-4"
                    >
                        MacBook Pro
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl font-light text-apple-silver tracking-tight"
                    >
                        A monster for any task.
                    </motion.p>
                </div>
            </section>

            {/* Performance Grid */}
            <section className="max-w-7xl mx-auto px-10 py-40">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-32"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Power house.<br /><span className="text-apple-slate">Up to 24 hours of battery life.</span></h2>
                    <p className="text-xl md:text-2xl text-apple-slate max-w-3xl">With the M4 family of chips, MacBook Pro delivers unprecedented performance whether you’re plugged in or on battery.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <HighlightCard
                        icon={Cpu}
                        title="M4, M4 Pro, M4 Max"
                        desc="Built on industry-leading 3-nanometer technology. Faster CPU and GPU performance across the board."
                        delay={0.1}
                    />
                    <HighlightCard
                        icon={Monitor}
                        title="Liquid Retina XDR"
                        desc="The world’s best laptop display. With up to 1,600 nits peak brightness and ProMotion technology."
                        delay={0.2}
                    />
                    <HighlightCard
                        icon={Battery}
                        title="Longest Battery Ever"
                        desc="Up to 24 hours of video playback. Fast charge to 50% in just 30 minutes."
                        delay={0.3}
                    />
                </div>
            </section>

            {/* 3D Showcase */}
            <ProductVisual image={macbookPro} />

            {/* Feature Showcase */}
            <section className="py-40 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <p className="text-apple-blue font-bold text-xl mb-4">Display technology.</p>
                        <h2 className="text-5xl md:text-7xl font-bold mb-10">Nano-texture.<br />Less glare.</h2>
                        <p className="text-apple-slate text-xl leading-relaxed mb-8">
                            A new nano-texture display option reduces glare and reflections in challenging lighting environments — while maintaining stunning image quality.
                        </p>
                        <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-apple-silver transition-colors">Learn about XDR</button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className={`${GLASS_CLASS} rounded-[60px] p-2 aspect-video overflow-hidden`}
                    >
                        <img src={macbookPro} alt="MacBook Pro Liquid Retina XDR Display Detail" className="w-full h-full object-cover scale-150 relative -top-20" />
                    </motion.div>
                </div>
            </section>

            {/* Buying Footer */}
            <section className="py-40 text-center px-10">
                <h2 className="text-5xl md:text-8xl font-black mb-12 text-gradient">Which one is right for you?</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center mt-20">
                    <button className="px-12 py-5 bg-apple-blue text-white font-bold rounded-full text-xl hover:brightness-110 shadow-2xl shadow-apple-blue/20">Buy MacBook Pro</button>
                    <button className="px-12 py-5 glass rounded-full text-xl hover:bg-white/10 transition-all font-bold">Compare models</button>
                </div>
            </section>
        </main>
    );
}
