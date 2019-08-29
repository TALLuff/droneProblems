const { basicRoute } = require("./basicRoute");

describe("basicRoute()", () => {
  it("Starts at (0,0) and returns that given no movement", () => {
    expect(basicRoute("")).toEqual([0, 0]);
  });
  it("Starts facing north and can move forward", () => {
    expect(basicRoute("+")).toEqual([0, 1]);
    expect(basicRoute("+++")).toEqual([0, 3]);
  });
  it("Can rotate with left and right commands", () => {
    expect(basicRoute("R+")).toEqual([1, 0]);
    expect(basicRoute("L+")).toEqual([-1, 0]);
  });
});
