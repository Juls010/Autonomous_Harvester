export default function RobotReport({ report }) {
    if (!report) return null;

    return (
        <div className="w-55 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-[#A68A73] p-4 rounded-xl border-4 border-[#8C735D] shadow-[0_8px_0_#00000020]">
                <div className="flex items-center justify-between mb-3 pb-1 border-b-2 border-[#8C735D]/40">
                    <span 
                        className="text-[28px] leading-none font-bold text-[#FDF5E6] tracking-wider"
                        style={{ fontFamily: '"VT323", monospace' }}
                    >
                        TRACKER
                    </span>
                </div>
                <div className="bg-[#8C735D]/50 p-3 rounded-lg border-2 border-[#735D4A] shadow-inner">
                    <p className="text-center text-[#FDF5E6] font-mono text-sm font-bold tracking-[0.2em]">
                        {report}
                    </p>
                </div>
            </div>
        </div>
    );
}