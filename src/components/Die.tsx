export type DieProps = {
  id: string;
  value: number;
  locked: boolean;
  hold: (id: string) => void;
};

export default function Die({ id, value, locked, hold }: DieProps) {
  return (
    <button
      className={`bg-(--foreground) text-(--accent) rounded-4xl aspect-square text-5xl flex items-center justify-center cursor-pointer ${locked ? "border-4 border-(--primary)" : "border-(--secondary)"}`}
      onClick={() => hold(id)}
      aria-pressed={locked}
      aria-label={`Die with value ${value}, ${locked ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
}
