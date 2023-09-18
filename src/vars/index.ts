type Scores = {
  [key: string]: number;
};

export const INITIAL_GAME_STATE = ["", "", "", "", "", "", "", "", ""];
export const INITIAL_SCORES: Scores = { X: 0, O: 0 };

export const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export type PlayerNames = {
  [index: string]: string;
};

export const INITIAL_PLAYER_NAMES: PlayerNames = { X: "", O: "" };
