import { useState } from 'react';

import ShipsSelectionScreen from './subcomponents/ShipsSelectionScreen';
import ShipsSelectionMenu from './subcomponents/ShipsSelectionMenu';

import './ShipsSelection.style.scss';

const shipsPositions = {
  sm: [],
  md: [],
  lg: [],
  xl: [],
};

const deleteShipsPositions = () => {
  shipsPositions.sm = [];
  shipsPositions.md = [];
  shipsPositions.lg = [];
  shipsPositions.xl = [];
}

const ShipsSelection = ({ createNewGame }) => {
  const [shipSize, setShipSize] = useState(null);
  const [shipRotation, setShipRotation] = useState(true);
  const [shipsSelected, setShipsSelected] = useState({ sm: 0, md: 0, lg: 0, xl: 0 });
  const [shipsReset, setShipsReset] = useState(false);
  const [shipsConfirm, setShipsConfirm] = useState(false);

  const handleChooseShipSize = (shipSize) => {
    setShipSize(shipSize);
  }

  const handleChooseShipRotation = () => {
    setShipRotation(!shipRotation);
  }

  const handleShipsReset = () => {
    setShipsSelected({ sm: 0, md: 0, lg: 0, xl: 0 });
    setShipsReset(!shipsReset);
    deleteShipsPositions();
  }

  const handleChooseConfirm = () => {
    if (shipsSelected.sm === 4 && shipsSelected.md === 3 && shipsSelected.lg === 2 && shipsSelected.xl === 1) {
      setShipsConfirm(true);
    }
  }

  const addNewPlayerArena = (newPlayerArena) => {
    createNewGame(newPlayerArena, shipsPositions);
  }

  const addShipsSelected = (shipSize, shipPosition) => {
    switch (shipSize) {
      case 1:
        if (shipsSelected.sm < 4) {
          setShipsSelected(prev => ({...prev,  ['sm']: shipsSelected.sm + 1}));
          shipsPositions.sm.push(shipPosition);
          return true
        }
        break;
      case 2:
        if (shipsSelected.md < 3) {
          setShipsSelected(prev => ({...prev,  ['md']: shipsSelected.md + 1}));
          shipsPositions.md.push(shipPosition);
          return true
        }
        break;
      case 3:
        if (shipsSelected.lg < 2) {
          setShipsSelected(prev => ({...prev,  ['lg']: shipsSelected.lg + 1}));
          shipsPositions.lg.push(shipPosition);
          return true
        }
        break;
      case 4:
        if (shipsSelected.xl < 1) {
          setShipsSelected(prev => ({...prev,  ['xl']: shipsSelected.xl + 1}));
          shipsPositions.xl.push(shipPosition);
          return true
        }
        break;
    }

    return false;
  }

  return (
    <>
      <ShipsSelectionScreen 
        shipSize={shipSize} 
        shipRotation={shipRotation} 
        addShipsSelected={addShipsSelected} 
        shipsReset={shipsReset}
        shipsConfirm={shipsConfirm}
        addNewPlayerArena={addNewPlayerArena}
      />
      <ShipsSelectionMenu
        onChooseShipSize={handleChooseShipSize} 
        onChooseShipRotation={handleChooseShipRotation} 
        shipsSelected={shipsSelected} 
        onShipsReset={handleShipsReset} 
        onChooseConfirm={handleChooseConfirm}
      />
    </>
  )
}

export default ShipsSelection;