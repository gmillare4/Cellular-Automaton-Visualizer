// Create a 2d grid
export const createGrid = (height, width) => {
  const grid = [];
  for (let i = 0; i < height; i++) {
    grid.push([]);
    for (let j = 0; j < width; j++) {
      grid[i].push(0);
    }
  }
  return grid;
};

export const randomGrid = (height, width) => {
  const grid = [];
  for (let i = 0; i < height; i++) {
    grid.push([]);
    for (let j = 0; j < width; j++) {
      grid[i].push(Math.floor(Math.random() * 2));
    }
  }
  return grid;
};

export const countNeighbours = (grid, i, j) => {
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;
  let sum = 0;
  for (let h = -1; h < 2; h++) {
    for (let w = -1; w < 2; w++) {
      let y = (i + h + gridHeight) % gridHeight;
      let x = (j + w + gridWidth) % gridWidth;
      sum += grid[y][x];
    }
  }
  sum -= grid[i][j];
  return sum;
};
