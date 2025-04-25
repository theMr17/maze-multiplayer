interface SolidButtonProps {
  text: string;
  onClick?: () => void;
}

export default function SolidButton({ text, onClick }: SolidButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
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
