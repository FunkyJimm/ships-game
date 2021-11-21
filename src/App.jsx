import { useState } from 'react';

import GameArena from './components/GameArena/GameArena';
import GameArenaMenu from './components/GameArenaMenu/GameArenaMenu';
import ShipSelection from './components/ShipSelection/ShipSelection';
import ShipSelectionMenu from './components/ShipSelectionMenu/ShipSelectionMenu';
import PlayerPreviewArena from './components/PlayerPreviewArena/PlayerPreviewArena';

import './App.scss';

function App() {
  const [shipSizeChoosen, setShipSizeChoosen] = useState(null);
  const [shipRotation, setShipRotation] = useState(true);
  const [shipSelected, setShipSelected] = useState({ sm: 0, md: 0, lg: 0, xl: 0 });
  const [shipsReset, setShipsReset] = useState(false);
  const [chooseConfirm, setChooseConfirm] = useState(false);
  const [newPlayerArena, setNewPlayerArena] = useState(null);
  const [playerArenaRefresh, setPlayerArenaRefresh] = useState(null);

  // Ship selection screen
  const handleChooseShipSize = (shipSize) => {
    setShipSizeChoosen(shipSize);
  }

  const handleChooseShipRotation = () => {
    setShipRotation(!shipRotation);
  }

  const handleShipsReset = () => {
    setShipSelected({ sm: 0, md: 0, lg: 0, xl: 0 });
    setShipsReset(!shipsReset);
  }

  const handleChooseConfirm = () => {
    if (shipSelected.sm === 4 && shipSelected.md === 3 && shipSelected.lg === 2 && shipSelected.xl === 1) {
      setChooseConfirm(true);
    }
  }

  const addNewPlayerArena = (newPlayerArena) => {
    setNewPlayerArena(newPlayerArena);
  }

  const updatePlayerArena = (playerArena) => {
    setPlayerArenaRefresh(playerArena);
  }

  const [playerPoints, setPlayerPoints] = useState(0);
  const [playerMisses, setPlayerMisses] = useState(0);

  // Game arena screen
  const addPlayerPoints = () => {
    const points = Math.floor(1000 / (playerMisses ? playerMisses : 1));
    setPlayerPoints(playerPoints + points);
  }

  const addPlayerMisses = () => {
    setPlayerMisses(playerMisses + 1);
  }

  const addShipSelected = (shipSize) => {
    switch (shipSize) {
      case 1:
        if (shipSelected.sm < 4) {
          setShipSelected(prev => ({...prev,  ['sm']: shipSelected.sm + 1}));
          return true
        }
        break;
      case 2:
        if (shipSelected.md < 3) {
          setShipSelected(prev => ({...prev,  ['md']: shipSelected.md + 1}));
          return true
        }
        break;
      case 3:
        if (shipSelected.lg < 2) {
          setShipSelected(prev => ({...prev,  ['lg']: shipSelected.lg + 1}));
          return true
        }
        break;
      case 4:
        if (shipSelected.xl < 1) {
          setShipSelected(prev => ({...prev,  ['xl']: shipSelected.xl + 1}));
          return true
        }
        break;
    }

    return false;
  }

  return (
    <main className="container">
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
      <GameArena newGameArena={newPlayerArena} addPlayerPoints={addPlayerPoints} addPlayerMisses={addPlayerMisses} updatePlayerArena={updatePlayerArena} />
      <GameArenaMenu playerPoints={playerPoints} playerMisses={playerMisses} />
      <PlayerPreviewArena playerArena={playerArenaRefresh} />
    </main>
  );
}

export default App;
