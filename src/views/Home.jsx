import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="h-screen w-full overflow-hidden p-4 flex flex-col"
            style={{ 
                backgroundColor: '#C0D470',
                imageRendering: 'pixelated',
                fontFamily: '"VT323", monospace'
            }}
            >
            <div className="absolute inset-0 opacity-60" 
            style={{
                backgroundImage: `url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '5% 5%, 95% 10%, 2% 50%, 98% 60%, 10% 90%, 85% 95%, 45% 2%',
                backgroundSize: '120px, 150px, 100px, 110px, 130px, 140px, 170px',
            }}
        />

        <div className="absolute inset-0 opacity-80" 
            style={{
                backgroundImage: `url('/background/tree.png'), url('/background/mushrooms.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '15% 25%, 80% 70%',
                backgroundSize: '120px, 60px',
                filter: 'none' 
            }}
        />

        <div className="relative z-10 w-full max-w-2xl">
        
        </div>
        
        <header>
                <h1 
                    className="text-2xl md:text-4xl font-black text-[#4a5d23] leading-tight text-center"
                    style={{ 
                        fontFamily: '"VT323", monospace', fontSize: '5rem',
                        textShadow: '4px 4px 0 rgba(5, 83, 12, 0.2)',
                        imageRendering: 'pixelated'
                    }}>
                    TINY TILLER
                </h1>
            </header>

            <div className="w-full max-w-[500px] animate-in fade-in slide-in-from-bottom-4 duration-500 mx-auto mt-20">
            
            <div className="bg-[#A68A73] p-6 rounded-2xl border-4 border-[#8C735D] shadow-[0_8px_0_#00000020]">
                
                <div className="flex items-center justify-center mb-5 pb-2 border-b-2 border-[#8C735D]/40">
                    <span className="text-[32px] leading-none font-bold text-[#FDF5E6] tracking-wider"
                        style={{ fontFamily: '"VT323", monospace' }}>
                        FIELD GUIDE
                    </span>
                </div>

                <div className="space-y-4">

                    <div className="bg-[#8C735D]/50 p-4 rounded-xl border-2 border-[#735D4A] shadow-inner">
                        <h4 className="text-[#FDF5E6] text-xl text-center font-bold mb-1 tracking-wider" style={{ fontFamily: '"VT323", monospace' }}>
                            [ MISION ]
                        </h4>
                        <p className="text-[#FDF5E6] text-lg leading-tight opacity-90" style={{ fontFamily: '"VT323", monospace' }}>
                            Your goal is not just to move the bot, but to design a logical route to cover every patch 
                            of fertile land without leaving any gaps.
                        </p>
                    </div>

                    <div className="bg-[#8C735D]/50 p-4 rounded-xl border-2 border-[#735D4A] shadow-inner">
                        <h4 className="text-[#FDF5E6] text-xl text-center font-bold mb-1 tracking-wider" style={{ fontFamily: '"VT323", monospace' }}>
                            [ CHALLENGE ]
                        </h4>
                        <p className="text-[#FDF5E6] text-lg leading-tight opacity-90" style={{ fontFamily: '"VT323", monospace' }}>
                            Be careful! Each step PLANTS A SEED, but hitting obstacles will stop the harvest.
                        </p>
                    </div>

                </div>
            </div>
        </div>
        
        <div className="flex justify-center mt-20">
    
        <Link to="/game">
            <button 
                className="flex items-center justify-center px-12 py-2 bg-[#CB98D6] text-[#5d3692] font-bold rounded-lg 
                        shadow-[0_6px_0_0_#9858a9] 
                        hover:bg-[#b274bf]
                        active:shadow-[0_0px_0_0_#b274bf]  
                        active:shadow-none 
                        active:translate-y-[6px] 
                        transition-[transform,box-shadow,background-color] 
                        duration-150 ease-out 
                        will-change-transform"
                style={{ 
                    fontFamily: '"VT323", monospace', 
                    fontSize: '1.7rem',
                    imageRendering: 'pixelated'
                }}>
                PLAY
            </button>
        </Link>

        <footer className="absolute bottom-4 w-full text-center z-[100] pointer-events-none pb-10">
                    <div 
                        style={{ fontFamily: '"VT323", monospace' }}
                        className="relative inline-block text-[#5a4a3a] text-xl opacity-80 select-none"
                    >
                        <span>Created by Julia N.G. — </span>
                        <span className="border-b border-dotted border-[#5a4a3a]">GitHub</span>

                        <a 
                            href="https://github.com/Juls010" 
                            style={{ 
                                cursor: "url('/cursor/hand1.png'), pointer",
                                height: '60px', 
                                top: '-20px' 
                            }}
                            className="absolute right-0 w-[60px] pointer-events-auto opacity-0"
                        >
                            _
                        </a>
                    </div>
                </footer>

        </div>

    </div>
    )
}