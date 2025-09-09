// Define types & functions. Keep names/exports.

export type Product = any;          // TODO
export type Customer = any;         // TODO
export type OrderItem = any;        // TODO
export type OrderStatus = any;      // TODO
export type Order = any;            // TODO

export type OrderPreview = any;     // TODO (Pick<Order, "id" | "status">)
export type ProductMap = any;       // TODO (Record<string, Product>)

export function identity(x: any): any {
  throw new Error("identity not implemented");
}

export function groupBy(arr: any[], key: (x: any) => any): any {
  throw new Error("groupBy not implemented");
}
