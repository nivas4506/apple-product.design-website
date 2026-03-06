import { motion } from 'framer-motion';
import { Check, Minus, Headphones, Smartphone, Zap, Volume2, Bluetooth, Battery, Shield } from 'lucide-react';

const specsData = [
    {
        category: "Audio Technology",
        features: [
            { name: "Apple-designed dynamic driver", max: true, pro: true },
            { name: "Active Noise Cancellation", max: "Pro-level", pro: "2x more" },
            { name: "Transparency mode", max: true, pro: "Adaptive" },
            { name: "Personalised Spatial Audio", max: "with dynamic head tracking", pro: "with dynamic head tracking" },
            { name: "Adaptive EQ", max: true, pro: true },
            { name: "Vent system for pressure equalisation", max: true, pro: true },
        ]
    },
    {
        category: "Sensors",
        features: [
            { name: "Optical sensor", max: "Each ear cup", pro: "Skin-detect" },
            { name: "Position/Motion sensor", max: true, pro: true },
            { name: "Case‑detect sensor", max: true, pro: "MagSafe Case" },
            { name: "Accelerometer", max: true, pro: true },
            { name: "Gyroscope", max: "Left ear cup", pro: true },
        ]
    },
    {
        category: "Chip",
        features: [
            { name: "Headphone Chip", max: "Apple H1 (x2)", pro: "Apple H2" },
            { name: "Charging Case Chip", max: "None", pro: "Apple U1 (Precision Finding)" },
        ]
    },
    {
        category: "Battery & Charging",
        features: [
            { name: "Listening time", max: "Up to 20 hours", pro: "Up to 6 hours" },
            { name: "With Charging Case", max: "Smart Case (storage only)", pro: "Up to 30 hours" },
            { name: "Charging Port", max: "USB-C / Lightning", pro: "USB-C / MagSafe" },
            { name: "Quick Charge", max: "5 min = 1.5 hrs", pro: "5 min = 1 hr" },
        ]
    },
    {
        category: "Dimensions & Weight",
        features: [
            { name: "Height", max: "187.3 mm", pro: "30.9 mm" },
            { name: "Width", max: "168.6 mm", pro: "21.8 mm" },
            { name: "Depth", max: "83.4 mm", pro: "24.0 mm" },
            { name: "Weight", max: "384.8 grams", pro: "5.3 grams (each)" },
        ]
    }
];

const SpecIcon = ({ val }) => {
    if (val === true) return <Check className="text-apple-blue w-5 h-5 mx-auto" />;
    if (val === false) return <Minus className="text-white/10 w-5 h-5 mx-auto" />;
    return <span className="text-sm font-medium">{val}</span>;
};

export default function TechSpecs() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-60 px-[5%]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">
                        Compare Specs.
                    </h1>
                    <p className="text-xl md:text-2xl text-apple-slate font-medium">Detailed breakdown of the most advanced audio gear.</p>
                </motion.div>

                {/* Table Header */}
                <div className="sticky top-[60px] z-40 bg-black/80 backdrop-blur-2xl border-y border-white/10 grid grid-cols-4 py-10 px-8 items-center">
                    <div className="col-span-2 text-xl font-bold">Hardware & Features</div>
                    <div className="text-center">
                        <p className="text-sm font-black uppercase tracking-widest text-apple-blue mb-2">Flagship</p>
                        <h3 className="text-lg font-bold">AirPods Max</h3>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black uppercase tracking-widest text-purple-500 mb-2">Pro Portable</p>
                        <h3 className="text-lg font-bold">AirPods Pro 2</h3>
                    </div>
                </div>

                {/* Spec Body */}
                <div className="space-y-20 mt-20">
                    {specsData.map((section, sidx) => (
                        <motion.section
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] rounded-[40px] border border-white/5 overflow-hidden"
                        >
                            <div className="bg-white/5 px-8 py-6">
                                <h2 className="text-2xl font-black tracking-tight">{section.category}</h2>
                            </div>
                            <div className="divide-y divide-white/5">
                                {section.features.map((item, fidx) => (
                                    <div key={fidx} className="grid grid-cols-4 px-8 py-8 items-center hover:bg-white/[0.01] transition-colors">
                                        <div className="col-span-2 text-apple-slate font-medium pr-10">{item.name}</div>
                                        <div className="text-center text-white"><SpecIcon val={item.max} /></div>
                                        <div className="text-center text-white"><SpecIcon val={item.pro} /></div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Accessibility / In the Box (Condensed) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-40 grid md:grid-cols-2 gap-10"
                >
                    <div className="bg-white/5 p-12 rounded-[50px] border border-white/10">
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4"><Smartphone /> In the Box</h3>
                        <ul className="space-y-4 text-apple-slate">
                            <li className="flex justify-between border-b border-white/5 pb-4"><span>AirPods Max</span> <span className="text-white">Smart Case, USB-C Cable</span></li>
                            <li className="flex justify-between"><span>AirPods Pro 2</span> <span className="text-white">MagSafe Case, Silicone Tips (4 sizes)</span></li>
                        </ul>
                    </div>
                    <div className="bg-white/5 p-12 rounded-[50px] border border-white/10">
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4"><Zap /> System Requirements</h3>
                        <p className="text-apple-slate leading-relaxed">
                            iPhone models with the latest version of iOS; iPad models with the latest version of iPadOS; Apple Watch models with the latest version of watchOS; Mac models with the latest version of macOS.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

