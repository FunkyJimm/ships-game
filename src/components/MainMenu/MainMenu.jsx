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
      <h1>Ships</h1>
      <div className="main-menu__options">
        <button>Nowa gra</button>
        <button>Ranking</button>
        <button>Pomoc</button>
        <button>O autorach</button>
      </div>
      <div className="main-menu__footer">
        <p>Copyright by FunkyJimm 2021. All rights reserved.</p>
      </div>
      {/* { !newPlayerArena && <ShipsSelection createNewGame={createNewGame} /> }
      { newPlayerArena && <Game playerArenaTemplate={newPlayerArena} shipsPositions={shipsPositions} /> } */}
    </div>
  )
}

export default MainMenu;