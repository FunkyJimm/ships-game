import { useState } from 'react';

import GameArena from './components/GameArena/GameArena';
import ShipsMenu from './components/ShipSelectionMenu/ShipSelectionMenu';
import ShipSelection from './components/ShipSelection/ShipSelection';

import './App.scss';

function App() {
  const [shipSizeChoosen, setShipSizeChoosen] = useState(null);
  const [shipRotation, setShipRotation] = useState(true);
  const [shipSelected, setShipSelected] = useState({ sm: 0, md: 0, lg: 0, xl: 0 });
  const [shipsReset, setShipsReset] = useState(false);
  const [chooseConfirm, setChooseConfirm] = useState(false);
  const [newPlayerArena, setNewPlayerArena] = useState(null);

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
      {!chooseConfirm &&
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
      }
      {/* {newPlayerArena &&
        <>
          {console.log("Drugi komponent")}
          <GameArena />
        </>
      } */}
    </main>
  );
}

export default App;
