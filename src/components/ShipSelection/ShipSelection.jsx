import { useState } from 'react';

import './ShipSelection.scss';

const ARENA_SIZE = 10;

const ARENA = [
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
                  ];

const ShipSelection = (props) => {
  const { shipSizeSelected, shipRotation } = props;

  const [userSelectedArena, setUserSelectedArena] = useState(ARENA);

  const drawArena = () => {
    const arena = [];
    
    for (let y = 0; y < ARENA_SIZE; y++) {
      const ceils = [];
  
      for (let x = 0; x < ARENA_SIZE; x++) {
        let ceilClass = 'game-arena__row-ceil';
        const ceilName = `${x},${y}`;
        const position = { x, y };

        if (userSelectedArena[x][y] === 'S') {
          ceilClass += ' game-arena__row-ceil--ship-available';
        }

        const ceil = <div key={ceilName} id={ceilName} className={ceilClass} 
          onClick={() => handlePlaceShip(position)} 
          onMouseEnter={() => handlePlaceShipVisualization(position)} 
          onMouseLeave={() => handleResetVisualization()}>
            <p>{ceilName}</p>
          </div>
        ceils.push(ceil);
      }
  
      const row = <div key={y} className='game-arena__row'>{ceils}</div>
      arena.push(row);
    }
  
    return arena;
  }

  const checkCeilsAround = (position) => {
    const conditionArray = [-1, 0, 1];

    for (let x of conditionArray) {
      for (let y of conditionArray) {
        let posX = position.x + x > 0 && position.x + x < ARENA_SIZE ? x : 0;
        let posY = position.y + y > 0 && position.y + y < ARENA_SIZE ? y : 0;

        if (userSelectedArena[position.x + posX][position.y + posY] !== '.') {
          wrongCeilPositionVizualization(position);
          return false;
        }
      }
    }

    return true;
  }

  const wrongCeilPositionVizualization = (position) => {
    const conditionArray = [-1, 0, 1];

    for (let x of conditionArray) {
      for (let y of conditionArray) {
        let posX = position.x + x > 0 && position.x + x < ARENA_SIZE ? x : 0;
        let posY = position.y + y > 0 && position.y + y < ARENA_SIZE ? y : 0;

        const ceil = document.getElementById(`${position.x + posX},${position.y + posY}`);

        if (ceil) {
          ceil.style.opacity = '50%';
        }
      }
    }
  }

  const handlePlaceShip = (position) => {
    let freeCeilCounter = 0;
    const updatedArena = [...userSelectedArena];

    if (shipRotation) {
      for (let i = 0; i < shipSizeSelected; i++) {
        if (checkCeilsAround({ x: position.x + i, y: position.y })) {
          freeCeilCounter++;
        }
      }
      if (freeCeilCounter === shipSizeSelected) {
        for (let i = 0; i < shipSizeSelected; i++) {
          updatedArena[position.x + i][position.y] = 'S';
        }
      }
    } else {
      for (let i = 0; i < shipSizeSelected; i++) {
        if (checkCeilsAround({ x: position.x, y: position.y + i })) {
          freeCeilCounter++;
        }
      }
      if (freeCeilCounter === shipSizeSelected) {
        for (let i = 0; i < shipSizeSelected; i++) {
          updatedArena[position.x][position.y + i] = 'S';
        }
      }
    }
    
    setUserSelectedArena(prev => [...prev, updatedArena]);
  }

  const handlePlaceShipVisualization = (position) => {
    const shipArea = [];
    let ceilColor = 'green';

    for (let i = 0; i < shipSizeSelected; i++) {
      let ceil;

      if (shipRotation) {
        if (position.x + i < ARENA_SIZE) {
          ceil = document.getElementById(`${position.x + i},${position.y}`);
        } else {
          ceilColor = 'red';
        }
      } else {
        if (position.y + i < ARENA_SIZE) {
          ceil = document.getElementById(`${position.x},${position.y + i}`);
        } else {
          ceilColor = 'red';
        }
      }

      shipArea.push(ceil);
    }

    shipArea.forEach(ceil => {
      if (ceil) {
        ceil.style.background = ceilColor;
      }
    })
  }

  const handleResetVisualization = () => {
    const ceils = document.querySelectorAll('.game-arena__row-ceil');
    for (const ceil of ceils) { 
      if (ceil) {
        ceil.style.backgroundColor = '';
        ceil.style.opacity = '100%';
      }
    }
  }

  return (
    <div className='game-arena'>
      {drawArena()}
    </div>
  )
}

export default ShipSelection;