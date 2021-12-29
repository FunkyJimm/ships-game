import { useEffect, useState } from 'react';

import { ARENA, ARENA_SIZE } from '../../../options/Options';

const ShipsSelectionScreen = (props) => {
  const { shipSize, shipRotation, addShipsSelected, shipsReset, shipsConfirm, addNewPlayerArena } = props;

  const [userSelectedArena, setUserSelectedArena] = useState([...ARENA]);

  useEffect(() => {
    const newArena = JSON.parse(JSON.stringify(ARENA));
    setUserSelectedArena(newArena);

    if (shipsConfirm) {
      addNewPlayerArena(userSelectedArena);
    }
  }, [shipsReset, shipsConfirm]);

  const drawArena = () => {
    const arena = [];
    
    for (let y = 0; y < ARENA_SIZE; y++) {
      const ceils = [];
  
      for (let x = 0; x < ARENA_SIZE; x++) {
        let ceilClass = ' ships-selection-screen__row-ceil';
        const ceilName = `${x},${y}`;
        const position = { x, y };

        if (userSelectedArena[x][y] === 'S') {
          ceilClass += ' ships-selection-screen__row-ceil--ship-placed';
        }

        const ceil = <div key={ceilName} id={ceilName} className={ceilClass} 
          onClick={() => handlePlaceShip(position)} 
          onMouseEnter={() => handlePlaceShipVisualization(position)} 
          onMouseLeave={() => handleResetVisualization()}>
            <p>{ceilName}</p>
          </div>
        ceils.push(ceil);
      }
  
      const row = <div key={y} className='ships-selection-screen__row'>{ceils}</div>
      arena.push(row);
    }
  
    return arena;
  }

  const checkCeilsAround = (position) => {
    const conditionArray = [-1, 0, 1];

    for (let x of conditionArray) {
      for (let y of conditionArray) {
        let posX = position.x + x >= 0 && position.x + x < ARENA_SIZE ? x : 0;
        let posY = position.y + y >= 0 && position.y + y < ARENA_SIZE ? y : 0;

        if (userSelectedArena[position.x + posX][position.y + posY] !== '.') {
          wrongCeilPositionVizualization(position);
          return false;
        }
        console.log("DUPA")
      }
    }

    return true;
  }

  const wrongCeilPositionVizualization = (position) => {
    const conditionArray = [-1, 0, 1];

    for (let x of conditionArray) {
      for (let y of conditionArray) {
        let posX = position.x + x >= 0 && position.x + x < ARENA_SIZE ? x : 0;
        let posY = position.y + y >= 0 && position.y + y < ARENA_SIZE ? y : 0;

        const ceil = document.getElementById(`${position.x + posX},${position.y + posY}`);

        if (ceil) {
          ceil.style.opacity = '50%';
        }
      }
    }
  }

  const handlePlaceShip = (position) => {
    let freeCeilCounter = 0;
    const shipPosition = [];
    const updatedArena = JSON.parse(JSON.stringify(userSelectedArena));

    if(shipRotation) {
      if (position.x + shipSize <= ARENA_SIZE) {
        for (let i = 0; i < shipSize; i++) {
          if (checkCeilsAround({ x: position.x + i, y: position.y })) {
            freeCeilCounter++;
          }
        }
        if (freeCeilCounter === shipSize) {
          for (let i = 0; i < shipSize; i++) {
            updatedArena[position.x + i][position.y] = 'S';
            shipPosition.push(position.x + i, position.y);
          }
        }
      }
    } else {
      if (position.y + shipSize <= ARENA_SIZE) {
        for (let i = 0; i < shipSize; i++) {
          if (checkCeilsAround({ x: position.x, y: position.y + i })) {
            freeCeilCounter++;
          }
        }
        if (freeCeilCounter === shipSize) {
          for (let i = 0; i < shipSize; i++) {
            updatedArena[position.x][position.y + i] = 'S';
            shipPosition.push(position.x, position.y + i);
          }
        }
      }
    }

    if (freeCeilCounter === shipSize) {
      if (addShipsSelected(shipSize, shipPosition)) {
        setUserSelectedArena(updatedArena);
      }
    }
  }

  const handlePlaceShipVisualization = (position) => {
    const shipArea = [];
    let ceilColor = 'green';

    for (let i = 0; i < shipSize; i++) {
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
    const ceils = document.querySelectorAll('.ships-selection-screen__row-ceil');
    for (const ceil of ceils) { 
      if (ceil) {
        ceil.style.backgroundColor = '';
        ceil.style.opacity = '100%';
      }
    }
  }

  return (
    <div className='ships-selection-screen'>
      {drawArena()}
    </div>
  )
}

export default ShipsSelectionScreen;