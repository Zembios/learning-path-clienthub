# Unit 4 – React Basics (Theory + Unit Task)

Covers JSX, props/children, useState, controlled vs uncontrolled pitfalls, keys, lifecycle mental model.

## Unit Task – “People List with Search”
Implement `PeopleList` in `./src/task/PeopleList.jsx`:
- Controlled input (init `""`), filter people by name (case-insensitive)
- Use stable unique keys (use person.id)
- Accept `renderFooter` (children pattern) and render it
- Log on mount/unmount via useEffect

Run: `npm run test:unit4`
