import { motion } from 'framer-motion';

const products = [
    {
        name: "AirPods Pro 2",
        price: "From $249",
        image: "/src/assets/airpods_pro.png",
        features: [
            { label: "2x Active Noise Cancellation", highlighted: true },
            { label: "Adaptive Audio", highlighted: false },
            { label: "Personalised Spatial Audio", highlighted: false },
            { label: "USB-C Charging Case", highlighted: false },
            { label: "Up to 6 hours listening time", highlighted: false }
        ]
    },
    {
        name: "AirPods Max",
        price: "From $549",
        image: "/src/assets/airpods_purple.png",
        featured: true,
        features: [
            { label: "Pro-level Active Noise Cancellation", highlighted: true },
            { label: "Transparency mode", highlighted: false },
            { label: "Personalised Spatial Audio", highlighted: false },
            { label: "USB-C Charging", highlighted: false },
            { label: "Up to 20 hours listening time", highlighted: false }
        ]
    },
    {
        name: "AirPods (3rd gen)",
        price: "From $169",
        icon: "🎧",
        features: [
            { label: "Personalised Spatial Audio", highlighted: false },
            { label: "Sweat and water resistant", highlighted: false },
            { label: "Lightning or MagSafe Case", highlighted: false },
            { label: "Up to 6 hours listening time", highlighted: false }
        ]
    }
];

export default function Compare() {
    return (
        <div className="max-w-7xl mx-auto py-48 px-5 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-extrabold mb-24 text-white"
            >
                Which AirPods are right for you?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-[40px] p-10 hover:bg-white/10 transition-all group relative"
                    >
                        {product.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-apple-blue text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest">
                                Featured
                            </div>
                        )}

                        <div className="h-[250px] flex items-center justify-center mb-10 overflow-hidden">
                            {product.image ? (
                                <img src={product.image} alt={product.name} className="w-full max-w-[200px] drop-shadow-2xl transition-transform group-hover:scale-110" />
                            ) : (
                                <div className="text-6xl opacity-50 transition-transform group-hover:scale-110">{product.icon}</div>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
                        <p className="text-apple-slate mb-10 text-sm">{product.price}</p>

                        <div className="space-y-4 text-left text-sm text-apple-slate border-t border-white/5 pt-8">
                            {product.features.map((feature, fIdx) => (
                                <p key={fIdx} className={feature.highlighted ? "font-semibold text-white" : ""}>
                                    {feature.label}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
