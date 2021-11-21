import { useState } from 'react';

import './GameArena.scss';

import { ARENA, ARENA_SIZE } from '../../options/Options';

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

const GameArena = ({ newGameArena, addPlayerPoints, addPlayerMisses, updatePlayerArena }) => {
  const [gameArena, setGameArena] = useState([...TEMP_ARENA]);

  const drawArena = () => {
    const arena = [];
    
    for (let y = 0; y < ARENA_SIZE; y++) {
      const ceils = [];
  
      for (let x = 0; x < ARENA_SIZE; x++) {
        let ceilClass = 'game-arena__row-ceil';
        const ceilName = `${x},${y}`;
        const position = { x, y };

        if (gameArena[x][y] === 'O') {
          ceilClass += ' game-arena__row-ceil--shot-missing';
        } else if (gameArena[x][y] === 'X') {
          ceilClass += ' game-arena__row-ceil--ship-destroyed';
        }

        const ceil = <div key={ceilName} id={ceilName} className={ceilClass} 
          onClick={() => handleShotMissle(position)}>
            <p>{ceilName}</p>
          </div>
        ceils.push(ceil);
      }
  
      const row = <div key={y} className='game-arena__row'>{ceils}</div>
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
      console.log('Zestrzelony!');
    } else if (gameArena[x][y] === '.') {
      updatedGameArena[x][y] = 'O';
      setGameArena(updatedGameArena);
      addPlayerMisses();
      console.log('Pudło!');
    }

    updatePlayerArena(updatedGameArena);
  }

  return (
    <div className="game-arena">
      {drawArena()}
    </div>
  )
}

export default GameArena;