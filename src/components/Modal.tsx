import React, { FC, ReactNode, useState } from "react";
import { PlayerNames } from "../vars";

type ModalProps = {
  setPlayerName(names: PlayerNames): void;
};

const Modal: FC<ModalProps> = ({ setPlayerName }) => {
  const [value, setValue] = useState<PlayerNames>({ X: "", O: "" });

  const changePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sumbitHadler = () => {
    if (!value.X && !value.O) {
      setPlayerName({ X: "1", O: "2" });
      return;
    }
    if (!value.X) {
      setPlayerName({ ...value, X: "1" });
      return;
    }
    if (!value.O) {
      setPlayerName({ ...value, O: "2" });
      return;
    } else {
      setPlayerName(value);
      return;
    }
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center animate-show">
      <div className="bg-slate-200 border p-8  rounded">
        <form className="flex justify-center items-center flex-col " onSubmit={sumbitHadler}>
          <p>Enter the player's names</p>
          <div className="grid grid-cols-2 gap-5 mt-8">
            <input
              name="X"
              onChange={changePlayerName}
              placeholder="Player 1"
              value={value.X}
              className="border px-2 py-1 rounded"
              id="player-1"
              type="text"
              maxLength={15}
            />
            <input
              name="O"
              onChange={changePlayerName}
              placeholder="Player 2"
              value={value.O}
              className="border px-2 py-1 rounded"
              id="player-2"
              type="text"
              maxLength={15}
            />
          </div>
          <button className="mt-5 px-6 py-1 bg-teal-400 rounded border hover:bg-teal-300 transition-all">
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
