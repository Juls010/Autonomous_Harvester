import React, { useState } from "react";
import Board from "../components/Board";
import CommandInput from "../components/CommandInput";
import RobotReport from "../components/RobotReport";
import { Link } from "react-router-dom";

const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

export default function Game() {
    const [robot, setRobot] = useState(null);
    const [walls, setWalls] = useState([]);
    const [report, setReport] = useState("");
    const [plantedCells, setPlantedCells] = useState([]);
    
    const handleCommand = (command) => {
        const upperCommand = command.trim().toUpperCase();
        
        if (upperCommand.startsWith("PLACE_FARMER")) {
            const argsString = upperCommand.substring(12).trim();
            const args = argsString.split(",").map(s => s.trim()); 
            
            if (args.length === 3) {
                const r = parseInt(args[0]);
                const c = parseInt(args[1]);
                const facing = args[2];
                
                if (r >= 1 && r <= 5 && c >= 1 && c <= 5 && DIRECTIONS.includes(facing)) {
                    setRobot({ row: r, col: c, facing });
                }
            }
            return;
        }
        
        if (upperCommand.startsWith("PLACE_WALL")) {
            const argsString = upperCommand.substring(10).trim();
            const args = argsString.split(",").map(s => parseInt(s.trim()));
            
            if (args.length === 2) {
                const wRow = args[0];
                const wCol = args[1];
                
                if (wRow >= 1 && wRow <= 5 && wCol >= 1 && wCol <= 5 && 
                    (!robot || robot.row !== wRow || robot.col !== wCol) && 
                    !walls.some((w) => w.row === wRow && w.col === wCol)) {
                    setWalls([...walls, { row: wRow, col: wCol }]);
                }
            }
            return;
        }
        
        switch (upperCommand) {
            case "MOVE": {
                if (!robot) return;
                let { row: mr, col: mc, facing: mf } = robot;
                let newRow = mr;
                let newCol = mc;

                switch (mf) {
                    case "NORTH": newRow = mr === 5 ? 5 : mr + 1; break;
                    case "SOUTH": newRow = mr === 1 ? 1 : mr - 1; break;
                    case "EAST": newCol = mc === 5 ? 5 : mc + 1; break;
                    case "WEST": newCol = mc === 1 ? 1 : mc - 1; break;
                }

                const hasWall = walls.some((w) => w.row === newRow && w.col === newCol);
                const isSamePosition = newRow === mr && newCol === mc;

                if (!hasWall && !isSamePosition) {
                    setPlantedCells(prev => {
                        const alreadyPlanted = prev.some(p => p.row === mr && p.col === mc);
                        return alreadyPlanted ? prev : [...prev, { row: mr, col: mc }];
                    });

                    setRobot({ row: newRow, col: newCol, facing: mf });
                }
                break;
            }
            case "LEFT": {
                if (!robot) return;
                const newFacingLeft = DIRECTIONS[(DIRECTIONS.indexOf(robot.facing) + 3) % 4];
                setRobot({...robot, facing: newFacingLeft});
                break;
            }
            case "RIGHT": {
                if (!robot) return;
                const newFacingRight = DIRECTIONS[(DIRECTIONS.indexOf(robot.facing) + 1) % 4];
                setRobot({...robot, facing: newFacingRight});
                break;
            }
            case "REPORT": {
                if (robot) {
                    setReport(prev => prev === "" ? `${robot.row},${robot.col},${robot.facing}` : "");
                }
            break;
            }
        } 
    };

    const resetGame = () => {
        setRobot(null);
        setWalls([]);
        setReport("");
        setPlantedCells([]);
    };

    return (
        
        <div className="h-screen w-full overflow-hidden relative flex flex-col p-4" style={{ backgroundColor: '#C0D470' }}>
    
            <div 
                className="absolute inset-0 pointer-events-none opacity-60" 
                style={{ 
                    backgroundImage: `url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '5% 5%, 95% 10%, 2% 50%, 98% 60%, 10% 90%, 85% 95%',
                    backgroundSize: '120px, 150px, 100px, 110px, 130px, 140px',
                    imageRendering: 'pixelated',
                }}
            />

            <Link to="/" className="group absolute top-4 left-4 z-50">
                <button className="flex items-center justify-center w-14 h-14 bg-[#8C735D] text-[#FDF5E6] rounded-xl
                    border-none
                    shadow-[0_4px_0_0_#5D4037] 
                    hover:bg-[#7D5A44] 
                    active:shadow-[0_0px_0_0_#5D4037] 
                    active:translate-y-[6px] 
                    transition-all duration-75 ease-out
                    will-change-transform"
                >
                    <span className="text-2xl leading-none inline-block transition-transform duration-500 ease-in-out group-hover:rotate-20"
                        style={{ 
                            fontFamily: '"VT323", monospace', 
                            fontSize: '2.1rem',
                            lineHeight: '0' 
                        }}>
                            ←
                    </span>
                </button>
                <div className="absolute top-full mt-3 left-0 scale-0 group-hover:scale-100 transition-transform duration-100 origin-top">
                    <div className="bg-[#5D4037] text-[#FDF5E6] text-[20px] px-3 py-1 rounded shadow-lg whitespace-nowrap"
                        style={{ fontFamily: '"VT323", monospace' }}>
                            GO HOME
                        <div className="absolute -top-1 left-6 w-2 h-2 bg-[#5D4037] rotate-45"></div>
                    </div>
                </div>
            </Link>

            <button onClick={resetGame} className="group absolute top-6 right-6 z-50 px-7 py-4 bg-[#8C735D] text-[#FDF5E6] text-xs font-bold rounded-lg shadow-[0_4px_0_0_#5D4037] hover:bg-[#7D5A44] active:shadow-none active:translate-y-[4px] transition-all"
                style={{ fontFamily: '"VT323", monospace' }}>

                <span className="text-2xl leading-none inline-block transition-transform duration-800 ease-in-out group-hover:rotate-180">↻</span>

                <div className="absolute top-full mt-3 right-0 scale-0 group-hover:scale-100 transition-transform duration-200 origin-top">
                    <div className="bg-[#5D4037] text-[#FDF5E6] text-[20px] px-4 py-1 rounded shadow-lg whitespace-nowrap">
                        RESET
                        <div className="absolute -top-1 right-6 w-2 h-2 bg-[#5D4037] rotate-45"></div>
                    </div>
                </div>
            </button>

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

            <main className="flex-1 flex flex-row  max-w-[1200px] mx-auto w-full items-center justify-center p-4">
                <div className="w-[450px] flex flex-col gap-6 shrink-0 items-stretch">
                    
                    <section className="bg-[#A68A73] p-6 rounded-xl border-4 border-amber-900/50 w-full shadow-[0_5px_0_0_#5D4037]">
                        <h3 className="font-bold text-white mb-2 tracking-widest" style={{ fontFamily: '"VT323", monospace', fontSize: '2rem', lineHeight: '1' }}>
                            COMMANDS
                        </h3>
                        <ul className="space-y-2 text-left text-s text-gray-700 font-medium">
                            <li><code className="bg-amber-100 px-1 rounded font-mono text-amber-900">PLACE_FARMER R,C,D</code></li>
                            <li><code className="bg-amber-100 px-1 rounded font-mono text-amber-900">PLACE_WALL R,C</code></li>
                            <li><code className="bg-amber-100 px-1 rounded font-mono text-amber-900">MOVE</code> / <code className="bg-amber-100 px-1 rounded font-mono text-amber-900">LEFT</code> / <code className="bg-amber-100 px-1 rounded font-mono text-amber-900">RIGHT</code></li>
                        </ul>
                    </section>

                    <div className="w-full">
                        <CommandInput onCommand={handleCommand} />
                    </div>

                </div>

                <div className="flex-1 flex justify-center items-center">
                    <Board robot={robot} walls={walls} plantedCells={plantedCells} />
                </div>
            </main>

                {report && (
                    <div className="absolute bottom-20 right-6 z-50">
                        <RobotReport report={report} />
                    </div>
)}

                <footer className="absolute bottom-4 left-0 right-0 w-full text-center z-[100] pointer-events-none pb-10">
                    <div 
                        style={{ fontFamily: '"VT323", monospace' }}
                        className="relative inline-block text-[#5a4a3a] text-xl opacity-80 select-none"
                    >
                        <span>Created by Julia N.G. — </span>
                        <span className="border-b border-dotted  border-[#5a4a3a]">GitHub</span>

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
    );
}