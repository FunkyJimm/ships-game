import { useState } from 'react';

import Game from '../Game/Game';
import MainMenuScreen from './subcomponents/MainMenuScreen';
import ShipsSelection from '../ShipsSelection/ShipsSelection';


import './MainMenu.style.scss';

const MainMenu = () => {
  const [newGame, setNewGame] = useState(false);
  const [ranking, setRanking] = useState(false);
  const [help, setHelp] = useState(false);
  const [authors, setAuthors] = useState(false);
  const [newPlayerArena, setNewPlayerArena] = useState(null);
  const [shipsPositions, setShipsPositions] = useState(null);

  const handleNewGame = () => {
    setNewGame(true);
  }

  const handleRanking = () => {
    setRanking(true);
  }

  const handleHelp = () => {
    setHelp(true);
  }

  const handleAuthors = () => {
    setAuthors(true);
  }

  const createNewGame = (playerArenaTemplate, shipsPositions) => {
    setNewPlayerArena(playerArenaTemplate);
    setShipsPositions(shipsPositions);
  }

  // Funkcje menu
  const MainMenu = () => {
    if (newGame) {
      return (
        <>
          { !newPlayerArena && <ShipsSelection createNewGame={createNewGame} /> }
          { newPlayerArena && <Game playerArenaTemplate={newPlayerArena} shipsPositions={shipsPositions} /> }
        </>
      )
    } else if (ranking) {
      console.log("Ranking");
    } else if (help) {
      console.log("Pomoc");
    } else if (authors) {
      console.log("Autorzy");
    } else {
      return (
        <MainMenuScreen onNewGame={handleNewGame} onRanking={handleRanking} onHelp={handleHelp} onAuthors={handleAuthors} />
      )
    }
  }

  return (
    <div className="main-menu">
      { MainMenu() }
    </div>
  )
}

export default MainMenu;