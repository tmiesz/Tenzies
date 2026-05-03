type Props = {
  id: number;
  value: string;
  locked?: boolean;
};

export default function Die({ value, locked = false }: Props) {
  return (
    <div
      className={`bg-(--foreground) border text-(--accent) ${locked ? "border-(--accent)" : "border-(--secondary)"}`}
    >
      {value}
    </div>
  );
}
