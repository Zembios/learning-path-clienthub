    # Topic: Keys & Lists

    ## Why this matters
    Keys help React identify items between renders. Use **stable unique IDs** (not array indexes) to avoid subtle bugs.

    ## Concise Theory
    - Prefer `item.id` or a composite key like `${type}:${id}`.
- Duplicate keys lead to confusing reordering bugs.

    ---

    ## Topic Task — **buildKey(item)**
    Return a string key like `${item.type}:${item.id}`.

    **Where to implement:** `./src/topics/02-keys-and-lists/solution.js`  
    **How to verify:** `npm run test:unit4`
