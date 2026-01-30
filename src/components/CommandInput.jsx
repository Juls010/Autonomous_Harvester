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
        <div className="w-full flex flex-col gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="PLACE_FARMER 3,3,NORTH"
                    className="flex-1 px-4 py-3 text-base font-mono border-4 border-amber-900/20 rounded-lg  bg-white/70 outline-none focus:border-amber-800/70 focus:ring-1 focus:ring-amber-100/10 transition-all uppercase shadow-lg"
                />
                <button 
                    type="submit" 
                    className="px-7 py-3 bg-[#C5ADE6] text-white text-xs font-bold rounded-lg 
                            shadow-[0_4px_0_0_#9980D1] 
                            hover:bg-[#B39EE0] 
                            active:shadow-[0_0px_0_0_#B39EE0] 
                            active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                    style={{ 
                        fontFamily: '"VT323", monospace', fontSize: '1.4rem',
                        imageRendering: 'pixelated'
                    }}
                >
                    EXECUTE
                </button>
            </form>

            <div className="w-full bg-white/20 backdrop-blur-lg p-6 rounded-xl border-4 border-amber-900/20 shadow-lg">
                <h3 
                    className="font-bold text-[#5a4a3a] mb-2 tracking-widest"
                    style={{ fontFamily: '"VT323", monospace', fontSize: '2rem', lineHeight: '1' }}
                >
                    QUICK ACTIONS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button 
                        onClick={() => onCommand("MOVE")} 
                        className="flex items-center justify-center px-7 py-4 bg-[#60a5fa] text-white text-xs font-bold rounded-lg 
                            shadow-[0_4px_0_0_#4B7BB3] 
                            hover:bg-[#3b82f6] 
                            active:shadow-[0_0px_0_0_#3b82f6] 
                            active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                        style={{ 
                            fontFamily: '"VT323", monospace', fontSize: '1.4rem',
                            imageRendering: 'pixelated'
                        }}
                    >
                        MOVE
                    </button>
                    <button 
                        onClick={() => onCommand("LEFT")} 
                        className="flex items-center justify-center px-7 py-4 bg-[#FED082] text-white text-xs font-bold rounded-lg 
                            shadow-[0_4px_0_0_#E1A983] 
                            hover:bg-[#FBC49F] 
                            active:shadow-[0_0px_0_0_#FBC49F] 
                            active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transformm"
                        style={{ 
                            fontFamily: '"VT323", monospace', fontSize: '1.4rem',
                            imageRendering: 'pixelated'
                        }}
                    >
                        LEFT
                    </button>
                    <button 
                        onClick={() => onCommand("RIGHT")} 
                        className="flex items-center justify-center px-7 py-4 bg-[#F8AD9D] text-white text-xs font-bold rounded-lg 
                            shadow-[0_4px_0_0_#C97C6D] 
                            hover:bg-[#F4978E] 
                            active:shadow-[0_0px_0_0_#F4978E] 
                            active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                        style={{ 
                            fontFamily: '"VT323", monospace', fontSize: '1.4rem',
                            imageRendering: 'pixelated'
                        }}
                    >
                        RIGHT
                    </button>
                    <button 
                        onClick={() => onCommand("REPORT")} 
                        className="flex items-center justify-center px-7 py-4 bg-[#4ade80] text-white text-xs font-bold rounded-lg 
                            shadow-[0_4px_0_0_#3AB35E] 
                            hover:bg-[#22c55e] 
                            active:shadow-[0_0px_0_0_#22c55e] 
                            active:translate-y-[4px] 
                            transition-all duration-75
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out
                            will-change-transform"
                        style={{ 
                            fontFamily: '"VT323", monospace', fontSize: '1.4rem',
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