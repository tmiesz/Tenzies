import { useEffect, useRef, useState } from "react";
import Die, { type DieProps } from "./components/Die";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [board, setBoard] = useState(() => generateBoard());
  const buttonRef = useRef<HTMLButtonElement>(null);

  const gameWon = board.every(
    (die) => die.value === board[0].value && die.locked,
  );

  useEffect(() => {
    if (gameWon) {
      buttonRef.current?.focus();
    }
  }, [gameWon]);

  function generateBoard(): DieProps[] {
    return Array(10)
      .fill(0)
      .map(() => generateDie());
  }

  function generateDie(): DieProps {
    return {
      id: uuidv4(),
      value: Math.ceil(Math.random() * 6),
      locked: false,
      hold: holdDie,
    };
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
    //with this we change only the value
    setBoard((prev) =>
      prev.map((die) =>
        die.locked ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );
    //here we also replace id and hold
    // setBoard((prev) => prev.map((die) => (die.locked ? die : generateDie())));
  }

  function holdDie(id: string) {
    setBoard((prev) =>
      prev.map((die) =>
        die.id === id ? { ...die, locked: !die.locked } : die,
      ),
    );
  }

  return (
    <>
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You have won the game!</p>}
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center p-4">
          <h1 className="text-(--primary) text-3xl">Tenzies</h1>
          <span className="text-(--secondary)">
            Roll until all dice are the same. Click each die to freeze it at
            current value between rolls.
          </span>
        </div>
        <div className="grid grid-cols-5 w-2xl gap-2">{dice}</div>
        <div>
          <button
            ref={buttonRef}
            className="bg-(--foreground) rounded-2xl text-(--accent) text-4xl px-4 py-2 cursor-pointer"
            onClick={gameWon ? () => setBoard(generateBoard()) : rollDice}
          >
            {gameWon ? "New Game" : "Roll"}
          </button>
        </div>
      </div>
    </>
  );
}
