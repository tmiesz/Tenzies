type Props = {
  id: number;
  value: string;
  locked?: boolean;
};

export default function Die({ value, locked = false }: Props) {
  return (
    <div
      className={`bg-(--foreground) border text-(--accent) aspect-square text-4xl flex items-center justify-center ${locked ? "border-(--accent)" : "border-(--secondary)"}`}
    >
      {value}
    </div>
  );
}
