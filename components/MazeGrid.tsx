import MazeCell from "./MazeCell";

interface MazeGridProps {
  row: number;
  col: number;
  maze: number[][];
}

export default function MazeGrid({ row, col, maze }: MazeGridProps) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: `repeat(${col}, 1fr)` }}
    >
      {Array.from({ length: row * col }).map((_, index) => {
        const currentRow = Math.floor(index / col);
        const currentCol = index % col;

        return (
          <MazeCell
            key={index}
            row={currentRow}
            col={currentCol}
            maxRow={row}
            maxCol={col}
            isWall={maze[currentRow][currentCol] === 1}
          />
        );
      })}
    </div>
  );
}
