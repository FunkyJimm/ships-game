const GameMenu = ({ playerPoints, playerMisses, enemyPoints, enemyMisses }) => {
  return (
    <div className='game-menu'>
      <h2>Punkty gracza:</h2>
      <p>Punkty: {playerPoints}</p>
      <p>Pudła: {playerMisses}</p>
      <h2>Punkty przeciwnika:</h2>
      <p>Punkty: {enemyPoints}</p>
      <p>Pudła: {enemyMisses}</p>
    </div>
  )
}

export default GameMenu;