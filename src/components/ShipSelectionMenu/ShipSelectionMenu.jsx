import './ShipSelectionMenu.scss';

const ShipsMenu = ({ onChooseShipSize, onChooseShipRotation }) => {
  return (
    <div className="ships-menu">
      <button onClick={() => onChooseShipSize(1)}>Small one</button>
      <button onClick={() => onChooseShipSize(2)}>Medium one</button>
      <button onClick={() => onChooseShipSize(3)}>Large one</button>
      <button onClick={() => onChooseShipSize(4)}>Extra large one</button>
      <button onClick={() => onChooseShipRotation()}>Rotate</button>
    </div>
  )
}

export default ShipsMenu;