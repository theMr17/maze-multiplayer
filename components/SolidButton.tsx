interface SolidButtonProps {
  text: string;
}

export default function SolidButton({ text }: SolidButtonProps) {
  return (
    <button
      type="submit"
      className="w-full cursor-pointer rounded-md py-2 font-medium text-white transition-colors hover:opacity-85"
      style={{
        backgroundColor: "var(--color-brand)",
        color: "white",
      }}
    >
      {text}
    </button>
  );
}
