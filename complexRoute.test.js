const { complexRoute } = require("./complexRoute");

describe("complexRoute()", () => {
  it("easy test", () => {
    expect(complexRoute("this")).toEqual("that");
  });
});
