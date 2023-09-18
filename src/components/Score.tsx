import React, { FC } from "react";
import { PlayerNames } from "../vars";

type ScoreProps = {
  resetScores(): void;
  scores: any;
  playerNames: PlayerNames;
};

const Score: FC<ScoreProps> = ({ resetScores, scores, playerNames }) => {
  return (
    <div className="absolute border-b-2 border-t-2 py-4 top-14 left-10 text-white">
      <p> {`Player ${playerNames.X ? playerNames.X : "1"} wins: ${scores.X}`}</p>
      <p>{`Player ${playerNames.O ? playerNames.O : "2"} wins: ${scores.O}`}</p>

      <button
        onClick={resetScores}
        className="mt-8 px-6 py-1 mr-4 bg-amber-600 rounded border hover:bg-amber-500 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default Score;
