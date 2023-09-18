import React, { FC } from "react";

type SquareProps = {
  player: string;
  i: number;
  onClick(i: number): void;
  winCells: number[];
};

const Square: FC<SquareProps> = ({ player, onClick, i, winCells }) => {
  const scale = player ? "scale-105" : "scale-0";
  const border = winCells.includes(i) ? "border-green-400  shadow-green-400 shadow-lg" : "auto";
  const textColor = player === "X" ? "text-yellow-300" : "text-red-400";
  const transitionStyle = "transition-transform duration-300  ";

  return (
    <div
      onClick={() => onClick(i)}
      className={`${textColor} ${transitionStyle} ${border} hover:scale-105  rounded h-44 border-4  text-7xl text-center flex justify-center items-center cursor-pointer`}
    >
      <span className={`${scale} ${transitionStyle} `}> {player}</span>
    </div>
  );
};

export default Square;
