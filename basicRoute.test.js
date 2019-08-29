const { basicRoute } = require("./basicRoute");

describe("basicRoute()", () => {
  it("Starts at (0,0) and returns that given no movement", () => {
    expect(basicRoute("")).toEqual([0, 0]);
  });
  //These tests with no direction never arise but show my working, I changed the way the function works for the complex route
  it("Starts facing north and can move forward", () => {
    expect(basicRoute("+")).toEqual([0, 1]);
    expect(basicRoute("+++")).toEqual([0, 3]);
  });
  it("Can move backwards", () => {
    expect(basicRoute("-")).toEqual([0, -1]);
    expect(basicRoute("---")).toEqual([0, -3]);
  });
  it("Can rotate with left and right commands", () => {
    expect(basicRoute("R+")).toEqual([1, 0]);
    expect(basicRoute("L+")).toEqual([-1, 0]);
  });
  it("Still works for longer tests", () => {
    expect(basicRoute("R++ L+++")).toEqual([2, 3]);
    expect(basicRoute("L++ R-- L+")).toEqual([-3, -2]);
    expect(basicRoute("R+ L-- R+ R-- L++")).toEqual([4, 0]);
    expect(basicRoute("L-++ L+ R+ R- L-++ R-- R-+- L+")).toEqual([-4, -3]);
  });
  it("Completes the big official test", () => {
    let orders =
      "L+ L++-- L++- R+ L+ R++-++--- R+ L+ R--- L- L- R- R+++ R++- R-- L++ L+ R- R+ R+ L+ R- R- L+ R- R- R+ L- L++++ L+ L-+ L- L-++ L+--+--- R++- L+ L+ R++ R- R- R+ R- L+ R-- R+ R- L++++ L+ L+ R-++-+ L- R- R- R+ L+ R+ L- R+++ R++ L- L- L- L- L- R+ R- L- R+ L++--+ R+ L- L-+ R+ R+ R+--+---++ L+ L+++--+- L+ R+-- L- R+ L-+--++- R- L- L+ L+ R++-++ L+ L+ L-+-+ L++ R-- R--+- R+--+ R+- R+-+ R-+ R- L++ L- L+ R- R+ R-- L---+- R+ L+ L+-+ L+ R+ L--+ L+- L-++-+ R- L-- L-++ L+ R- R- R+ L- L- L--+ R--+ L- L-+-+-+-+- R- R- L- R-++--+- R+ R++-+- L- R- R+ R--+-+ L-- R+ R++-+ R--+++-- R---+- L+ R+- R+-+- R- R-- L+ L+ R-- L+++ L+ L+ L+-+ L- L- L-+- L+ R- R- L+- R- R+ R- R+ R+-- R+ R++- L- L+ L+ L-+++ R++ R+ L-- L- R- R+-++ L+ L-+- L+ R-+ R+++++ R-+- R++ R- R- L+ L+ R--++----- L-+-+- L+ L++ L- L+ L- R- R+ R- L+--+--++ L+ L+ L+ L+ R+- R- R- L--- R+ L++ L+ L+-+ R-++-++ R+++++++ R+ L+ L+ R- R+ L+ R---+-+ L- R+ L+- R- R+- L++-+ R- R+ L- R+++ R- L+ L+ R-- L-----+++++ R+ R-- R- L-+++-- R+-+- L+ R-+- L- R+ L-++-++-++ R+++-----+- L-+ R- L+-- L+ L- L++ R+ R--+ R-++- R-- R-+ L- L+ L++- L-+---+-+--+ L+ L- L- R+ L+++ R+ L- R+ R-++-- R+ L-- L+ R- L--+ L++ R-+--++ L- L+ R+ R+ R- L+++ L- R---- L+ L+ R- L+ R+ L-++-- R-- L---- R+ L+++-+ L+ L+ R- L- L+ L+--- R+-+++ L+ L---+ R+ L- R+-++ L++- R+ L+---++ L-+ R+ L+-- R+ R+-+ R- R-++++ L+- R--+ R++ R- L-+ R++ L-++ L+-+- L+++ L- L+ L- R---- L+---+ L- L-+ R+ R-- L-++ R+ R-++-+ L- R- R+ L++- L-- L-+- R- R+ R- L- R-++++ R-+ L- R---+ R+ L- L-+-+---++-+ R- L- L+ R+ R+++- R-++ R---+-+--++ L++++-+- R+ L-- L+--- R+--++ R+ R--+- R+ L-- L++---- L- L+ L- L+ L--++-+ L+ R+ L+-- R-- R+ L-+++ L-- L+ L--+++ R+ R++ L+ R- R+ R+ R- L+ R- R- L+ L+ R+--- R-+-++ L+-+- L- R+ R- R+ R+-++---+ R+ L-+ R+ R- R- L+ L-+- R-+ R+--+ L--+-+- L-+-+ L+ R+ L- L+ L-- R+ R-+ L+ R++-+- L++++ L- R- R- R---- L-- L+ L+ L- R+ R- L- R-+-- R--+- L-- R-++ L- R+++ R- R- L--+++ R-+-- R+- L++++- R--- L+ L- L+ L+++- L+-+--++- L+ L+ L+ L-+- L-+- R+ R- R+- L+ R++ L-+ L-+ R--- R- R- R++++- R- L- L- R-------+ R- R+ L+ R- R-- R++ L+-- L+ L-- L--++-+ R+ R- L+-+-- L- R+ L+--+ R- L--+ L+ R+- L--+++ R+ L-- L+ R-+ L+-- R- R+-+++ L+ R+-- L+ R- R- R+ R- L----- R- R- L-+ L+ L+ L- R-+- L+- R-+ R- R+ R-- L- R--- L- R+- L+++ R+ L+ R- R- R+ R- R- L++-+++ L---+ L- R+---+ R+ R-+ L--- R++++++--++ R+ R-- R-+ R+--+-+- L+ R++- L++++- L- R- L+ R---+ R-+-+- R-- R+ R- R-+---+--+ L+--++-+-+ R++++++ L-+ L+ L- R-+ L---+ L- R--- R+ R+- L-+-+++ L- R--+ R++- L- R+ R++ L- L+ R+-- L++-+-+ R+- R-+++ L+- R+ R+-- L+---- R+ L---+- R--+++--+-- L+ R-++--+- R+- R++ L++-- L+ R--+ R+++ R++++ R- R-- L+- R-+- L+--+ R+ R+-+--+ R+ L+ L- L+- L- L- R-+ R-+- L--+- L-+- L- R- R+ L-+ R- L+-+ R-+-+ R+-+- L+ L++ R--- L+ L+--- R- L- L+-++ R- R+ L- L- L--+--- R- R+ R+-+++----+- R++- R- L---- R- L- R--- L- R+ R+ R+- L++ R-- L+ R+++- L+ L+ L+ L-- R---- L++ R-- L-- R+ R+ L+ L++- L- L++-- R++- R-- L+ R- L+- R++ R- R- R+ L- L+++- L- R--+- R-- L+- L++- R- L+ R- R+ L+ L++----+ R+ L- R- L--++++-+-- L- L-++ R+++++-- R-- L- L+ R------ L+ L+- R+ R-+-++ R- R+ R--+ R+ L+++ L+ L+- R++- L- L- R+ L- L-+ R+++- R- L++--+ R--+ L+- R-- L+ R+-- R++- L+ L+ R-+ R+---- L-+--- L-+ L+ R- L+- L-- L-+- L- L+- R+ R--+ R+ R- L++- L+ R--+ R- L-++++ R- L- R- L-- L+ R- L-----+ L- R- R+ R+ L+ R+-+- R+-+++ R-++ L+ L- R+ L+ L---+ L- R+- R+ R- R--+ R- R- L- R++----+ R+- R+-+ R+ R-- L- R--+ R+++ R+ L- R+ R- L- R+ L+ L- L- R+ R++- L- R- R- L+ L+ L- L+ R+ L+ R++++-+-++-- L- L- L+ R- L+- L+ R- R+-- L--++- L- L+ L+ R+-+-++ R- L- R+ R+ L+ L- R-+ R- L- R- L-++- R- R- R- L++ L++- L- L++-- R++ L- R+ R- R+ R+ R- R- R-+-- R-+- L++-+ L--++- R- R+ L++ L--++-++- L-+++ L- L-+++ L-- R- L+- L-- R-+- L- L+ R--+++ L- R+- L++-++-+---+-+ R+-+ L+-- R++ R- L--- L-+ R-- R++ R- R---+- R- L- L+++-++--+-- L+---- R------+-+- R++ L+- R- L--- L+ R+ R-- L- R- R+ L--+ R-++-+ R++ L+ L+ R------+ R- L+ R- R- R+ R- L++ R+ R+- L++ R++ L+++ R- L+ R+ R---++-++-- R- R- R+ R- L-- L-+ R+ L- L+-- L+ R- L+ L- L- R--+- R-- L- L- L+ R- R+ R-+-+-+ R-- R- R- R-+ R++ R+ R- L- R- L--- L-+--- R--+---- R+- L-+--++++-+-+ R+ R- L- R- R++- L-+--+ R+ R++++-- R- L+ R+ R--++-+-+-++ R+ L- R-- L++---+- R+ L+ L++ L-+- R+ R- L+ L-++++-+- R++ L+++++-++--+ L--- R+ L+ R- R- R- L-++ R++- R- L-+-- L--++ L+--- R+-+-+ L+ L+----+- R+ L+ R+ L---++ R-- R+--++++ R-+-- L++++ L++-- R+ R--- L+ R- R+++----++--- L+ R- L+ R+++ R- R-+ R- L+ L+---++- R+ R+- L+ L+ L- R+ R- L-+- L-";
    expect(basicRoute(orders)).toEqual([-24, 26]);
  });
});
