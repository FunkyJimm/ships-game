import './ShipSelectionMenu.scss';

const ShipsMenu = ({ onChooseShipSize, onChooseShipRotation, onShipsReset, shipSelected, onChooseConfirm }) => {
  return (
    <div className="ships-menu">
      <button onClick={() => onChooseShipSize(1)} disabled={shipSelected.sm === 4}>Small one</button>
      <button onClick={() => onChooseShipSize(2)} disabled={shipSelected.md === 3}>Medium one</button>
      <button onClick={() => onChooseShipSize(3)} disabled={shipSelected.lg === 2}>Large one</button>
      <button onClick={() => onChooseShipSize(4)} disabled={shipSelected.xl === 1}>Extra large one</button>
      <button onClick={() => onChooseShipRotation()}>Rotate</button>
      <button onClick={() => onShipsReset()}>Reset</button>
      <button onClick={() => onChooseConfirm()}>Potwierdź</button>
    </div>
  )
}

export default ShipsMenu;