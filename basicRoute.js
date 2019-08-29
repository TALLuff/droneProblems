const basicRoute = str => {
  //Set starting positions as stated
  let position = [0, 0];
  let direction = "N";

  let directions = ["N", "E", "S", "W"];

  let instructions = str.split("");

  //Loop through instructions in order
  instructions.forEach(instruction => {
    //Check for movement then use a switch to decide what value to increment depending on rotation
    if (instruction === "+" || instruction === "-") {
      let move = instruction === "+" ? 1 : -1;
      switch (direction) {
        case "N":
          position[1] += move;
          break;
        case "E":
          position[0] += move;
          break;
        case "S":
          position[1] -= move;
          break;
        case "W":
          position[0] -= move;
          break;
        default:
          break;
      }
    }
    //Check for rotation, move through the array of directions then reassign direction
    else if (instruction === "L" || instruction === "R") {
      let rotate = instruction === "L" ? -1 : 1;
      let dirIndex = directions.indexOf(direction) + rotate;
      if (dirIndex === -1) dirIndex = 3;
      if (dirIndex === 4) dirIndex = 0;
      direction = directions[dirIndex];
    }
  });

  return position;
};

module.exports = { basicRoute };
