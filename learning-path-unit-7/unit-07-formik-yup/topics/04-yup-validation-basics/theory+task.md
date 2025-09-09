# Topic: Yup Validation Basics (Detailed) — `buildRegistrationSchema()`

## Concise Theory
Model a realistic account form with nested objects and conditional rules.
```js
const schema = Yup.object({
  account: Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Minimum 8 chars").required("Password is required"),
  }).required(),

  profile: Yup.object({
    firstName: Yup.string().trim().required("First name is required"),
    lastName: Yup.string().trim().required("Last name is required"),
    age: Yup.number().min(18, "18+ only").required("Age is required"),
    country: Yup.string().required("Country is required"),
  }).required(),

  preferences: Yup.object({
    lobbyStyle: Yup.string().oneOf(["classic", "modern", "compact"]).required("Select a style"),
    newsletter: Yup.boolean().default(false),
    theme: Yup.mixed<"light" | "dark">().oneOf(["light","dark"]).required(),
  }).required(),

  // Example conditional: require 'compactReason' when style is 'compact'
  compactReason: Yup.string().when("preferences.lobbyStyle", {
    is: "compact",
    then: (s) => s.min(5, "Tell us why").required("Reason required for compact"),
    otherwise: (s) => s.strip(), // remove field if not applicable
  }),
});
```
---

## Topic Task — **buildRegistrationSchema()**
Return a Yup object schema covering the above rules.

**Where to implement:** `./src/solution.js`  
**How to verify:** `npm run test:unit7`
