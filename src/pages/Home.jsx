import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Headphones, Shield, Cpu, Zap } from 'lucide-react';

const GLASS_CLASS = "bg-white/5 backdrop-blur-2xl border border-white/10";
const TEXT_GRADIENT_CLASS = "bg-clip-text text-transparent bg-gradient-to-r from-white via-apple-slate to-white/50";

const productImages = {
    max: "/src/assets/airpods_purple.png",
    pro: "/src/assets/airpods_pro.png",
};

const ProductSection = ({ title, subtitle, image, color }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        setTilt({ x: -y, y: x });
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            className="min-h-screen flex flex-col items-center justify-center text-center px-5 relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10 mb-10"
            >
                <h1 className={`text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-${color} to-white/50`}>
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-apple-slate max-w-2xl mx-auto">{subtitle}</p>
            </motion.div>

            <div className="relative w-full max-w-3xl [perspective:2000px] cursor-grab active:cursor-grabbing">
                <motion.div
                    animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                    transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <img src={image} alt={title} className="w-full max-w-[550px] mx-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)] [transform:translateZ(100px)] pointer-events-none" />
                </motion.div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.1)_0%,transparent_70%)] opacity-30 animate-pulse`}></div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, delay, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        onClick={onClick}
        className={`${GLASS_CLASS} p-10 rounded-[40px] hover:bg-white/10 transition-all group cursor-pointer`}
    >
        <div className="w-14 h-14 rounded-full bg-apple-blue/10 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-apple-blue" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-apple-slate leading-relaxed">{desc}</p>
        <div className="mt-8 text-xs font-bold text-apple-blue uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Explore More →</div>
    </motion.div>
);

export default function Home() {
    const [selectedFeature, setSelectedFeature] = useState(null);

    return (
        <main>
            {/* MacBook Style Highlights */}
            <section className="min-h-screen pt-32 px-[10%]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">Get the highlights.</h2>
                    <div className="flex gap-6 text-apple-blue font-semibold text-sm">
                        <button className="hover:underline flex items-center gap-1">Watch the film <Play size={14} fill="currentColor" /></button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 h-[600px]">
                    <motion.div
                        className={`relative rounded-[40px] overflow-hidden group cursor-pointer ${GLASS_CLASS}`}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => setSelectedFeature({ title: 'H1 & H2 Chips', desc: 'The brains behind the boom. Effortless pairing, high-fidelity sound.', img: productImages.max })}
                    >
                        <img src={productImages.max} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2s]" alt="Max" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10">
                            <p className="text-lg font-bold text-apple-blue mb-2">H1 & H2 Chips.</p>
                            <h3 className={`text-3xl font-extrabold ${TEXT_GRADIENT_CLASS}`}>One big, powerful family.</h3>
                        </div>
                    </motion.div>
                    <div className="flex flex-col gap-6">
                        <motion.div
                            className={`h-1/2 relative rounded-[40px] overflow-hidden ${GLASS_CLASS} group cursor-pointer`}
                            onClick={() => setSelectedFeature({ title: 'Smart AI Audio', desc: 'Real-time noise cancellation and transparency modes.', img: productImages.pro })}
                        >
                            <div className="absolute bottom-10 left-10 text-white">
                                <p className="text-lg font-bold text-purple-500 mb-1">AI Integrated.</p>
                                <h3 className="text-2xl font-extrabold">Smart to the core.</h3>
                            </div>
                        </motion.div>
                        <motion.div className={`h-1/2 relative rounded-[40px] overflow-hidden ${GLASS_CLASS} group`} >
                            <div className="absolute bottom-10 left-10 text-white">
                                <p className="text-lg font-bold text-green-500 mb-1">Battery Life.</p>
                                <h3 className="text-2xl font-extrabold">Hit the road, Mac.</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ProductSection
                title="AirPods Max"
                subtitle="Symphonic boom. High‑fidelity audio with a radically original composition."
                image={productImages.max}
                color="apple-slate"
            />

            {/* Performance Section */}
            <section className="max-w-7xl mx-auto px-5 py-40 border-t border-white/5">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight mb-24 text-white"
                >
                    Performance.<br /><span className="text-apple-slate">Two chips. Second to none.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-20">
                    <FeatureCard
                        icon={Cpu}
                        title="H1 Chip"
                        desc="Brings next-generation speed and powerful on-device AI to everyday listeners."
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={Zap}
                        title="H2 Chip"
                        desc="The power for 2x more Active Noise Cancellation and adaptive transparency."
                        delay={0.3}
                    />
                </div>
            </section>

            <ProductSection
                title="AirPods Pro"
                subtitle="Quiet the noise. Magic in the ears. 2x more Active Noise Cancellation."
                image={productImages.pro}
                color="apple-blue"
            />

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-5 backdrop-blur-3xl bg-black/60"
                        onClick={() => setSelectedFeature(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className={`${GLASS_CLASS} p-12 rounded-[50px] max-w-3xl w-full relative`}
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedFeature(null)} className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"><X size={24} /></button>
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <img src={selectedFeature.img} className="w-72 drop-shadow-2xl" alt="Product" />
                                <div className="text-white">
                                    <h2 className="text-4xl font-bold mb-6">{selectedFeature.title}</h2>
                                    <p className="text-apple-slate leading-relaxed text-lg mb-8">{selectedFeature.desc}</p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-sm"><Shield className="text-apple-blue" size={20} /> Pro-level Security & Audio</div>
                                        <div className="flex items-center gap-4 text-sm"><Headphones className="text-apple-blue" size={20} /> Personalised Spatial Audio</div>
                                    </div>
                                    <button className="mt-12 px-12 py-4 bg-apple-blue text-white font-bold rounded-full w-full hover:brightness-110 transition-all shadow-xl shadow-apple-blue/20">Experience Now</button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
