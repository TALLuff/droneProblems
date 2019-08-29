const { basicRoute } = require("./basicRoute");

describe("basicRoute()", () => {
  it("Starts at (0,0) and returns that given no movement", () => {
    expect(basicRoute("")).toEqual([0, 0]);
  });
  it("Starts facing north and can move forward", () => {
    expect(basicRoute("+")).toEqual([0, 1]);
  });
});
