type Props = {
  id: number;
  value: number;
  locked?: boolean;
  onClick: () => void;
};

export default function Die({ value, onClick, locked = false }: Props) {
  return (
    <button
      className={`bg-(--foreground) border text-(--accent) rounded-4xl aspect-square text-4xl flex items-center justify-center ${locked ? "border-(--accent)" : "border-(--secondary)"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
