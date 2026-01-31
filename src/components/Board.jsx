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
        <div className="flex justify-center items-center p-8 my-8">
            <div className="inline-block bg-white/20 backdrop-blur-lg p-4 rounded-xl border-4 border-amber-900/50 shadow-[0_5px_0_0_#5D4037]">
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
                                                    src="/objects/plant.png" 
                                                    alt="Plant"
                                                    className="w-12 h-12"
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
                                                    className="w-16 h-16"
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
                                                    className="w-14 h-14 transition-all duration-300"
                                                    style={{
                                                        imageRendering: 'pixelated',
                                                        filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))',
                                                    }}
                                                />
                                            </div>
                                        )}

                                        <div className="absolute bottom-0.5 right-1 text-[10px] text-black/100 font-bold font-mono pointer-events-none z-[2]">
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