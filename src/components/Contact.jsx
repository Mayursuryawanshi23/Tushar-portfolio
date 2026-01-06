import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailSubject = formData.subject || `Portfolio Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:tusharnikumbh@example.com?subject=${mailSubject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 relative bg-transparent">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">

                {/* Main Card Container */}
                <div className="glass-card bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200/80 grid md:grid-cols-2 min-h-[500px] hover:shadow-3xl hover:border-slate-300/80 transition-colors duration-300">

                    {/* LEFT COLUMN: Contact Image */}
                    <div className="relative bg-gradient-to-br from-slate-50/50 to-slate-100/50 backdrop-blur-sm border-r border-slate-200/50 flex items-center justify-center p-8 overflow-hidden h-full order-last md:order-first group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/20 via-transparent to-slate-50/20 pointer-events-none" />
                        <motion.img
                            src="/contactimage/contact.png"
                            alt="Contact illustration"
                            className="w-full h-full object-contain max-w-sm"
                            animate={{
                                y: [0, -9, 0],
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                    </div>

                    {/* RIGHT COLUMN: Contact Form (Premium Glass) */}
                    <div className="bg-gradient-to-b from-slate-50 to-slate-100/50 p-8 md:p-12 flex flex-col justify-center order-first md:order-last">
                        <h2 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 mb-6">Let's connect.</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                    <Input
                                        name="name"
                                        placeholder="Name"
                                        required
                                        className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-lg h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-colors duration-200 shadow-sm backdrop-blur-sm"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-lg h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-colors duration-200 shadow-sm backdrop-blur-sm"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                                <Input
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-lg h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-all shadow-sm backdrop-blur-sm"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                                <Textarea
                                    name="message"
                                    placeholder="Message"
                                    className="min-h-[100px] bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-lg rounded-lg text-slate-900 placeholder:text-slate-400 resize-none transition-all shadow-sm p-3 backdrop-blur-sm"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="pt-4 flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white hover:bg-slate-800 py-2 h-10 text-sm font-medium rounded-lg shadow-md hover:shadow-xl transition-all active:scale-95 duration-200"
                                >
                                    Send Message
                                </Button>

                                <div className="flex items-center justify-between gap-2 my-1">
                                    <div className="h-px bg-slate-300 flex-1"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">OR direct contact</span>
                                    <div className="h-px bg-slate-300 flex-1"></div>
                                </div>

                                <Button
                                    type="button"
                                    className="w-full bg-[#25D366] text-white hover:bg-[#20ba60] py-2 h-10 text-sm font-medium rounded-lg shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 duration-200"
                                    onClick={() => window.open('https://wa.me/917030485048', '_blank')}
                                >
                                    <MessageCircle className="w-4 h-4" /> WhatsApp
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* Footer Info Area */}
                <div className="flex justify-center gap-12 mt-12 text-center">
                    <div
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => window.location.href = 'mailto:tusharnikumbh@example.com'}
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            <Mail className="h-5 w-5" />
                        </div>
                        <p className="text-slate-800 text-sm font-medium group-hover:text-slate-900 transition-colors">Email</p>
                        <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-600 transition-colors">tusharnikumbh@gmail.com</p>
                    </div>
                    <div
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => window.open('https://linkedin.com/in/tusharnikumbh', '_blank')}
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            <span className="font-bold text-xs">in</span>
                        </div>
                        <p className="text-slate-800 text-sm font-medium group-hover:text-slate-900 transition-colors">LinkedIn</p>
                        <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-600 transition-colors">/in/tusharnikumbh</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
