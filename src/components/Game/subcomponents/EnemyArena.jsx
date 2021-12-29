import { useState } from 'react';

import { ARENA, ARENA_SIZE } from '../../../options/Options';

const TEMP_ARENA = [
  ['S', '.', '.', '.', '.', '.', 'S', '.', '.', '.'],
  ['.', '.', 'S', 'S', 'S', 'S', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'S', 'S', '.', '.', 'S', '.', '.', 'S', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', 'S', '.'],
  ['.', '.', '.', '.', 'S', '.', '.', '.', 'S', '.'],
  ['.', '.', '.', '.', 'S', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', 'S', 'S', '.', '.', '.'],
  ['.', 'S', 'S', 'S', '.', '.', '.', '.', '.', 'S']
];

const GameArena = ({ addPlayerPoints, addPlayerMisses, changePlayerTurn }) => {
  const [gameArena, setGameArena] = useState([...TEMP_ARENA]);

  const drawArena = () => {
    const arena = [];
    
    for (let y = 0; y < ARENA_SIZE; y++) {
      const ceils = [];
  
      for (let x = 0; x < ARENA_SIZE; x++) {
        let ceilClass = 'enemy-arena__row-ceil';
        const ceilName = `${x},${y}`;
        const position = { x, y };

        if (gameArena[x][y] === 'O') {
          ceilClass += ' enemy-arena__row-ceil--shot-missing';
        } else if (gameArena[x][y] === 'X') {
          ceilClass += ' enemy-arena__row-ceil--ship-destroyed';
        }

        const ceil = <div key={ceilName} id={ceilName} className={ceilClass} 
          onClick={() => handleShotMissle(position)}>
            <p>{ceilName}</p>
          </div>
        ceils.push(ceil);
      }
  
      const row = <div key={y} className='enemy-arena__row'>{ceils}</div>
      arena.push(row);
    }
  
    return arena;
  }

  const handleShotMissle = ({ x, y }) => {
    let updatedGameArena = [...gameArena];

    if (gameArena[x][y] === 'S') {
      updatedGameArena[x][y] = 'X';
      setGameArena(updatedGameArena);
      addPlayerPoints();
      changePlayerTurn();
      console.log('Zestrzelony!');
    } else if (gameArena[x][y] === '.') {
      updatedGameArena[x][y] = 'O';
      setGameArena(updatedGameArena);
      addPlayerMisses();
      changePlayerTurn();
      console.log('Pudło!');
    }

  }

  return (
    <div className="enemy-arena">
      {drawArena()}
    </div>
  )
}

export default GameArena;