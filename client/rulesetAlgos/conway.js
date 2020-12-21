import { countNeighbours } from "../helperFuncs";
/* 
Any live cell with fewer than two live neighbours dies, as if by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

export const conway = (grid) => {
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      let neighbors = countNeighbours(grid, i, j);
      if (grid[i][j] === 1 && neighbors < 2) {
        newGrid[i].push(0);
      } else if (grid[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
        newGrid[i].push(1);
      } else if (grid[i][j] === 1 && neighbors > 3) {
        newGrid[i].push(0);
      } else if (grid[i][j] === 0 && neighbors === 3) {
        newGrid[i].push(1);
      } else {
        newGrid[i].push(0);
      }
    }
  }
  return newGrid;
};
