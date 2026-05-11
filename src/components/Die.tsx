export type DieProps = {
  id: string;
  value: number;
  locked: boolean;
};

export default function Die({ value, locked }: DieProps) {
  return (
    <button
      className={`bg-(--foreground) border text-(--accent) rounded-4xl aspect-square text-5xl flex items-center justify-center ${locked ? "border-(--accent)" : "border-(--secondary)"}`}
    >
      {value}
    </button>
  );
}
