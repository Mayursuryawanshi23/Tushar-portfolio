import React, { useState } from "react";
import { motion } from "framer-motion";

const areas = [
    { title: "Arthritis", phase: "Phase III", imageSrc: "/TherapeuticAeasImages/arthritis.png" },
    { title: "Hypertension", phase: "Phase III", imageSrc: "/TherapeuticAeasImages/hypertension.png" },
    { title: "Dyslipidemia", phase: "Phase II", imageSrc: "/TherapeuticAeasImages/Dyslipidemia.png" },
    { title: "Malaria", phase: "Phase I", imageSrc: "/TherapeuticAeasImages/malaria.png" },
    { title: "Nutrition", phase: "Observational", imageSrc: "/TherapeuticAeasImages/nutrition.png" },
    { title: "Oncology", phase: "Phase I - III", imageSrc: "/TherapeuticAeasImages/oncology.png" },
    { title: "Inflammation", phase: "Phase I - III", imageSrc: "/TherapeuticAeasImages/inflamation.png" },
    { title: "Diabetes", phase: "Phase III", imageSrc: "/TherapeuticAeasImages/diabetes.png" },
    { title: "Cardiovascular", phase: "Phase II", imageSrc: "/TherapeuticAeasImages/cardiovascular.png" },
];

const TherapeuticAreas = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24 bg-slate-50/30 border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-serif font-medium text-slate-800"
                >
                    Therapeutic Experience
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-slate-500 font-light mt-4"
                >
                    Specialized knowledge across diverse clinical indications.
                </motion.p>
            </div>

            {/* Infinite Carousel Container */}
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />

                <motion.div
                    className="flex space-x-8 px-4 w-max"
                    animate={{ x: isHovered ? undefined : "-50%" }} // Move halfway (one set of items)
                    transition={{
                        x: {
                            duration: 40,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }
                    }}
                    style={{ x: 0 }} // Start position
                >
                    {/* Render Double the items to create seamless loop */}
                    {[...areas, ...areas].map((area, index) => (
                        <div
                            key={index}
                            className="glass-card w-[280px] md:w-[320px] h-[180px] flex-shrink-0 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-32 overflow-hidden bg-slate-100">
                                {(() => {
                                    const base = area.imageSrc.replace(/\.(png|jpe?g)$/i, "");
                                    const webp480 = `${base}-480.webp`;
                                    const webp800 = `${base}-800.webp`;
                                    return (
                                        <img
                                            src={area.imageSrc}
                                            srcSet={`${webp480} 480w, ${webp800} 800w`}
                                            sizes="(min-width: 768px) 320px, 280px"
                                            alt={area.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                            loading="lazy"
                                            decoding="async"
                                            width="320"
                                            height="180"
                                        />
                                    );
                                })()}
                            </div>

                            {/* Content Container */}
                            <div className="p-4 h-20 flex flex-col justify-between">
                                <h3 className="text-lg font-serif text-slate-800 group-hover:text-slate-900 transition-colors">
                                    {area.title}
                                </h3>

                                <div className="flex items-center space-x-3">
                                    <div className="h-[1px] w-6 bg-slate-200 group-hover:bg-slate-400 transition-colors" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-700 transition-colors">
                                        {area.phase}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TherapeuticAreas;
