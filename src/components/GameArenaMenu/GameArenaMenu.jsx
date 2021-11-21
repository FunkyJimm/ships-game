import './GameArenaMenu.scss';

const GameArenaMenu = ({ playerPoints, playerMisses }) => {
  return (
    <div className='game-arena-menu'>
      <p>{playerPoints}</p>
      <p>{playerMisses}</p>
    </div>
  )
}

export default GameArenaMenu;