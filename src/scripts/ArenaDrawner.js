function drawArena(gameArena, onShotMissle, onShipPlace, onReset, shipSizeChoosen, shipRotation) {
  const arena = [];
  
  for (let i = 0; i < ARENA_SIZE; i++) {
    const ceils = [];

    for (let j = 0; j < ARENA_SIZE; j++) {
      const ceilName = `${String.fromCharCode(65 + i)}${j + 1}`;
      let ceilClass = 'game-arena__row-ceil';

      if (gameArena[j][i] === 'O') {
        ceilClass += ' game-arena__row-ceil--miss';
      } else if (gameArena[j][i] === 'S') {
        // ceilClass += ' game-arena__row-ceil--ship-available';
      } else if (gameArena[j][i] === 'X') {
        ceilClass += ' game-arena__row-ceil--ship-destroyed';
      }

      const ceil = <div key={ceilName} className={ceilClass} id={`${i},${j}`} data-ceil-name={ceilName} onClick={() => onShotMissle({ x: j, y: i })} onMouseEnter={() => onShipPlace({ x: j, y: i }, shipSizeChoosen, shipRotation)} onMouseLeave={() => onReset()}><p>{ceilName}</p></div>
      ceils.push(ceil);
    }

    const row = <div key={i} className="game-arena__row">{ceils}</div>
    arena.push(row);
  }

  return arena;
}