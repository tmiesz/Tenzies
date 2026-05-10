import { useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [board, setBoard] = useState(GenerateDiceValues());

  function GenerateDiceValues(): number[] {
    return Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6));
  }

  const dice = board.map((die, i) => <Die id={i} value={die} />);

  function rollDice() {
    setBoard(GenerateDiceValues());
  }

  return (
    <>
      <div className="border flex flex-col gap-4 items-center">
        <div className="border">
          <h1 className="var(--accent)">Tenzies</h1>
          <span>
            Roll until all dice are the same. Click each die to freeze it at
            current value between rolls.
          </span>
        </div>
        <div className="border grid grid-cols-5 grid-rows-2 w-2xl">{dice}</div>
        <div className="border">
          <button
            className="bg-(--foreground) rounded-2xl text-(--accent) text-4xl p-4"
            onClick={rollDice}
          >
            Roll
          </button>
        </div>
      </div>
    </>
  );
}
