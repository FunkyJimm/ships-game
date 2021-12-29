const ShipsSelectionMenu = ({ onChooseShipSize, onChooseShipRotation, onShipsReset, shipsSelected, onChooseConfirm }) => {
  return (
    <div className="ships-selection-menu">
      <button onClick={() => onChooseShipSize(1)} disabled={shipsSelected.sm === 4}>Small one</button>
      <button onClick={() => onChooseShipSize(2)} disabled={shipsSelected.md === 3}>Medium one</button>
      <button onClick={() => onChooseShipSize(3)} disabled={shipsSelected.lg === 2}>Large one</button>
      <button onClick={() => onChooseShipSize(4)} disabled={shipsSelected.xl === 1}>Extra large one</button>
      <button onClick={() => onChooseShipRotation()}>Rotate</button>
      <button onClick={() => onShipsReset()}>Reset</button>
      <button onClick={() => onChooseConfirm()}>Potwierdź</button>
    </div>
  )
}

export default ShipsSelectionMenu;