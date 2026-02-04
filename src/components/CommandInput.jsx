import { useState } from "react";

export default function CommandInput({ onCommand }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onCommand(input.trim()); 
            setInput("");
        }
    };

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-10 z-20">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="PLACE_FARMER 3,3,NORTH"
                    className="cursor-target flex-1 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-mono border-2 sm:border-4 border-amber-900/50 rounded-lg bg-white/70 outline-none focus:border-amber-800/70 focus:ring-1 focus:ring-amber-100/10 transition-all uppercase shadow-[0_3px_0_0_#5D4037] sm:shadow-[0_4px_0_0_#5D4037]"
                />
                <button 
                    type="submit" 
                    className="cursor-target px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 bg-[#C5ADE6] text-[#5d3692] font-bold rounded-lg 
                            shadow-[0_3px_0_0_#9980D1] sm:shadow-[0_4px_0_0_#9980D1] 
                            hover:bg-[#B39EE0] 
                            active:shadow-[0_0px_0_0_#B39EE0] 
                            active:translate-y-[3px] sm:active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                    style={{ 
                        fontFamily: '"VT323", monospace', 
                        fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                        imageRendering: 'pixelated'
                    }}
                >
                    EXECUTE
                </button>
            </form>

            <div className="w-full z-20 bg-[#A68A73] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-2 sm:border-4 border-amber-900/50 shadow-[0_3px_0_0_#5D4037] sm:shadow-[0_5px_0_0_#5D4037]">
                <h3 
                    className="font-bold text-white mb-2 sm:mb-3 tracking-widest"
                    style={{ 
                        fontFamily: '"VT323", monospace', 
                        fontSize: 'clamp(1.25rem, 4vw, 2rem)', 
                        lineHeight: '1' 
                    }}
                >
                    QUICK ACTIONS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                    <button 
                        onClick={() => onCommand("MOVE")} 
                        className="cursor-target flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-[#60a5fa] text-[#0d386c] font-bold rounded-lg 
                            shadow-[0_3px_0_0_#4B7BB3] sm:shadow-[0_4px_0_0_#4B7BB3] 
                            hover:bg-[#4c95ef] 
                            active:shadow-[0_0px_0_0_#4c95ef] 
                            active:translate-y-[3px] sm:active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                        style={{ 
                            fontFamily: '"VT323", monospace', 
                            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                            imageRendering: 'pixelated'
                        }}
                    >
                        MOVE
                    </button>
                    <button 
                        onClick={() => onCommand("LEFT")} 
                        className="cursor-target flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-[#f0c16f] text-[#5a4a3a] font-bold rounded-lg 
                            shadow-[0_3px_0_0_#d59d3b] sm:shadow-[0_4px_0_0_#d59d3b] 
                            hover:bg-[#f0b651] 
                            active:shadow-[0_0px_0_0_#f0b651] 
                            active:translate-y-[3px] sm:active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                        style={{ 
                            fontFamily: '"VT323", monospace', 
                            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                            imageRendering: 'pixelated'
                        }}
                    >
                        LEFT
                    </button>
                    <button 
                        onClick={() => onCommand("RIGHT")} 
                        className="cursor-target flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-[#f4937e] text-[#7b2311] font-bold rounded-lg 
                            shadow-[0_3px_0_0_#df5d41] sm:shadow-[0_4px_0_0_#df5d41] 
                            hover:bg-[#e57a63] 
                            active:shadow-[0_0px_0_0_#e57a63] 
                            active:translate-y-[3px] sm:active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                        style={{ 
                            fontFamily: '"VT323", monospace', 
                            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                            imageRendering: 'pixelated'
                        }}
                    >
                        RIGHT
                    </button>
                    <button 
                        onClick={() => onCommand("REPORT")} 
                        className="cursor-target flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-[#3fd776] text-[#065724] font-bold rounded-lg 
                            shadow-[0_3px_0_0_#159f47] sm:shadow-[0_4px_0_0_#159f47] 
                            hover:bg-[#27bf5e] 
                            active:shadow-[0_0px_0_0_#27bf5e] 
                            active:translate-y-[3px] sm:active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                        style={{ 
                            fontFamily: '"VT323", monospace', 
                            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                            imageRendering: 'pixelated'
                        }}
                    >
                        REPORT
                    </button>
                </div>
            </div>
        </div>
    );
}