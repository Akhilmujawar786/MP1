import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import './AQI.css';

const generateInitialData = () => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    const row = [];
    for (let j = 0; j < 16; j++) {
      row.push(Math.floor(Math.random() * 50) + 1);
    }
    data.push(row);
  }
  return data;
};

const initialData = generateInitialData();

const numRows = initialData.length;
const numCols = initialData[0].length;
const operations = [
  [0, 1], [0, -1], [1, -1], [-1, 1],
  [1, 1], [-1, -1], [1, 0], [-1, 0]
];

const generateInitialGrid = (data) => {
  return data.map(row => row.map(value => ({ value, alive: true, reproduce: false })));
};

const getNeighbors = (grid, x, y) => {
  const neighbors = [];
  operations.forEach(([dx, dy]) => {
    const newX = x + dx;
    const newY = y + dy;
    if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
      neighbors.push(grid[newX][newY]);
    }
  });
  return neighbors;
};

const applyRules = (currentCell, neighbors) => {
  const aliveNeighbors = neighbors.filter(neighbor => neighbor.alive).length;
  const deadNeighbors = neighbors.length - aliveNeighbors;
  const avgNeighborEmissions = neighbors.reduce((sum, neighbor) => sum + neighbor.value, 0) / neighbors.length;
  let newValue = currentCell.value;

  if (aliveNeighbors > deadNeighbors) {
    newValue = Math.max(currentCell.value - Math.floor(Math.random() * 5), 0);
  } else {
    newValue = Math.min(currentCell.value + Math.floor(Math.random() * 5), 50);
  }

  const isAlive = newValue <= currentCell.value && newValue <= 40 && avgNeighborEmissions <= 35;
  const isDead = newValue > 40 || avgNeighborEmissions > 35;
  const isReproduce = avgNeighborEmissions <= 30 && aliveNeighbors > 3;

  return {
    value: newValue,
    alive: isAlive,
    dead: isDead,
    reproduce: isReproduce && !isDead
  };
};


const GameOfLife = () => {
  const [grid, setGrid] = useState(() => generateInitialGrid(initialData));
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            const neighbors = getNeighbors(g, i, j);
            const newCell = applyRules(g[i][j], neighbors);
            gridCopy[i][j] = newCell;
          }
        }
      });
    });
    setGeneration(prev => prev + 1);

    setTimeout(runSimulation, 1000);
  }, []);

  const countries = [
    "USA", "China", "India", "Russia", "Germany", "UK", "Japan", "France",
    "Brazil", "Canada", "Australia", "Italy", "South Korea", "Mexico",
    "Indonesia", "Saudi Arabia"
  ];
  const years = Array.from({ length: numRows }, (_, i) => 2010 + i);

  return (
    <div className="game-container">
       <h1 className='heading'>Conway's Game of Life: Green Grid Simulation</h1>
      <div className="controls">
        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? 'Stop' : 'Start'}
        </button>
        <br></br>
        <br></br>

        <button
          onClick={() => {
            setGrid(generateInitialGrid(generateInitialData()));
            setGeneration(0);
          }}
        > 
          Reset
        </button>
      </div>
      <div className="grid-container">
        <div>
          <div className="grid-labels">
            <div className="empty-cell"></div>
            {Array.from({ length: numCols }, (_, idx) => (
              <div key={idx} className="label-cell">{`C${idx + 1}`}</div>
            ))}
          </div>
          {grid.map((rows, i) => (
            <div key={i} className="grid-row">
              <div className="label-cell">{years[i]}</div>
              {rows.map((col, j) => (
                <div
                  key={`${i}-${j}`}
                  className={`cell ${grid[i][j].alive ? 'alive' : grid[i][j].dead ? 'dead' : grid[i][j].reproduce ? 'reproduce' : ''}`}
                >
                  {grid[i][j].value}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="legend">
          <h3>Legend</h3>
          <ul>
            <li><span className="cell alive"></span> Alive</li>
            <li><span className="cell dead"></span> Dead</li>
            <li><span className="cell reproduce"></span> Reproducing</li>
          </ul>
        </div>
      </div>
      <div className="generation">Generation: {generation}</div>
      <div className="bottom-container">
        <div className="countries">
          <h3 className='header'>Country Legend:</h3>
          {countries.map((country, idx) => (
            <div key={idx} className="country">{`C${idx + 1}: ${country}`}</div>
          ))}
        </div>
        <div className="explanation">
          <h3>Game Rules</h3>
          <p>In this simulation, each cell represents a country's CO2 emissions over time. The game starts with the initial data, and each year (generation), the emissions data is updated. A cell is considered "alive" (green) if the emissions have decreased or stayed the same compared to the previous year. If the emissions increase, the cell is "dead" (red). If a cell has significantly low emissions and positively impacts its neighbors, it is "reproducing" (yellow).</p>
          <p>Rules:</p>
          <ul>
            <li>A cell is alive if its CO2 emissions have decreased or stayed the same and do not exceed 40, and the average emissions of its neighbors are less than or equal to 35.</li>
            <li>A cell is dead if its CO2 emissions increase, exceed 40, or if the average emissions of its neighbors exceed 35.</li>
            <li>A cell reproduces if the average emissions of its neighbors are very low (less than 15) and there are more than 3 alive neighbors.</li>
          </ul>
        </div>
      </div>
    </div>
  );

};

export default GameOfLife;
