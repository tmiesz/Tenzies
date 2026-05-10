import { useState, type JSX } from "react";
import Die from "./components/Die";

export default function App() {
  const [board, setBoard] = useState(GenerateNewBoard());

  function LockDie(): void {}

  function GenerateRandomNumber(): number {
    return Math.ceil(Math.random() * 6);
  }

  function GenerateNewBoard(): JSX.Element[] {
    return Array.from({ length: 12 }).map((_, i) => (
      <Die key={i} id={i} value={GenerateRandomNumber()} onClick={LockDie} />
    ));
  }

  return (
    <>
      <div className="border flex flex-col items-center">
        <h1>Tenzies</h1>
        <span>
          Roll until all dice are the same. Click each die to freeze it at
          current value between rolls.
        </span>
      </div>
      <div className="border w-3xl m-auto">
        <div className="grid grid-cols-6 gap-4 p-4">{board}</div>
      </div>
      <div className="flex flex-col items-center">
        <button className="border">Roll</button>
      </div>
    </>
  );
}
