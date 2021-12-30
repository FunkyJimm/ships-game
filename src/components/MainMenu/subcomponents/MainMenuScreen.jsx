const MainMenuScreen = ({ onNewGame, onRanking, onHelp, onAuthors }) => {
  return (
    <>
      <h1>Ships</h1>
      <div className="main-menu__options">
        <button onClick={onNewGame}>Nowa gra</button>
        <button onClick={onRanking}>Ranking</button>
        <button onClick={onHelp}>Pomoc</button>
        <button onClick={onAuthors}>O autorach</button>
      </div>
      <div className="main-menu__footer">
        <p>Copyright by FunkyJimm 2021. All rights reserved.</p>
      </div>
    </>
  )
}

export default MainMenuScreen;