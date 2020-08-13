// Create a 2d grid
export const createGrid = (height, length) => {
  const grid = [];
  for (let i = 0; i < height; i++) {
    grid.push([]);
    for (let j = 0; j < length; j++) {
      grid[i].push(0);
    }
  }
  return grid;
};
