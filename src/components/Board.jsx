export default function Board({ robot, walls, plantedCells = [] }) {
    
    const characterImages = {
        NORTH: '/objects/caracter_norte.png',
        SOUTH: '/objects/caracter_abajo.png',
        EAST: '/objects/caracter_derecha.png',
        WEST: '/objects/caracter_izquierda.png'
    };

    const getTileImage = (row, col) => {
        if (row === 5 && col === 1) return '/board/superior-izq.png';
        if (row === 5 && col === 5) return '/board/superio-der.png';
        if (row === 1 && col === 1) return '/board/inferior-izq.png';
        if (row === 1 && col === 5) return '/board/inferior-der.png';
        
        if (row === 5) return '/board/arriba.png';
        if (row === 1) return '/board/abajo.png';
        if (col === 1) return '/board/izquierda.png';
        if (col === 5) return '/board/derecha.png';
        
        return '/board/tierra-central.png';
    };

    return (
        <div className="flex justify-center items-center p-8 my-8">
            <div className="inline-block  bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-2xl border-4 border-amber-900/20">
                <div className="inline-grid grid-cols-5 gap-0">
                    {[5, 4, 3, 2, 1].map((row) => (
                        <div key={row} className="contents">
                            {[1, 2, 3, 4, 5].map((col) => {
                                const hasRobot = robot && robot.row === row && robot.col === col;
                                const hasWall = walls.some((w) => w.row === row && w.col === col);
                                const hasPlant = plantedCells.some((p) => p.row === row && p.col === col);
                                const tileImage = getTileImage(row, col);

                                return (
                                    <div 
                                        key={`${row}-${col}`} 
                                        className="relative w-20 h-20 overflow-visible"
                                        style={{
                                            backgroundImage: `url(${tileImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            imageRendering: 'pixelated',
                                        }}
                                        >

                                        {hasPlant && !hasWall && (
                                            <div className="absolute inset-0 flex items-center justify-center z-[50] animate-fadeIn">
                                                <img
                                                    src="/objects/Plant.png" 
                                                    alt="Plant"
                                                    className="w-12 h-12"
                                                    style={{
                                                        imageRendering: 'pixelated',
                                                        filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))',
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {hasWall && (
                                            <div className="absolute inset-0 flex items-center justify-center z-[60]">
                                                <div 
                                                    className="w-16 h-16"
                                                    style={{
                                                        backgroundImage: 'url(/objects/Rock.png)',
                                                        backgroundSize: 'contain',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        imageRendering: 'pixelated',
                                                        filter: 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4))',
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {hasRobot && (
                                            <div className="absolute inset-0 flex items-center justify-center z-[100]">
                                                <img
                                                    src={characterImages[robot.facing]}
                                                    alt="Robot"
                                                    className="w-14 h-14 transition-all duration-300"
                                                    style={{
                                                        imageRendering: 'pixelated',
                                                        filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))',
                                                    }}
                                                />
                                            </div>
                                        )}

                                        <div className="absolute bottom-0.5 right-1 text-[10px] text-black/40 font-bold font-mono pointer-events-none z-[2]">
                                            {row},{col}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}