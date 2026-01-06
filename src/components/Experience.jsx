import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
    {
        period: "2022 — PRESENT",
        title: "Principal Biostatistician",
        company: "Fortrea (formerly Labcorp Drug Development)",
        desc: "Leading statistical activities for global Phase III oncology trials, with oversight of SDTM/ADaM datasets and TFL generation.",
        details: [
            "Lead statistician for complex Phase III oncology studies.",
            "Oversight of CDISC delivery (SDTM/ADaM) and define.xml.",
            "Primary statistical contact for regulatory submissions (FDA/EMA)."
        ]
    },
    {
        period: "2019 — 2022",
        title: "Senior Biostatistician",
        company: "IQVIA",
        desc: "Managed end-to-end statistical deliverables for multiple Phase II–III studies in inflammation and immunology.",
        details: [
            "Developed Statistical Analysis Plans (SAP) and mock shells.",
            "Coordinated with data management for database lock activities.",
            "Mentored junior statisticians on ADaM programming standards."
        ]
    },
    {
        period: "2016 — 2019",
        title: "Biostatistician II",
        company: "PPD",
        desc: "performed statistical analysis and programming for Phase I–II clinical trials, ensuring high-quality TFL production.",
        details: [
            "Programmed efficacy and safety tables using SAS.",
            "Validated datasets and statistical outputs.",
            "Participated in dose-escalation meetings for Phase I studies."
        ]
    },
    {
        period: "2013 — 2016",
        title: "Biostatistician I",
        company: "Cognizant",
        desc: "Supported statistical programming activities and TFL generation for legacy data conversion projects.",
        details: [
            "Generated SDTM domains from raw data.",
            "Performed quality control (QC) of derived datasets.",
            "Assisted in creation of ad-hoc safety reports."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background Image with White Blur */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/backgrounds/experience.png)',
                    opacity: 0.7,
                }}
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">Professional Experience</h2>
                    <div className="h-1 w-20 bg-white mt-6 rounded-full mx-auto md:mx-0"></div>
                </motion.div>

                <div className="relative border-l border-white ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ data, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 md:pl-16 group"
        >
            {/* Timeline Node */}
            <div className={`absolute left-[-5px] md:left-[-6px] top-2 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${index === 0 ? 'bg-white border-white' : 'bg-white border-white group-hover:border-white'}`} />

            {/* Content Card */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="glass-card cursor-pointer p-6 rounded-xl border border-transparent hover:border-white hover:bg-slate-900 hover:shadow-xl transition-all duration-700 ease-in-out group/card"
            >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-medium text-white group-hover/card:text-white transition-colors duration-700 ease-in-out">
                        {data.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-white group-hover/card:text-white mt-1 md:mt-0 transition-colors duration-700 ease-in-out">
                        {data.period}
                    </span>
                </div>

                <h4 className="text-base text-white font-medium mb-4 group-hover/card:text-white transition-colors duration-700 ease-in-out">{data.company}</h4>

                <p className="text-white leading-relaxed font-light text-lg group-hover/card:text-white transition-colors duration-700 ease-in-out">
                    {data.desc}
                </p>

                {/* Expandable Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <ul className="mt-6 space-y-3 border-t border-white group-hover/card:border-white pt-6 transition-colors duration-700 ease-in-out">
                                {data.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-white group-hover/card:text-white text-sm md:text-base font-light transition-colors duration-700 ease-in-out">
                                        <span className="w-1.5 h-1.5 bg-white group-hover/card:bg-white rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-700 ease-in-out" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Experience;
