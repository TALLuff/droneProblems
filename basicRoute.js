const basicRoute = str => {
  let position = [0, 0];
  let direction = "n";

  let instructions = str.split("");

  instructions.forEach(instruction => {
    if (instruction === "+") {
      switch (direction) {
        case "n":
          position[1]++;
          break;
        case "e":
          position[0]++;
          break;
        case "s":
          position[1]--;
          break;
        case "w":
          position[0]--;
          break;
        default:
          break;
      }
    }
  });

  return position;
};

module.exports = { basicRoute };
