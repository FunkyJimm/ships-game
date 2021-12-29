const ShipsPreview = ({ shipsPositions }) => {
  const renderShipsPreview = () => {
    console.log(shipsPositions);
  }

  return (
    <div className="ships-preview">
      {renderShipsPreview()}
    </div>
  )
}

export default ShipsPreview;