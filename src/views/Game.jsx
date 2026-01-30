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
            case "MOVE":
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

            case "LEFT":
                if (!robot) return;
                const newFacingLeft = DIRECTIONS[(DIRECTIONS.indexOf(robot.facing) + 3) % 4];
                setRobot({...robot, facing: newFacingLeft});
                break;

            case "RIGHT":
                if (!robot) return;
                const newFacingRight = DIRECTIONS[(DIRECTIONS.indexOf(robot.facing) + 1) % 4];
                setRobot({...robot, facing: newFacingRight});
                break;
            
            case "REPORT":
                if (robot) {
                    setReport(`${robot.row},${robot.col},${robot.facing}`);
                }
                break;
        }
        
    };

    const resetGame = () => {
        setRobot(null);
        setWalls([]);
        setReport("");
        setPlantedCells([]);
    };

    return (
        
        <div className="h-screen w-full overflow-hidden p-4 flex flex-col" 
            style={{ 
                backgroundColor: '#C0D470',
                backgroundImage: `url('/background/Grass.png'), url('/background/Grass.png'), url('/background/Grass.png'), url('/background/Grass.png'), url('/background/Grass.png'), url('/background/Grass.png'), url('/background/Grass.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `
                5% 5%,     /* Top-Left */
                95% 10%,   /* Top-Right */
                2% 50%,    /* Middle-Left */
                98% 60%,   /* Middle-Right */
                10% 90%,   /* Bottom-Left */
                85% 95%,   /* Bottom-Right */
                45% 20%     /* Top-Center (suave) */
                `,
                backgroundSize: '120px, 150px, 100px, 110px, 130px, 140px, 170px',
                backgroundBlendMode: 'soft-light', 
                imageRendering: 'pixelated'
            }}>

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
                <div className="absolute top-full mt-3 left-0 scale-0 group-hover:scale-100 transition-transform duration-200 origin-top">
                    <div className="bg-[#5D4037] text-[#FDF5E6] text-[20px] px-3 py-1 rounded shadow-lg whitespace-nowrap"
                        style={{ fontFamily: '"VT323", monospace' }}>
                            GO HOME
                        <div className="absolute -top-1 left-6 w-2 h-2 bg-[#5D4037] rotate-45"></div>
                    </div>
                </div>
            </Link>

            <button onClick={resetGame} className="group absolute top-6 right-6 z-50 px-7 py-4 bg-[#8C735D] text-[#FDF5E6] text-xs font-bold rounded-lg shadow-[0_4px_0_0_#5D4037] hover:bg-[#7D5A44] active:shadow-none active:translate-y-[4px] transition-all"
                style={{ fontFamily: '"VT323", monospace' }}>

                <span className="text-2xl leading-none inline-block transition-transform duration-200 ease-in-out group-hover:rotate-180">↻</span>

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
                    AUTONOMOUS HARVESTER
                </h1>
            </header>

            <main className="flex-1 flex flex-row  max-w-[1200px] mx-auto w-full items-center justify-center p-4">
                <div className="w-[450px] flex flex-col gap-6 shrink-0 items-stretch">
                    
                    <section className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border-4 border-amber-900/20 w-full">
                        <h3 className="font-bold text-[#5a4a3a] mb-2 tracking-widest" style={{ fontFamily: '"VT323", monospace', fontSize: '2rem', lineHeight: '1' }}>
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

                <div className="absolute bottom-6 right-6 z-50">
                    <RobotReport report={report} />
                </div>
                
        </div>
    );
}