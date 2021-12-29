import { useState } from 'react';

// import GameArena from './components/GameArena/GameArena';
// import GameArenaMenu from './components/GameArenaMenu/GameArenaMenu';
// import ShipsSelection from './components/ShipsSelection/ShipsSelection';
// import Game from './components/Game/Game';
import MainMenu from './components/MainMenu/MainMenu';

import CPU_ARENAS from './options/CPU-Arenas';

import './App.scss';

function App() {
  const [updatePlayerArena, setUpdatePlayerArena] = useState(null);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [playerMisses, setPlayerMisses] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(false);

  // Game arena screen
  const addPlayerPoints = () => {
    const points = Math.floor(1000 / (playerMisses ? playerMisses : 1));
    setPlayerPoints(playerPoints + points);
  }

  const addPlayerMisses = () => {
    setPlayerMisses(playerMisses + 1);
  }

  const changePlayerTurn = (playerArena) => {
    setPlayerTurn(!playerTurn);
    setUpdatePlayerArena(playerArena);
  }

  return (
    <main className="container">
      <MainMenu />
      {/* <Game playerArenaTemplate={CPU_ARENAS[0]} enemyArenaTemplate={CPU_ARENAS[1]} /> */}
      {/* <ShipsSelection /> */}
      {/* {!chooseConfirm &&
        <>
          <ShipSelection 
            shipSizeSelected={shipSizeChoosen} 
            shipRotation={shipRotation} 
            addShipSelected={addShipSelected} 
            shipsReset={shipsReset}
            chooseConfirm={chooseConfirm}
            addNewPlayerArena={addNewPlayerArena}
          />
          <ShipsMenu 
            onChooseShipSize={handleChooseShipSize} 
            onChooseShipRotation={handleChooseShipRotation} 
            shipSelected={shipSelected} 
            onShipsReset={handleShipsReset} 
            onChooseConfirm={handleChooseConfirm}
          />
        </>
      } */}
      {/* <GameArena newGameArena={newPlayerArena} addPlayerPoints={addPlayerPoints} addPlayerMisses={addPlayerMisses} changePlayerTurn={changePlayerTurn} />
      <GameArenaMenu playerPoints={playerPoints} playerMisses={playerMisses} />
      <PlayerPreviewArena playerArena={updatePlayerArena} /> */}
    </main>
  );
}

export default App;
