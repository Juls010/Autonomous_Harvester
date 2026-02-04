import React, { useState } from "react";
import Board from "../components/Board";
import CommandInput from "../components/CommandInput";
import RobotReport from "../components/RobotReport";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

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
                

                if (!(r >= 1 && r <= 5 && c >= 1 && c <= 5 && DIRECTIONS.includes(facing))) {
                    return;
                }

                const hasWall = walls.some((w) => w.row === r && w.col === c);
                
                if (hasWall) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'Cannot place farmer on a wall!',
                        confirmButtonColor: '#668c5d',
                    });
                    return;
                }
                
                setRobot({ row: r, col: c, facing });
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
        
        <div className="h-screen w-full overflow-hidden relative flex flex-col p-2 sm:p-4 md:p-3 lg:p-4" style={{ backgroundColor: '#C0D470' }}>
    
            <div 
                className="absolute inset-0 pointer-events-none opacity-40 sm:opacity-50 md:opacity-60" 
                style={{ 
                    backgroundImage: `url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png'), url('/background/grass.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '5% 5%, 95% 10%, 2% 50%, 98% 60%, 10% 90%, 85% 95%',
                    backgroundSize: '90px, 120px, 80px, 80px, 90px, 100px',
                    imageRendering: 'pixelated',
                }}
            />

            <Link to="/" className="group absolute top-3 left-3 sm:top-4 sm:left-4 z-50">
                <button className="cursor-target flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#8C735D] text-[#FDF5E6] rounded-lg sm:rounded-xl
                    border-none
                    shadow-[0_3px_0_0_#5D4037] sm:shadow-[0_4px_0_0_#5D4037] 
                    hover:bg-[#7D5A44] 
                    active:shadow-[0_0px_0_0_#5D4037] 
                    active:translate-y-[3px] sm:active:translate-y-[4px] 
                    transition-all duration-75 ease-out
                    will-change-transform"
                >
                    <span className="text-lg sm:text-xl md:text-2xl leading-none inline-block transition-transform duration-500 ease-in-out group-hover:rotate-20"
                        style={{ 
                            fontFamily: '"VT323", monospace', 
                            lineHeight: '0' 
                        }}>
                            ←
                    </span>
                </button>
                <div className="hidden sm:block absolute top-full mt-2 md:mt-3 left-0 scale-0 group-hover:scale-100 transition-transform duration-100 origin-top">
                    <div className="bg-[#5D4037] text-[#FDF5E6] text-base md:text-[20px] px-2 md:px-3 py-1 rounded shadow-lg whitespace-nowrap"
                        style={{ fontFamily: '"VT323", monospace' }}>
                            GO HOME
                        <div className="absolute -top-1 left-4 md:left-6 w-2 h-2 bg-[#5D4037] rotate-45"></div>
                    </div>
                </div>
            </Link>

            <button onClick={resetGame} className="cursor-target group absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#8C735D] text-[#FDF5E6] font-bold rounded-lg sm:rounded-xl shadow-[0_3px_0_0_#5D4037] sm:shadow-[0_4px_0_0_#5D4037] hover:bg-[#7D5A44] active:shadow-none active:translate-y-[3px] sm:active:translate-y-[4px] transition-all"
                style={{ fontFamily: '"VT323", monospace' }}>

                <span className="text-lg sm:text-xl md:text-2xl leading-none inline-block transition-transform duration-800 ease-in-out group-hover:rotate-180">↻</span>

                <div className="hidden sm:block absolute top-full mt-2 md:mt-3 right-0 scale-0 group-hover:scale-100 transition-transform duration-200 origin-top">
                    <div className="bg-[#5D4037] text-[#FDF5E6] text-base md:text-[20px] px-3 md:px-4 py-1 rounded shadow-lg whitespace-nowrap">
                        RESET
                        <div className="absolute -top-1 right-4 md:right-6 w-2 h-2 bg-[#5D4037] rotate-45"></div>
                    </div>
                </div>
            </button>

            <header className="flex-shrink-0 pt-2 mb-2 md:mb-1 lg:mb-4 sm:pt-0">
                <h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-[#4a5d23] leading-tight text-center"
                    style={{ 
                        fontFamily: '"VT323", monospace',
                        textShadow: '3px 3px 0 rgba(5, 83, 12, 0.2), 4px 4px 0 rgba(5, 83, 12, 0.2)',
                        imageRendering: 'pixelated'
                    }}>
                    TINY TILLER
                </h1>
            </header>

            <main className="flex-1 flex flex-col lg:flex-row max-w-[1400px] mx-auto w-full items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 min-h-0 overflow-y-auto lg:overflow-visible">

                <div className="w-full lg:w-[380px] xl:w-[450px] flex flex-col gap-3 sm:gap-4 md:gap-6 shrink-0 z-20 order-2 lg:order-1">
                    
                    <section className="bg-[#A68A73] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-2 sm:border-4 border-amber-900/50 w-full shadow-[0_3px_0_0_#5D4037] sm:shadow-[0_5px_0_0_#5D4037]">
                        <h3 className="font-bold text-white mb-2 sm:mb-3 tracking-widest" style={{ fontFamily: '"VT323", monospace', fontSize: 'clamp(1.25rem, 5vw, 2rem)', lineHeight: '1' }}>
                            COMMANDS
                        </h3>
                        <ul className="space-y-1 sm:space-y-2 text-left text-xs sm:text-sm text-gray-700 font-medium">
                            <li><code className="bg-amber-100 px-1 sm:px-1.5 py-0.5 rounded font-mono text-amber-900 text-[9px] sm:text-[10px] md:text-xs">PLACE_FARMER R,C,D</code></li>
                            <li><code className="bg-amber-100 px-1 sm:px-1.5 py-0.5 rounded font-mono text-amber-900 text-[9px] sm:text-[10px] md:text-xs">PLACE_WALL R,C</code></li>
                            <li><code className="bg-amber-100 px-1 sm:px-1.5 py-0.5 rounded font-mono text-amber-900 text-[9px] sm:text-[10px] md:text-xs">MOVE</code> / <code className="bg-amber-100 px-1 sm:px-1.5 py-0.5 rounded font-mono text-amber-900 text-[9px] sm:text-[10px] md:text-xs">LEFT</code> / <code className="bg-amber-100 px-1 sm:px-1.5 py-0.5 rounded font-mono text-amber-900 text-[9px] sm:text-[10px] md:text-xs">RIGHT</code></li>
                        </ul>
                    </section>

                    <div className="w-full transform scale-95 md:scale-100 origin-top">
                        <CommandInput onCommand={handleCommand} />
                    </div>

                </div>

                <div className="w-full lg:w-auto flex justify-center items-center min-h-0 order-1 lg:order-2">
                    <Board robot={robot} walls={walls} plantedCells={plantedCells} />
                </div>
            </main>

            {report && (
                <div className="absolute bottom-14 right-3 sm:bottom-16 sm:right-4 md:bottom-20 md:right-6 z-50">
                    <RobotReport report={report} />
                </div>
            )}

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
    );
}