import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Play, X, Headphones, Shield, Cpu, Zap, Volume2, Bluetooth, Battery, Sparkles } from 'lucide-react';

const GLASS_CLASS = "bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08]";
const TEXT_GRADIENT_CLASS = "bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40";

const productImages = {
    max: "/src/assets/airpods_purple.png",
    pro: "/src/assets/airpods_pro.png",
};

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-[60px] left-0 right-0 h-[2px] bg-apple-blue origin-left z-[60]"
            style={{ scaleX }}
        />
    );
};

const ProductSection = ({ title, subtitle, image, color }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
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
            className="min-h-screen flex flex-col items-center justify-center text-center px-5 relative overflow-hidden py-20"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="z-10 mb-16"
            >
                <h1 className={`text-7xl md:text-9xl font-black tracking-tighter mb-6 ${TEXT_GRADIENT_CLASS}`}>
                    {title}
                </h1>
                <p className="text-xl md:text-3xl font-medium text-apple-slate/80 max-w-3xl mx-auto leading-tight">
                    {subtitle}
                </p>
            </motion.div>

            <div className="relative w-full max-w-4xl perspective-[2500px] cursor-pointer">
                <motion.div
                    animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                    transition={{ type: 'spring', stiffness: 80, damping: 25 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full max-w-[650px] mx-auto drop-shadow-[0_60px_120px_rgba(0,113,227,0.3)] [transform:translateZ(150px)] pointer-events-none filter brightness-110"
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.15)_0%,transparent_70%)] opacity-40 blur-[100px]`}></div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, delay, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        onClick={onClick}
        className={`${GLASS_CLASS} p-12 rounded-[50px] hover:bg-white/[0.08] transition-all group cursor-pointer border-white/10 hover:border-white/20`}
    >
        <div className="w-16 h-16 rounded-3xl bg-apple-blue/10 flex items-center justify-center mb-10 border border-white/5 group-hover:scale-110 group-hover:bg-apple-blue/20 transition-all duration-500">
            <Icon className="w-8 h-8 text-apple-blue" />
        </div>
        <h3 className="text-3xl font-bold mb-5 tracking-tight">{title}</h3>
        <p className="text-apple-slate/90 leading-relaxed text-lg">{desc}</p>
        <div className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-apple-blue uppercase tracking-[0.2em] group-hover:gap-4 transition-all hover:opacity-80">
            Discover More <Sparkles size={16} />
        </div>
    </motion.div>
);

export default function Home() {
    const [selectedFeature, setSelectedFeature] = useState(null);

    return (
        <main className="selection:bg-apple-blue/30 overflow-x-hidden">
            <ScrollProgress />

            {/* Hero Highlights */}
            <section className="min-h-screen pt-40 px-[8%] relative">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-24 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-4">
                            Symphonic<br /><span className="text-apple-slate/60">Sound. Redefined.</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        className="flex gap-8 text-apple-blue font-bold text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <button className="hover:text-white transition-colors flex items-center gap-3 group">
                            Watch the film <div className="p-2 rounded-full border border-apple-blue group-hover:bg-apple-blue group-hover:text-white transition-all"><Play size={16} fill="currentColor" /></div>
                        </button>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 min-h-[700px] mb-40">
                    <motion.div
                        className={`lg:col-span-7 relative rounded-[50px] overflow-hidden group cursor-pointer ${GLASS_CLASS} border-white/20`}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => setSelectedFeature({
                            title: 'The Apple Ecosystem',
                            desc: 'Instant pairing, automatic switching between devices, and audio sharing.',
                            img: productImages.max,
                            features: ['Magic Pairing', 'Seamless Switching', 'Listen Together']
                        })}
                    >
                        <div className="absolute inset-0 bg-[url('/src/assets/airpods_purple.png')] bg-center bg-no-repeat opacity-20 scale-150 group-hover:scale-[1.6] transition-transform duration-[4s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <div className="absolute bottom-16 left-16 z-10">
                            <span className="inline-block px-4 py-1 rounded-full bg-apple-blue/20 text-apple-blue text-xs font-bold uppercase tracking-widest mb-6">Innovative</span>
                            <h3 className={`text-4xl md:text-5xl font-black mb-4 ${TEXT_GRADIENT_CLASS}`}>Pure audio magic.</h3>
                            <p className="text-apple-slate text-lg max-w-md">Every detail, from canopy to cushions, has been designed for an uncompromising fit.</p>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <motion.div
                            className={`flex-1 relative rounded-[40px] overflow-hidden ${GLASS_CLASS} group cursor-pointer hover:border-purple-500/30 transition-colors border-white/10`}
                            onClick={() => setSelectedFeature({
                                title: 'Spatial Audio',
                                desc: 'Personalized Spatial Audio with dynamic head tracking places sound all around you.',
                                img: productImages.pro,
                                features: ['Dynamic Head Tracking', 'Dolby Atmos', 'Adaptive EQ']
                            })}
                        >
                            <div className="absolute inset-x-0 bottom-12 left-12">
                                <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-3 block">Immersive</span>
                                <h3 className="text-3xl font-black text-white">Surrounded by sound.</h3>
                            </div>
                        </motion.div>
                        <motion.div className={`flex-1 relative rounded-[40px] overflow-hidden ${GLASS_CLASS} group border-white/10 hover:border-green-500/30 transition-colors`} >
                            <div className="absolute inset-x-0 bottom-12 left-12">
                                <span className="text-green-500 font-bold tracking-widest text-sm uppercase mb-3 block">Reliable</span>
                                <h3 className="text-3xl font-black text-white">All day, all night.</h3>
                                <p className="text-apple-slate text-sm mt-2">Up to 20 hours of listening time.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stat Icons Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-20 border-t border-white/5">
                    {[
                        { icon: Headphones, label: "Hi-Res Audio" },
                        { icon: Bluetooth, label: "BT 5.3" },
                        { icon: Battery, label: "20h Battery" },
                        { icon: Volume2, label: "Active ANC" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 text-apple-slate hover:text-white transition-colors">
                            <item.icon size={32} strokeWidth={1.5} />
                            <span className="text-xs font-bold uppercase tracking-[0.3em]">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <ProductSection
                title="AirPods Max"
                subtitle="High-fidelity audio. Active Noise Cancellation with Transparency mode."
                image={productImages.max}
                color="apple-slate"
            />

            {/* Performance Detail */}
            <section className="py-60 px-[8%] bg-gradient-to-b from-black to-apple-gray/20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center text-center mb-40"
                    >
                        <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">Engineered for<br /><span className="text-apple-blue">the incredible.</span></h2>
                        <div className="w-24 h-[2px] bg-apple-blue/40"></div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-32">
                        <FeatureCard
                            icon={Cpu}
                            title="H1 & H2 Power"
                            desc="The Apple-designed H1 and H2 chips in each ear cup use computational audio to create a breakthrough listening experience."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Adaptive EQ"
                            desc="Inward-facing microphones measure what you're hearing, then adjust the frequencies of your music for a rich, consistent experience."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            <ProductSection
                title="AirPods Pro"
                subtitle="Small size. Big noise cancellation. Now with even more power."
                image={productImages.pro}
                color="apple-blue"
            />

            {/* Feature Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-8 backdrop-blur-[60px] bg-black/80"
                        onClick={() => setSelectedFeature(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className={`${GLASS_CLASS} p-12 lg:p-20 rounded-[80px] max-w-5xl w-full relative border-white/20`}
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedFeature(null)} className="absolute top-12 right-12 text-white/30 hover:text-white transition-all bg-white/5 p-3 rounded-full hover:rotate-90"><X size={28} /></button>

                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div className="relative group">
                                    <motion.img
                                        src={selectedFeature.img}
                                        className="w-full max-w-[400px] mx-auto drop-shadow-[0_40px_80px_rgba(0,113,227,0.4)]"
                                        alt="Product"
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 blur-2xl rounded-full -z-10" />
                                </div>

                                <div className="text-white">
                                    <span className="text-apple-blue font-black tracking-widest text-xs uppercase mb-6 block">Deep Dive</span>
                                    <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">{selectedFeature.title}</h2>
                                    <p className="text-apple-slate leading-relaxed text-xl mb-12">{selectedFeature.desc}</p>

                                    <div className="grid gap-6 mb-16">
                                        {(selectedFeature.features || ['Cinema-like sound', 'Adaptive fit']).map((f, i) => (
                                            <div key={i} className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5">
                                                <div className="p-3 rounded-2xl bg-apple-blue/10"><Shield className="text-apple-blue" size={24} /></div>
                                                <span className="font-bold text-lg">{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="group relative overflow-hidden px-16 py-6 bg-white text-black font-black rounded-full w-full lg:w-auto hover:bg-white/90 transition-all text-xl shadow-2xl shadow-white/10 active:scale-95">
                                        <span className="relative z-10">Experience Now</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-apple-blue to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

