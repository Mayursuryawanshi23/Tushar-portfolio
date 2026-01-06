import React from "react";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-slate-900">
                <div className="mb-4 md:mb-0">
                    <h4 className="text-white font-serif text-lg">Tushar Nikumbh</h4>
                    <p className="text-sm mt-1">Principal Biostatistician</p>
                </div>

                <div className="flex gap-6 items-center">
                    <a href="#" className="hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:tusharnikumbh@example.com" className="hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="mt-8 md:mt-0 text-xs text-slate-600">
                    © {new Date().getFullYear()} Tushar Nikumbh. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
