import { useState } from 'react';

import EnemyArena from './subcomponents/EnemyArena';
import GameMenu from './subcomponents/GameMenu';
import PlayerArena from './subcomponents/PlayerArena';
import ShipsPreview from './subcomponents/ShipsPreview';

import { ARENA, ARENA_SIZE } from '../../options/Options';

import './Game.style.scss';

const enemyShots = new Set();

function cpuTurn(playerArenaTemplate, addEnemyPoints, addEnemyMisses) {
  let enemyShot;

  do {
    enemyShot = randomEnemyShotPosition();
  } while (!enemyShot);

  let updatedPlayerArena = [...playerArenaTemplate];
  const { cpuX, cpuY } = enemyShot;

  if (playerArenaTemplate[cpuX][cpuY] === 'S') {
    updatedPlayerArena[cpuX][cpuY] = 'X';
    addEnemyPoints();
    console.log('Zestrzelony!');
  } else if (playerArenaTemplate[cpuX][cpuY] === '.') {
    updatedPlayerArena[cpuX][cpuY] = 'O';
    addEnemyMisses();
    console.log('Pudło!');
  }

  return updatedPlayerArena;
}

function randomEnemyShotPosition() {
  const x = Math.floor(Math.random() * ARENA_SIZE);
  const y = Math.floor(Math.random() * ARENA_SIZE);

  if (enemyShots.has(x + '' + y)) {
    return false;
  } else {
    enemyShots.add(x + '' + y);
    return { cpuX: x, cpuY: y };
  }
}

const Game = ({ playerArenaTemplate, shipsPositions, enemyArenaTemplate }) => {
  const [playerArena, setPlayerArena] = useState(playerArenaTemplate);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [enemyPoints, setEnemyPoints] = useState(0);
  const [playerMisses, setPlayerMisses] = useState(0);
  const [enemyMisses, setEnemyMisses] = useState(0);
  const [nextPlayerTurn, setNextPlayerTurn] = useState(false);

  const addPlayerPoints = () => {
    const points = Math.floor(1000 / (playerMisses ? playerMisses : 1));
    setPlayerPoints(playerPoints + points);
  }

  const addPlayerMisses = () => {
    setPlayerMisses(playerMisses + 1);
  }

  const addEnemyPoints = () => {
    const points = Math.floor(1000 / (playerMisses ? playerMisses : 1));
    setEnemyPoints(enemyPoints + points);
  }

  const addEnemyMisses = () => {
    setEnemyMisses(enemyMisses + 1);
  }

  const changePlayerTurn = () => {
    setNextPlayerTurn(!nextPlayerTurn);
    cpuTurn(playerArenaTemplate, addEnemyPoints, addEnemyMisses);
    setPlayerArena(playerArena);
  }

  return (
    <>
      <EnemyArena addPlayerPoints={addPlayerPoints} addPlayerMisses={addPlayerMisses} changePlayerTurn={changePlayerTurn} />
      <PlayerArena playerArena={playerArena} />
      <GameMenu playerPoints={playerPoints} playerMisses={playerMisses} enemyPoints={enemyPoints} enemyMisses={enemyMisses} />
      <ShipsPreview shipsPositions={shipsPositions} />
    </>
  )
}

export default Game;