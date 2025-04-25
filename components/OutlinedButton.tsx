interface OutlinedButtonProps {
  text: string;
}

export default function OutlinedButton({ text }: OutlinedButtonProps) {
  return (
    <button
      className="w-full cursor-pointer rounded-md border py-2 font-medium transition-colors hover:opacity-85"
      style={{
        borderColor: "var(--color-brand)",
        backgroundColor: "var(--color-tertiary-bg)",
        color: "var(--color-text)",
      }}
    >
      {text}
    </button>
  );
}
