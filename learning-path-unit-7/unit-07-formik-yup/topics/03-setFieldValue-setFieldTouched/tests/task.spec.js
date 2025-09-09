const { handleLobbyStyleChange } = require("../src/solution");
test("handleLobbyStyleChange calls both setters", async () => {
  const formik = { setFieldValue: jest.fn(), setFieldTouched: jest.fn() };
  handleLobbyStyleChange(formik, "casual");
  expect(formik.setFieldValue).toHaveBeenCalledWith("lobbyStyle", "casual", true);
  expect(formik.setFieldTouched).toHaveBeenCalledWith("lobbyStyle", true, false);
});
