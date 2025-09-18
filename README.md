# Learning Path – Full Repo
Welcome! This is the full multi-unit learning path with concise theory, single-function topic tasks, unit-level tasks, and tests.

## Quick Start
```bash
npm i
# Run a specific unit
npm run test:unit1
# Or run everything
npm test
# (TypeScript checks for Unit 3 as well)
npm run typecheck
```

## Structure
```
learning-path/
  package.json, jest.config.js, babel.config.js, tsconfig.json
  jest.setup.js

  units/
    unit-01-js-foundations/
      README.md
      theory+task.md
      src/task/solution.js
      tests/task.spec.js
      topics/.. (topic-specific tasks)
    unit-02-async-modules/
    unit-03-typescript-foundations/
    unit-04-react-basics/
    unit-05-react-advanced/
    unit-06-aggrid-essentials/
    unit-07-formik-yup/
    unit-08-mui-essentials/
```

## Convenient theory display
All theory is written in markdown and there are plenty of markdown visualizers/previewers available. In fact, VS Code has a built-in md previewer (`Ctrl+K V` to preview when viewing a md file).

## React Tasks
You can use this React sandbox for your convenience:
https://codesandbox.io/s/react-new

You will probably have to import different native hooks from React manually in the sandbox. For example:
```jsx
import { useState } from 'react';
```

### Notes on Warnings
You might see npm WARN deprecations from transitive tooling. Safe to ignore for this training repo.
