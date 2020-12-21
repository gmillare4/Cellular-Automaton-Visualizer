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

// Create a randomly filled 2d grid
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

// Create a 3d grid with a random first generation
export const random3dGrid = (height, width) => {
  const grid = [];
  // let id = 1;
  for (let i = 0; i < height; i++) {
    grid.push([]);
    for (let j = 0; j < width; j++) {
      grid[i].push([]);
      for (let k = 0; k < height; k++) {
        if (i === 0) {
          let randomNum = Math.floor(Math.random() * 4);
          if (randomNum === 0) {
            grid[i][j].push(1);
          } else {
            grid[i][j].push(0);
          }
        } else {
          grid[i][j].push(0);
        }
      }
    }
  }
  return grid;
};

// Init Empty 3d grid
export const create3dGrid = (height, width) => {
  const grid = [];
  // let id = 1;
  for (let i = 0; i < height; i++) {
    grid.push([]);
    for (let j = 0; j < width; j++) {
      grid[i].push([]);
      for (let k = 0; k < height; k++) {
        grid[i][j].push(0);
      }
    }
  }
  return grid;
};

// Count neighbors of a specific cell
// Also makes the grid act like a toroidal array
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
