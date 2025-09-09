const { makeInitialValues } = require("../src/solution");
test("makeInitialValues returns sane defaults", () => {
  expect(makeInitialValues()).toEqual({
    email: "",
    password: "",
    age: 18,
    lobbyStyle: "casual",
    termsAccepted: false,
  });
});
