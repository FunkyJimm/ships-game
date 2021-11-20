import { useState } from 'react';

import GameArena from './components/GameArena/GameArena';
import ShipsMenu from './components/ShipSelectionMenu/ShipSelectionMenu';
import ShipSelection from './components/ShipSelection/ShipSelection';

import './App.scss';

function App() {
  const [shipSizeChoosen, setShipSizeChoosen] = useState(null);
  const [shipRotation, setShipRotation] = useState(true);

  const handleChooseShipSize = (shipSize) => {
    setShipSizeChoosen(shipSize);
  }

  const handleChooseShipRotation = () => {
    setShipRotation(!shipRotation);
  }

  return (
    <main className="container">
      <ShipSelection shipSizeSelected={shipSizeChoosen} shipRotation={shipRotation} />
      <ShipsMenu onChooseShipSize={handleChooseShipSize} onChooseShipRotation={handleChooseShipRotation} />
    </main>
  );
}

export default App;
