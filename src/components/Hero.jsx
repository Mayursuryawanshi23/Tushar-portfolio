import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative bg-transparent overflow-hidden pt-[56px] pb-[48px] px-[20px] min-[600px]:py-[72px] min-[600px]:px-[48px] lg:py-[96px] lg:px-[80px]">
            <div className="w-full flex flex-col min-[600px]:flex-row min-[600px]:flex-nowrap min-[600px]:items-center gap-6 min-[600px]:gap-8 lg:gap-12 min-[600px]:container min-[600px]:mx-auto min-[600px]:px-4 lg:px-12">

                {/* Small profile (mobile only) - centered below navbar */}
                <div className="min-[600px]:hidden flex items-center justify-center pt-6 mb-5">
                    <div className="w-[115px] h-[110px] rounded-full overflow-hidden mx-auto shadow-sm ring-1 ring-slate-900/5">
                        <img
                            src="public\profilepic\download.png"
                            alt="Profile - Tushar Nikumbh"
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 z-10 min-[600px]:w-[62%] lg:w-[60%] min-[600px]:order-first text-center min-[600px]:text-left"
                >
                    <div className="space-y-3">
                        <h2 className="text-sm md:text-base font-semibold tracking-wider text-slate-500 uppercase">
                            Principal Biostatistician
                        </h2>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-slate-900 leading-[1.1]">
                            Precision in <br />
                            <span className="text-slate-800">Clinical Data.</span>
                        </h1>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed font-light mt-4 max-w-[90%] mx-auto min-[600px]:max-w-lg min-[600px]:mx-0">
                        Providing expert statistical leadership in Phase I–III clinical trials.
                        Specializing in Oncology, Immunology, and CDISC standards at a global scale.
                    </p>

                    <div className="flex flex-row gap-3 pt-6 items-center justify-center min-[600px]:justify-start">
                        <a href="#expertise">
                            <Button className="px-6 py-3 sm:px-8 sm:py-6 min-h-[44px] bg-slate-900 text-white hover:bg-slate-800 rounded-none text-base">
                                View Expertise
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button variant="outline" className="px-6 py-3 sm:px-8 sm:py-6 min-h-[44px] border-slate-200 text-slate-700 hover:bg-slate-50 rounded-none text-base bg-transparent group">
                                Contact <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                    </div>

                    <div className="pt-12 flex gap-12 border-t border-slate-100 max-w-md mx-auto text-center min-[600px]:mx-0 min-[600px]:text-left">
                        <div>
                            <p className="text-3xl font-serif text-slate-900">10+</p>
                            <p className="text-sm text-slate-500 mt-1 uppercase tracking-wide">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif text-slate-900">15+</p>
                            <p className="text-sm text-slate-500 mt-1 uppercase tracking-wide">Studies Led</p>
                        </div>
                    </div>
                </motion.div>


                {/* Large image (>=600px) - right column on larger screens */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hidden min-[600px]:flex min-[600px]:order-last min-[600px]:w-[38%] lg:w-[40%] items-center justify-center"
                >
                    <div className="w-full rounded-2xl overflow-hidden">
                        <img
                            src="public\profilepic\download.png"
                            alt="Professional Portrait - Tushar Nikumbh"
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 ease-out"
                            loading="lazy"
                            style={{ maxHeight: '608px' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
