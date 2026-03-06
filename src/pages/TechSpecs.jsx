import { motion } from 'framer-motion';

const specs = [
    {
        title: "Audio Technology",
        details: [
            { label: "Apple-designed dynamic driver", highlighted: true },
            { label: "Pro-level Active Noise Cancellation", highlighted: false },
            { label: "Transparency mode", highlighted: false },
            { label: "Personalised Spatial Audio with dynamic head tracking", highlighted: false },
            { label: "Adaptive EQ", highlighted: false }
        ]
    },
    {
        title: "Sensors",
        details: [
            { label: "Optical sensor (each ear cup)", highlighted: false },
            { label: "Position sensor (each ear cup)", highlighted: false },
            { label: "Case‑detect sensor (each ear cup)", highlighted: false },
            { label: "Accelerometer (each ear cup)", highlighted: false },
            { label: "Gyroscope (left ear cup)", highlighted: false }
        ]
    },
    {
        title: "Chip",
        details: [
            { label: "Apple H1 headphone chip (each ear cup)", highlighted: true }
        ]
    },
    {
        title: "Battery & Charging",
        details: [
            { label: "Up to 20 hours of listening time on a single charge with ANC", highlighted: true },
            { label: "5 minutes = 1.5 hours of listening time", highlighted: false },
            { label: "Charging via USB-C", highlighted: true }
        ]
    }
];

export default function TechSpecs() {
    return (
        <div className="max-w-4xl mx-auto py-48 px-5">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-extrabold mb-16 text-white"
            >
                Technical Specifications
            </motion.h2>

            <div className="space-y-0">
                {specs.map((section, idx) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col md:flex-row py-12 border-b border-white/10"
                    >
                        <div className="w-full md:w-1/3 text-lg font-semibold text-white mb-4">{section.title}</div>
                        <div className="w-full md:w-2/3 text-apple-slate space-y-4">
                            {section.details.map((detail, dIdx) => (
                                <p key={dIdx} className={detail.highlighted ? "text-white font-bold" : ""}>
                                    {detail.label}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
