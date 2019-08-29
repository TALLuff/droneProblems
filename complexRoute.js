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

      position = moveDrone(position, instruction, direction);
    }
    //Check for directional movement then move the drone the total number of +'s and -'s after summing them
    else if (directions.includes(instruction[0])) {
      position = moveDrone(position, instruction, instruction[0]);
    }
  });

  //Function for movement so I dont repeat code for cardinal and rotation
  moveDrone = (position, instruction, cardinal) => {
    let newPosi = position.concat();

    //Find the distance the drone is moving (positive or negative)
    let move =
      (instruction.match(/\+/g) || []).length -
      (instruction.match(/\-/g) || []).length;
    //Move the drone the total number of +'s and -'s after summing them
    switch (cardinal) {
      case "N":
        newPosi[1] += move;
        break;
      case "E":
        newPosi[0] += move;
        break;
      case "S":
        newPosi[1] -= move;
        break;
      case "W":
        newPosi[0] -= move;
        break;
      default:
        break;
    }

    return newPosi;
  };

  return position;
};

module.exports = { complexRoute };
