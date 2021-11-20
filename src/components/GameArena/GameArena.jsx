// import { useEffect, useState } from 'react';
// import './GameArena.scss';

// const ARENA_SIZE = 10;

// // function drawArena(shipSize) {
// //   const arena = [];

// //   for (let i = 0; i <= ARENA_SIZE; i++) {
// //     const ceils = [];

// //     for (let j = 0; j <= ARENA_SIZE; j++) {
// //       const ceilName = `${String.fromCharCode(65 + i)}${j + 1}`;
// //       const ceil = <div key={ceilName} className="game-arena__row-ceil" data-ceil-name={ceilName}><p>{ceilName}</p></div>
// //       ceils.push(ceil);
// //     }

// //     const row = <div key={i} className="game-arena__row">{ceils}</div>
// //     arena.push(row);
// //   }

// //   return arena;
// // }

// let newGameArena = [
//                     ['S', '.', '.', '.', '.', '.', 'S', '.', '.', '.'],
//                     ['.', '.', 'S', 'S', 'S', 'S', '.', '.', '.', '.'],
//                     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
//                     ['.', 'S', 'S', '.', '.', 'S', '.', '.', 'S', '.'],
//                     ['.', '.', '.', '.', '.', '.', '.', '.', 'S', '.'],
//                     ['.', '.', '.', '.', 'S', '.', '.', '.', 'S', '.'],
//                     ['.', '.', '.', '.', 'S', '.', '.', '.', '.', '.'],
//                     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
//                     ['.', '.', '.', '.', '.', 'S', 'S', '.', '.', '.'],
//                     ['.', 'S', 'S', 'S', '.', '.', '.', '.', '.', 'S']
//                   ];

// function drawArena(gameArena, onShotMissle, onShipPlace, onReset, shipSizeChoosen, shipRotation) {
//   const arena = [];
  
//   for (let i = 0; i < ARENA_SIZE; i++) {
//     const ceils = [];

//     for (let j = 0; j < ARENA_SIZE; j++) {
//       const ceilName = `${String.fromCharCode(65 + i)}${j + 1}`;
//       let ceilClass = 'game-arena__row-ceil';

//       if (gameArena[j][i] === 'O') {
//         ceilClass += ' game-arena__row-ceil--miss';
//       } else if (gameArena[j][i] === 'S') {
//         // ceilClass += ' game-arena__row-ceil--ship-available';
//       } else if (gameArena[j][i] === 'X') {
//         ceilClass += ' game-arena__row-ceil--ship-destroyed';
//       }

//       const ceil = <div key={ceilName} className={ceilClass} id={`${i},${j}`} data-ceil-name={ceilName} onClick={() => onShotMissle({ x: j, y: i })} onMouseEnter={() => onShipPlace({ x: j, y: i }, shipSizeChoosen, shipRotation)} onMouseLeave={() => onReset()}><p>{ceilName}</p></div>
//       ceils.push(ceil);
//     }

//     const row = <div key={i} className="game-arena__row">{ceils}</div>
//     arena.push(row);
//   }

//   return arena;
// }

// const GameArena = ({ shipSizeChoosen, shipRotation }) => {
//   const [gameArena, setGameArena] = useState(newGameArena);
//   let points = 0;

//   useEffect(() => {
//     console.log(shipSizeChoosen);
//   }, [shipSizeChoosen])

//   const handleShotMissle = ({x, y}) => {
//     let updatedGameArena = [...gameArena];
//     if (gameArena[x][y] === 'S') {
//       updatedGameArena[x][y] = 'X';
//       setGameArena(updatedGameArena);
//       points++;
//       console.log('Zestrzelony!');
//     } else if (gameArena[x][y] === '.') {
//       updatedGameArena[x][y] = 'O';
//       setGameArena(updatedGameArena);
//       console.log('Pudło!');
//     }
//     if (points === 20) {
//       console.log('Koniec gry!');
//     }
//   }

//   const handleShipPlace = (position, shipSize, rotate) => {
//     const shipArea = [];
//     let ceilColor = 'green';

//     for (let i = 0; i < shipSize; i++) {
//       let ceil;

//       if (rotate) {
//         if (position.y + i < ARENA_SIZE) {
//           ceil = document.getElementById(`${position.y + i},${position.x}`);
//         } else {
//           ceilColor = 'red';
//         }
//       } else {
//         if (position.x + i < ARENA_SIZE) {
//           ceil = document.getElementById(`${position.y},${position.x + i}`);
//         } else {
//           ceilColor = 'red';
//         }
//       }

//       shipArea.push(ceil);
//     }

//     shipArea.forEach(ceil => {
//       if (ceil) {
//         ceil.style.background = ceilColor;
//       }
//     })
//   }

//   const handleReset = () => {
//     const divs = document.getElementsByTagName('div');
//     for (const div of divs) { 
//       div.style.backgroundColor = '';
//     }
//   }

//   return (
//     <div className="game-arena">
//       {drawArena(gameArena, handleShotMissle, handleShipPlace, handleReset, shipSizeChoosen, shipRotation)}
//     </div>
//   )
// }

// export default GameArena;