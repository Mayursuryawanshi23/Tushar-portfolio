import React from "react";

const GravitonFooter = () => {
    return (
        <footer className="bg-black text-white py-3">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-end gap-2">
                    {/* Simple Logo - Circle with G */}
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-xs">AG</span>
                    </div>
                    
                    {/* Agency Name with Link */}
                    <a 
                        href="https://Antigravitonlabs.io" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-sm font-semibold hover:underline transition-all"
                    >
                        AntiGraviton Labs
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default GravitonFooter;
