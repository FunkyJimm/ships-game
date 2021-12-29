import { ARENA_SIZE } from '../../../options/Options';

const PlayerPreviewArena = ({ playerArena }) => {
  const drawArena = () => {
    const arena = [];
    
    for (let y = 0; y < ARENA_SIZE; y++) {
      const ceils = [];
  
      for (let x = 0; x < ARENA_SIZE; x++) {
        let ceilClass = 'player-arena__row-ceil';
        const ceilName = `${x},${y}`;

        if (playerArena[x][y] === 'S') {
          ceilClass += ' player-arena__row-ceil--ship-placed';
        } else if (playerArena[x][y] === 'O') {
          ceilClass += ' player-arena__row-ceil--shot-missing';
        } else if (playerArena[x][y] === 'X') {
          ceilClass += ' player-arena__row-ceil--ship-destroyed';
        }

        const ceil = <div key={ceilName} id={ceilName} className={ceilClass}>
          <p>{ceilName}</p>
        </div>
        ceils.push(ceil);
      }
  
      const row = <div key={y} className='player-arena__row'>{ceils}</div>
      arena.push(row);
    }
  
    return arena;
  }

  return (
    <div className="player-arena">
      {playerArena !== null ? drawArena() : null}
    </div>
  )
}

export default PlayerPreviewArena;