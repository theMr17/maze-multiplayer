interface MazeCellProps {
  row: number;
  col: number;
  maxRow: number;
  maxCol: number;
  isWall: boolean;
}

export default function MazeCell({
  row,
  col,
  maxRow,
  maxCol,
  isWall,
}: MazeCellProps) {
  const cellSize = "h-6 w-6";
  const borderColor = "border-gray-500";

  const isLastRow = row === maxRow - 1;
  const isLastCol = col === maxCol - 1;

  // Render only top & left borders by default, and add right/bottom if it's the edge
  const cellBorder = [
    "border-t-2",
    "border-l-2",
    isLastRow && "border-b-2",
    isLastCol && "border-r-2",
    borderColor,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`${cellSize} ${cellBorder} ${isWall ? "bg-black" : "bg-transparent"}`}
    ></div>
  );
}
