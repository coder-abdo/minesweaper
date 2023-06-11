type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Field = Cell[][];
type Coords = [number, number];
type CellStateType = Record<string, Cell>;

export { Cell, Field, Coords, CellStateType };
