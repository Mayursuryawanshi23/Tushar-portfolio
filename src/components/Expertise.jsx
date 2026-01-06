import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Expertise = () => {
    const [selected, setSelected] = useState("clinical");
    return (
        <section id="expertise" className="py-12 md:py-16 lg:py-20 bg-transparent relative">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Header Area */}
                <div className="text-center mb-6 md:mb-8 lg:mb-10 space-y-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-medium text-slate-900"
                    >
                        Core Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm md:text-base tracking-wide font-light lowercase"
                    >
                        delivering statistical excellence across the full spectrum of clinical development
                    </motion.p>
                </div>

                {/* Expertise Tabs */}
                {/* use controlled value so mobile buttons can update the Tabs state */}
                <Tabs value={selected} onValueChange={(v) => setSelected(v)} className="w-full">
                    {/* Mobile grid of plain buttons (not TabTriggers) */}
                    <div className="grid grid-cols-2 gap-0 max-w-md mx-auto w-full md:hidden mb-4">
                        {["clinical", "sap", "cdisc", "therapeutic"].map((tab, idx) => {
                            const label =
                                tab === "clinical" ? "Clinical Statistics" :
                                    tab === "sap" ? "SAP & Study Design" :
                                        tab === "cdisc" ? "CDISC / Data Standards" : "Therapeutic Expertise";

                            const isTopRow = idx < 2;
                            const isLeftCol = idx % 2 === 0;
                            const borders = `${isTopRow ? 'border-b' : ''} ${isLeftCol ? 'border-r' : ''} border-slate-200`;
                            const corners = idx === 0 ? 'rounded-tl-lg' : idx === 1 ? 'rounded-tr-lg' : idx === 2 ? 'rounded-bl-lg' : 'rounded-br-lg';
                            const active = selected === tab;

                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setSelected(tab)}
                                    className={`w-full h-14 flex items-center justify-center px-3 text-sm font-medium transition-colors duration-150 ${borders} ${corners} ${active ? 'bg-[#062242] text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                                >
                                    <span className="truncate text-center">{label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop - pill style TabsList (visible md+) */}
                    <div className="hidden md:block mb-4 md:mb-6 lg:mb-8">
                        <TabsList className="w-full max-w-3xl mx-auto flex justify-center bg-slate-100 p-1 rounded-full border border-slate-200">
                            {["clinical", "sap", "cdisc", "therapeutic"].map((tab) => {
                                const label =
                                    tab === "clinical" ? "Clinical Statistics" :
                                        tab === "sap" ? "SAP & Study Design" :
                                            tab === "cdisc" ? "CDISC / Data Standards" : "Therapeutic Expertise";
                                return (
                                    <TabsTrigger
                                        key={tab}
                                        value={tab}
                                        className="rounded-full px-6 py-2.5 text-sm md:text-base font-medium text-slate-500 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-md transition-colors duration-700 ease-in-out hover:text-slate-900 hover:bg-slate-200"
                                    >
                                        {label}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </div>

                </Tabs>

                {/* Content - Render based on selected state so mobile buttons behave like tabs */}
                <div className="mt-6">
                    {selected === "clinical" && (
                        <TabContentLayout
                            title="Clinical Trial Statistics"
                            summary="End-to-end statistical leadership for Phase I–III clinical trials, supporting efficacy, safety, and regulatory decision-making."
                            bullets={[
                                "Sample size determination & power assumptions",
                                "Interim analysis & DMC support",
                                "Safety and efficacy analysis strategies",
                                "CSR tables, listings, and figures (TFLs)",
                                "Statistical input for clinical protocols",
                            ]}
                            imageSrc="/ExpertieseImages/clinicalstat.png"
                        />
                    )}

                    {selected === "sap" && (
                        <TabContentLayout
                            title="SAP & Study Design"
                            summary="Developing robust statistical methodologies to ensure data integrity and meet global regulatory requirements."
                            bullets={[
                                "Statistical Analysis Plan (SAP) authoring",
                                "Randomization schedule generation",
                                "Endpoint definition & derivation logic",
                                "Mock shell development for TFLs",
                                "Protocol amendments & statistical impact assessment",
                            ]}
                            imageSrc="/ExpertieseImages/SAP.png"
                        />
                    )}

                    {selected === "cdisc" && (
                        <TabContentLayout
                            title="CDISC & Data Standards"
                            summary="Ensuring full compliance with CDISC standards to facilitate seamless regulatory data submission and review."
                            bullets={[
                                "SDTM & ADaM dataset specifications",
                                "Define.xml creation & validation",
                                "CDISC implementation guidelines (IG) adherence",
                                "Legacy data conversion to CDISC standards",
                                "Pinnacle 21 validation & issue resolution",
                            ]}
                            imageSrc="/ExpertieseImages/CDISC.png"
                        />
                    )}

                    {selected === "therapeutic" && (
                        <TabContentLayout
                            title="Therapeutic Focus"
                            summary="Specialized statistical application in complex therapeutic areas requiring nuanced analytical approaches."
                            bullets={[
                                "Oncology: Survival analysis, tumor response",
                                "Inflammation: Disease activity scores, longitudinal models",
                                "Immunology: Biomarker analysis, PK/PD modeling",
                                "Neurology: Multiple Sclerosis efficacy endpoints",
                                "Cardiovascular outcome trials",
                            ]}
                            imageSrc="/ExpertieseImages/therapeutic.png"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

// Reusable Layout Component for Tab Content
const TabContentLayout = ({ title, summary, bullets, imageSrc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start opacity-0 animate-in fade-in slide-in-from-bottom-2"
        >
            {/* Left Column - Textual Expertise */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-serif text-slate-800 mb-3">{title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">{summary}</p>
                </div>

                <ul className="space-y-3 pl-1">
                    {bullets.map((item, idx) => (
                        <li key={idx} className="flex items-start group">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 mr-4 group-hover:bg-slate-600 transition-colors duration-300" />
                            <span className="text-slate-700 font-light group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300 cursor-default">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Column - Professional Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="glass-card hidden lg:flex items-center justify-center lg:h-[400px] lg:min-h-[220px] border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
            >
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                />
            </motion.div>

        </motion.div>
    );
};

export default Expertise;
