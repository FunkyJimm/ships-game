import { useState } from 'react';

import ShipsSelection from '../ShipsSelection/ShipsSelection';
import Game from '../Game/Game';

import './MainMenu.style.scss';

const MainMenu = () => {
  const [newPlayerArena, setNewPlayerArena] = useState(null);
  const [shipsPositions, setShipsPositions] = useState(null);

  const createNewGame = (playerArenaTemplate, shipsPositions) => {
    setNewPlayerArena(playerArenaTemplate);
    setShipsPositions(shipsPositions);
  }

  return (
    <div className="main-menu">
      { !newPlayerArena && <ShipsSelection createNewGame={createNewGame} /> }
      { newPlayerArena && <Game playerArenaTemplate={newPlayerArena} shipsPositions={shipsPositions} /> }
    </div>
  )
}

export default MainMenu;