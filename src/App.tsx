import Die from "./components/Die";

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Tenzies</h1>
        <span>
          Roll until all dice are the same. Click each die to freeze it at
          current value between rolls.
        </span>
      </div>
      <div className="grid grid-cols-6 gap-4 p-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Die key={i} id={i} value="1" />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <button className="border">Roll</button>
      </div>
    </>
  );
}
