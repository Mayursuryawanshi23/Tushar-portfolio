import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-[40px] md:py-[56px] lg:py-[96px] bg-transparent relative overflow-hidden">
            {/* Background Image - Fully Covering */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/backgrounds/summary.png)',
                    opacity: 0.95,
                }}
            />
            <div className="absolute inset-0 bg-black/35 backdrop-blur-sm pointer-events-none" />

            <div className="w-full px-[20px] md:container md:mx-auto md:px-12 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-start">

                    {/* Left Column - Static Header */}
                    <div className="w-full md:w-1/4 text-center md:text-left md:sticky md:top-32">
                        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white leading-tight inline-block md:block relative pb-4 mx-auto md:mx-0">
                            Professional Summary
                            <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-white/30"></span>
                        </h3>
                    </div>

                    {/* Right Column - Animated Content */}
                    <div className="w-full md:w-3/4 space-y-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15
                                    }
                                }
                            }}
                        >
                            {/* Paragraph 1 - Intro */}
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className="text-base md:text-lg lg:text-xl text-white font-light leading-relaxed md:leading-relaxed text-left max-w-full md:max-w-none"
                            >
                                With over <span className="font-medium text-white underline decoration-red-500">10 years of experience</span> within the <span className="font-medium text-white underline decoration-red-500">CRO and pharmaceutical sectors</span>,
                                I currently serve as a <span className="font-medium text-white underline decoration-red-500">Principal Biostatistician</span> leading complex <span className="font-medium text-white underline decoration-red-500">Phase I–III clinical trials</span>.
                                My career is built on a foundation of statistical rigour and a deep understanding of the drug development lifecycle.
                            </motion.p>

                            {/* Divider */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }}
                                className="h-[1px] w-16 bg-white/30 my-8 origin-left"
                            />

                            {/* Paragraph 2 - Therapeutic Depth */}
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className="text-base md:text-lg lg:text-xl text-white font-light leading-relaxed md:leading-relaxed text-left max-w-full md:max-w-none"
                            >
                                My therapeutic expertise is centered on <span className="font-medium text-white underline decoration-red-500">Oncology, Inflammation, and Immunology</span>.
                                Beyond mere calculation, I focus on converting raw statistical outputs into <span className="font-medium text-white underline decoration-red-500">actionable clinical insights</span>,
                                ensuring that every dataset tells a clear, accurate, and scientifically robust story.
                            </motion.p>

                            {/* Divider */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }}
                                className="h-[1px] w-16 bg-white/30 my-8 origin-left"
                            />

                            {/* Paragraph 3 - Work Style */}
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className="text-base md:text-lg lg:text-xl text-white font-light leading-relaxed md:leading-relaxed text-left max-w-full md:max-w-none"
                            >
                                I thrive in <span className="font-medium text-white underline decoration-red-500">cross-functional environments</span>,
                                collaborating closely with <span className="font-medium text-white underline decoration-red-500">medical writers, data managers, and clinicians</span>.
                                My approach emphasizes total ownership of <span className="font-medium text-white underline decoration-red-500">data quality</span> and <span className="font-medium text-white underline decoration-red-500">regulatory readiness</span>,
                                ensuring seamless submissions to global health authorities.
                            </motion.p>
                        </motion.div>

                        {/* Skills summary without cards/blocks as per request, just simple text or minimalist list could go here if needed, but prompt implies just the content paragraphs. 
                            The user prompt asked for para 1, 2, 3. I have provided exactly that. */}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
