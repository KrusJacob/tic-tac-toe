import React, { FC, useState, useEffect } from "react";
import Modal from "./components/Modal";
import Score from "./components/Score";
import Square from "./components/Square";
import { INITIAL_GAME_STATE, INITIAL_PLAYER_NAMES, INITIAL_SCORES, PlayerNames, WINNING_COMBOS } from "./vars";

const Game: FC = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scores, setScores] = useState(INITIAL_SCORES);
  const [playerNames, setPlayerNames] = useState(INITIAL_PLAYER_NAMES);
  const [modal, setModal] = useState(true);

  const [winCells, setWinCells] = useState<number[]>([]);

  useEffect(() => {
    const storedScores = localStorage.getItem("TIC_TAC_TOE_scores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  useEffect(() => {
    if (gameState === INITIAL_GAME_STATE) {
      return;
    }

    checkForWinner();
    changePlayer();
  }, [gameState]);

  const onSetPlayerName = (names: PlayerNames) => {
    setPlayerNames(names);
    setModal(false);
  };

  const resetScores = () => {
    setScores(INITIAL_SCORES);
    localStorage.setItem("TIC_TAC_TOE_scores", JSON.stringify(INITIAL_SCORES));

    setModal(true);
    setGameState(INITIAL_GAME_STATE);
  };

  const handleWin = () => {
    window.alert(`Congrats player ${playerNames[currentPlayer]}! You are the winner!`);
    const newPlayerScore = scores[currentPlayer] + 1;
    const newScores = { ...scores };
    newScores[currentPlayer] = newPlayerScore;
    setScores(newScores);

    localStorage.setItem("TIC_TAC_TOE_scores", JSON.stringify(newScores));

    reserBoard();
  };
  const handleDraw = () => {
    window.alert("The game ended in a draw");
    reserBoard();
  };

  const reserBoard = () => {
    setGameState(INITIAL_GAME_STATE);
    setWinCells([]);
  };

  const checkForWinner = () => {
    let roundWon = false;

    for (let i = 0; i < WINNING_COMBOS.length; i++) {
      const winCombo = WINNING_COMBOS[i];

      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];

      if ([a, b, c].includes("")) {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        setWinCells([winCombo[0], winCombo[1], winCombo[2]]);

        break;
      }
    }
    if (roundWon) {
      setTimeout(() => {
        handleWin();
      }, 200);
      return;
    }

    if (!gameState.includes("")) {
      setTimeout(() => {
        handleDraw();
      }, 200);
      return;
    }
  };

  const changePlayer = () => {
    setCurrentPlayer((player) => (player === "X" ? "O" : "X"));
  };

  const handleCellClick = (i: number) => {
    const cellIndex = i;
    const currentValue = gameState[cellIndex];
    if (currentValue) {
      return;
    }
    const newValues = [...gameState];
    newValues[cellIndex] = currentPlayer;
    setGameState(newValues);
  };

  return (
    <>
      <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-400 to-blue-600">
        <h1 className="text-center text-6xl mb-4 font-serif text-white">Tic Tac Toe</h1>
        <p className="text-center text-white mt-10">
          Next Player:{" "}
          <span>
            {playerNames[currentPlayer]} {`(${currentPlayer})`}
          </span>
        </p>
        <div>
          <div className="grid grid-cols-3 gap-3 mx-auto w-[30rem] mt-5">
            {gameState.map((player, i) => (
              <Square key={i} {...{ player, i }} onClick={handleCellClick} winCells={winCells} />
            ))}
          </div>
          <Score {...{ scores, resetScores, playerNames }} />
        </div>
      </div>
      {modal && <Modal setPlayerName={onSetPlayerName} />}
    </>
  );
};

export default Game;
