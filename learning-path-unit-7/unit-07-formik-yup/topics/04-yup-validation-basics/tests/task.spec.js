const { buildRegistrationSchema } = require("../src/solution");
test("buildRegistrationSchema rich validation", async () => {
  const schema = buildRegistrationSchema();
  const bad = { email:'no', password:'short', confirmPassword:'nope', age:17, lobbyStyle:'x', country:'A', termsAccepted:false };
  const good = { email:'a@b.com', password:'12345678', confirmPassword:'12345678', age:21, lobbyStyle:'casual', country:'BG', termsAccepted:true };
  await expect(schema.isValid(bad)).resolves.toBe(false);
  await expect(schema.isValid(good)).resolves.toBe(true);
});
