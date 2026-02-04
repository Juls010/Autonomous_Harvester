export default function Board({ robot, walls, plantedCells = [] }) {
    
    const characterImages = {
        NORTH: '/objects/character_up.png',
        SOUTH: '/objects/character_down.png',
        EAST: '/objects/character_right.png',
        WEST: '/objects/character_left.png'
    };

    const getTileImage = (row, col) => {
        if (row === 5 && col === 1) return '/board/up_left.png';
        if (row === 5 && col === 5) return '/board/up_right.png';
        if (row === 1 && col === 1) return '/board/down_left.png';
        if (row === 1 && col === 5) return '/board/down_right.png';
        
        if (row === 5) return '/board/up.png';
        if (row === 1) return '/board/down.png';
        if (col === 1) return '/board/left.png';
        if (col === 5) return '/board/right.png';
        
        return '/board/central.png';
    };

    return (
        <div className="flex justify-center items-center p-2 sm:p-4 md:p-4 lg:p-6 my-2 sm:my-4 md:my-3 lg:my-6">
            <div className="inline-block bg-white/20 backdrop-blur-lg p-2 sm:p-3 md:p-2.5 lg:p-4 rounded-lg sm:rounded-xl border-2 sm:border-4 md:border-3 lg:border-4 border-amber-900/50 shadow-[0_3px_0_0_#5D4037] sm:shadow-[0_5px_0_0_#5D4037] md:shadow-[0_4px_0_0_#5D4037] lg:shadow-[0_5px_0_0_#5D4037]">
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
                                        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-18 md:h-18 lg:w-24 lg:h-24 overflow-visible"
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
                                                    src="/objects/plant.png" 
                                                    alt="Plant"
                                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-11 md:h-11 lg:w-14 lg:h-14"
                                                    style={{
                                                        imageRendering: 'pixelated',
                                                        filter: 'drop-shadow(2px 4px 0px #2D1B0D)',
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {hasWall && (
                                            <div className="absolute inset-0 flex items-center justify-center z-[60]">
                                                <div 
                                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-20 lg:h-20"
                                                    style={{
                                                        backgroundImage: 'url(/objects/rock.png)',
                                                        backgroundSize: 'contain',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        imageRendering: 'pixelated',
                                                        filter: 'drop-shadow(2px 4px 0px #4d3320)',
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {hasRobot && (
                                            <div className="absolute inset-0 flex items-center justify-center z-[100]">
                                                <img
                                                    src={characterImages[robot.facing]}
                                                    alt="Robot"
                                                    className="w-11 h-11 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-all duration-300"
                                                    style={{
                                                        imageRendering: 'pixelated',
                                                        filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))',
                                                    }}
                                                />
                                            </div>
                                        )}

                                        <div className="absolute bottom-0.5 right-0.5 sm:right-1 text-[8px] sm:text-[9px] md:text-[8px] lg:text-[10px] text-black/100 font-bold font-mono pointer-events-none z-[2]">
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