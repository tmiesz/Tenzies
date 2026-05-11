import { useState } from "react";
import Die, { type DieProps } from "./components/Die";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [board, setBoard] = useState(GenerateDice());

  function GenerateDice(): DieProps[] {
    return Array(10)
      .fill(0)
      .map(() => ({
        id: uuidv4(),
        value: Math.ceil(Math.random() * 6),
        locked: false,
      }));
  }

  const dice = board.map((props) => (
    <Die id={props.id} value={props.value} locked={props.locked} />
  ));

  function rollDice() {
    setBoard(GenerateDice());
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
