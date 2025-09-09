# Unit 3 – TypeScript Foundations (Theory + Unit Task)

Covers TS primitives, literal types, interfaces vs types, unions/intersections, utility types, generics.

## Unit Task – “Catalog Types & Utils”
Implement in `./src/task/solution.ts`:
- Types: Product, Customer, OrderItem, Order, OrderStatus union
- Utility types: OrderPreview = Pick<Order, "id" | "status">, ProductMap = Record<string, Product>
- Generics: identity<T>(x:T):T, groupBy<T,K extends string|number>(arr:T[], key:(x:T)=>K):Record<K,T[]>

Run tests: `npm run test:unit3` (runtime behavior)
Type check: `npm run typecheck`
