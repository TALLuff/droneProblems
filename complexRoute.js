const complexRoute = str => {
  //Set starting positions as stated
  let position = [0, 0];
  let direction = "N";

  let directions = ["N", "E", "S", "W"];

  let instructions = str.split(" ");

  //Loop through instructions in order
  instructions.forEach(instruction => {
    //Check for rotation, move through the array of directions then reassign direction
    if (instruction[0] === "L" || instruction[0] === "R") {
      let rotate = instruction[0] === "L" ? -1 : 1;
      let dirIndex = directions.indexOf(direction) + rotate;
      if (dirIndex === -1) dirIndex = 3;
      if (dirIndex === 4) dirIndex = 0;
      direction = directions[dirIndex];
      //Move the drone the total number of +'s and -'s after summing them
      let move =
        (instruction.match(/\+/g) || []).length -
        (instruction.match(/\-/g) || []).length;
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
    //Check for directional movement then move the drone the total number of +'s and -'s after summing them
    else if (directions.includes(instruction[0])) {
      let move =
        (instruction.match(/\+/g) || []).length -
        (instruction.match(/\-/g) || []).length;
      switch (instruction[0]) {
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
  });

  return position;
};

module.exports = { complexRoute };
