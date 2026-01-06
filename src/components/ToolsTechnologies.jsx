import React from "react";
import { motion } from "framer-motion";

const skills = [
    "SAS Programming",
    "R Programming",
    "CDISC (SDTM / ADaM)",
    "GCP Guidelines",
    "Statistical Modeling",
    "Data Review & QC",
    "Clinical Study Reports",
    "Define.xml",
    "TLF Generation"
];

const ToolsTechnologies = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/backgrounds/tools.png)',
                    opacity: 0.5,
                }}
            />
            
            {/* Black Translucent Overlay with Soft Gradient and Blur */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/58 to-black/60 backdrop-blur-md pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4">
                        Tools & Technologies
                    </h2>
                    <p className="text-lg text-white/90 font-light max-w-2xl mx-auto">
                        Core technical competencies supporting clinical research and analysis.
                    </p>
                </motion.div>

                {/* Grid Layout: two columns on small/mobile, increase columns on larger screens */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-stretch">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                            className="group flex"
                        >
                            <div className="relative w-full bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] cursor-default overflow-hidden"
                            >
                                {/* Frosted Glass Border Glow on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                                
                                {/* Border Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(100,150,255,0.15)]" />
                                
                                <span className="relative block text-slate-900 font-semibold tracking-tight text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                                    {skill}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ToolsTechnologies;
