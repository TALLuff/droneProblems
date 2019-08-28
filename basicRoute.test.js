const { basicRoute } = require("./basicRoute");

describe("basicRoute()", () => {
  it("easy test", () => {
    expect(basicRoute("this")).toEqual("that");
  });
});
