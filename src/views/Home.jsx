import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="h-screen w-full overflow-hidden p-3 sm:p-4 md:p-5  flex flex-col relative"
            style={{ 
                backgroundColor: '#C0D470',
                imageRendering: 'pixelated',
                fontFamily: '"VT323", monospace'
            }}
            >
            <div className="absolute inset-0 opacity-40 sm:opacity-50 md:opacity-60" 
            style={{
                backgroundImage: `url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '5% 5%, 95% 10%, 2% 50%, 98% 60%, 10% 90%, 85% 95%',
                backgroundSize: '90px, 120px, 80px, 80px, 90px, 100px',
            }}
        />

        <div className="absolute inset-0 opacity-60 sm:opacity-70 md:opacity-80 hidden sm:block" 
            style={{
                backgroundImage: `url('/background/tree.png'), url('/background/mushrooms.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '15% 25%, 80% 70%',
                backgroundSize: '120px, 70px',
                filter: 'none' 
            }}
        />
        
        <header className="relative z-10 mb-4 sm:mb-6 md:mb-6 lg:mb-8 flex-shrink-0 pt-2 sm:pt-3 md:pt-3 lg:pt-4">
            <h1 
                className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#4a5d23] leading-tight text-center"
                style={{ 
                    fontFamily: '"VT323", monospace',
                    textShadow: '3px 3px 0 rgba(5, 83, 12, 0.2), 4px 4px 0 rgba(5, 83, 12, 0.2)',
                    imageRendering: 'pixelated'
                }}>
                TINY TILLER
            </h1>
        </header>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-0 overflow-y-auto sm:overflow-visible">
            
            <div className="w-full max-w-[90%] sm:max-w-[480px] md:max-w-[420px] lg:max-w-[480px] mb-4 sm:mb-6 md:mb-6 lg:mb-8">
                <div className="bg-[#A68A73] p-3 sm:p-4 md:p-4 lg:p-5 rounded-xl sm:rounded-2xl border-2 sm:border-3 md:border-3 lg:border-4 border-[#8C735D] shadow-[0_5px_0_#00000020] sm:shadow-[0_6px_0_#00000020] md:shadow-[0_6px_0_#00000020] lg:shadow-[0_8px_0_#00000020]">
                    
                    <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-2 lg:mb-3 pb-1.5 sm:pb-2 md:pb-2 lg:pb-2.5 border-b-2 border-[#8C735D]/40">
                        <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl leading-none font-bold text-[#FDF5E6] tracking-wider"
                            style={{ fontFamily: '"VT323", monospace' }}>
                            FIELD GUIDE
                        </span>
                    </div>

                    <div className="space-y-2 sm:space-y-3 md:space-y-2 lg:space-y-3">

                        <div className="bg-[#8C735D]/50 p-2 sm:p-3 md:p-2.5 lg:p-3 rounded-lg sm:rounded-xl border-2 border-[#735D4A] shadow-inner">
                            <h4 className="text-[#FDF5E6] text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-center font-bold mb-1 sm:mb-1.5 md:mb-1 lg:mb-1.5 tracking-wider" style={{ fontFamily: '"VT323", monospace' }}>
                                [ MISION ]
                            </h4>
                            <p className="text-[#FDF5E6] text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base leading-tight opacity-90" style={{ fontFamily: '"VT323", monospace' }}>
                                Your goal is not just to move the bot, but to design a logical route to cover every patch 
                                of fertile land without leaving any gaps.
                            </p>
                        </div>

                        <div className="bg-[#8C735D]/50 p-2 sm:p-3 md:p-2.5 lg:p-3 rounded-lg sm:rounded-xl border-2 border-[#735D4A] shadow-inner">
                            <h4 className="text-[#FDF5E6] text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-center font-bold mb-1 sm:mb-1.5 md:mb-1 lg:mb-1.5 tracking-wider" style={{ fontFamily: '"VT323", monospace' }}>
                                [ CHALLENGE ]
                            </h4>
                            <p className="text-[#FDF5E6] text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base leading-tight opacity-90" style={{ fontFamily: '"VT323", monospace' }}>
                                Be careful! Each step PLANTS A SEED, but hitting obstacles will stop the harvest.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <Link to="/game">
                <button 
                    className="cursor-target flex items-center justify-center mt-7 lg:mt-5 px-6 sm:px-8 md:px-7 lg:px-9 xl:px-10 py-1.5 sm:py-2 md:py-2 lg:py-2.5 xl:py-3 bg-[#CB98D6] text-[#5d3692] font-bold rounded-lg 
                            shadow-[0_4px_0_0_#9858a9] sm:shadow-[0_5px_0_0_#9858a9] md:shadow-[0_4px_0_0_#9858a9] lg:shadow-[0_5px_0_0_#9858a9]
                            hover:bg-[#b274bf]
                            active:shadow-[0_0px_0_0_#b274bf]  
                            active:shadow-none 
                            active:translate-y-[4px] sm:active:translate-y-[5px] md:active:translate-y-[4px] lg:active:translate-y-[5px]
                            transition-[transform,box-shadow,background-color] 
                            duration-150 ease-out 
                            will-change-transform"
                    style={{ 
                        fontFamily: '"VT323", monospace', 
                        fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                        imageRendering: 'pixelated'
                    }}>
                    PLAY
                </button>
            </Link>
        </div>

        <footer className="cursor-target relative w-full text-center z-[100] pointer-events-none py-2 sm:py-3 flex-shrink-0">
            <div 
                style={{ fontFamily: '"VT323", monospace' }}
                className="relative inline-block text-[#5a4a3a] text-xs sm:text-sm md:text-xs lg:text-sm opacity-70 sm:opacity-80 select-none"
            >
                <span>Created by Julia N.G. — </span>
                <span className="border-b border-dotted border-[#5a4a3a]">GitHub</span>

                <a 
                    href="https://github.com/Juls010" 
                    className="cursor-target absolute -right-1 -top-1 w-[60px] sm:w-[40px] h-[25px] sm:h-[30px] pointer-events-auto opacity-0 hover:opacity-100"
                >
                    _
                </a>
            </div>
        </footer>

    </div>
    )
}