import { useState } from "react";
import Die, { type DieProps } from "./components/Die";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [board, setBoard] = useState(generateDice());

  function generateDice(): DieProps[] {
    return Array(10)
      .fill(0)
      .map(() => ({
        id: uuidv4(),
        value: Math.ceil(Math.random() * 6),
        locked: false,
        hold: holdDie,
      }));
  }

  const dice = board.map((die) => (
    <Die
      id={die.id}
      key={die.id}
      value={die.value}
      locked={die.locked}
      hold={die.hold}
    />
  ));

  function rollDice() {
    setBoard(generateDice());
  }

  function holdDie(id: string) {
    console.log(id);
  }

  return (
    <>
      <div className="border flex flex-col gap-4 items-center">
        <div className="border flex flex-col items-center p-4">
          <h1 className="var(--accent) text-3xl">Tenzies</h1>
          <span>
            Roll until all dice are the same. Click each die to freeze it at
            current value between rolls.
          </span>
        </div>
        <div className="border grid grid-cols-5 w-2xl gap-2">{dice}</div>
        <div className="border">
          <button
            className="bg-(--foreground) rounded-2xl text-(--accent) text-4xl p-4 cursor-pointer"
            onClick={rollDice}
          >
            Roll
          </button>
        </div>
      </div>
    </>
  );
}
