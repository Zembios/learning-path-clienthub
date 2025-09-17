// App.jsx
import React from "react";
import { Dashboard } from "./Dashboard";

/**
 * Simple deterministic pseudo-random helpers so the sandbox behaves consistently.
 */
function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
function pick(rand, arr) {
  return arr[Math.floor(rand() * arr.length)];
}

/**
 * Generate a small catalog pool: { id, name, category, price, stock, rating, updatedAt }
 * - Hardcoded options keep results realistic but predictable.
 */
function makeDataPool(count = 24, seed = 42) {
  const rand = mulberry32(seed);
  const adjectives = ["Premium", "Eco", "Lite", "Micro", "Ultra", "Pro", "Max"];
  const items = ["Primer", "Varnish", "Paint", "Latex", "Sealer", "Enamel", "Topcoat"];
  const categories = ["Interior", "Exterior", "Wood", "Metal", "Walls", "Ceiling"];
  const pool = [];

  for (let i = 1; i <= count; i++) {
    const name = `${pick(rand, adjectives)} ${pick(rand, items)} ${100 + i}`;
    const category = pick(rand, categories);
    const price = +(5 + rand() * 95).toFixed(2); // 5.00 - 100.00
    const stock = Math.floor(rand() * 120); // 0 - 119
    const rating = +(3 + rand() * 2).toFixed(1); // 3.0 - 5.0
    const updatedAt = Date.now() - Math.floor(rand() * 1000 * 60 * 60 * 24 * 14); // last 14 days
    pool.push({ id: String(i), name, category, price, stock, rating, updatedAt });
  }

  return pool;
}

/**
 * makeFetcher: returns an async function that simulates a network call and
 * exposes a lightweight "live" dataset that evolves slightly across calls.
 *
 * Signature:
 *   const fetcher = makeFetcher({ latencyMs?: number });
 *   const data = await fetcher({ q?: string, sortBy?: string, dir?: "asc"|"desc" });
 *
 * This aligns with common "fetcher" expectations and should plug into your Dashboard.
 */
function makeFetcher({ latencyMs = 350, seed = 42 } = {}) {
  let pool = makeDataPool(24, seed);
  const rand = mulberry32(seed + 99);

  // tiny mutation to imitate changing backend numbers on each call
  function nudgePool() {
    const index = Math.floor(rand() * pool.length);
    const item = pool[index];
    if (!item) return;
    const change = rand() < 0.5 ? -1 : 1;
    const stockDelta = Math.floor(rand() * 3) * change; // -2..+2
    const priceDelta = +(rand() * 0.5 * change).toFixed(2); // tiny price drift
    item.stock = Math.max(0, item.stock + stockDelta);
    item.price = Math.max(1, +(item.price + priceDelta).toFixed(2));
    item.updatedAt = Date.now();
  }

  function sortByKey(arr, key, dir = "asc") {
    const sign = dir === "desc" ? -1 : 1;
    return [...arr].sort((a, b) => {
      const va = a[key];
      const vb = b[key];
      if (va < vb) return -1 * sign;
      if (va > vb) return 1 * sign;
      return 0;
    });
  }

  async function fetcher(params = {}) {
    const { q = "", sortBy = "name", dir = "asc" } = params;

    // Evolve a tiny bit before each response
    nudgePool();

    // Filter + sort
    let result = pool;
    const needle = q.trim().toLowerCase();
    if (needle) {
      result = result.filter(
        (it) =>
          it.name.toLowerCase().includes(needle) ||
          it.category.toLowerCase().includes(needle)
      );
    }
    if (sortBy) {
      result = sortByKey(result, sortBy, dir);
    }

    // Simulate network latency
    await new Promise((r) => setTimeout(r, latencyMs));

    // Return a deep-ish copy to avoid accidental outside mutations
    return result.map((x) => ({ ...x }));
  }

  return fetcher;
}

// Create one fetcher instance your Dashboard can use.
// If your Dashboard expects a different prop name, we pass both for convenience.
const fetcher = makeFetcher({ latencyMs: 300 });

/**
 * App: Minimal shell that mounts your existing Dashboard and wires the fetcher.
 * - Keep your replaced task entry at ./Dashboard.jsx (as produced in your unit).
 * - The Dashboard can read `fetcher` or `fetchItems` (both are provided).
 */
export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
      <h1 style={{ marginBottom: 12 }}>Mini Catalog Dashboard (Sandbox)</h1>
      <p style={{ marginTop: 0, color: "#555", marginBottom: 16 }}>
        Demo data is generated locally; each fetch slightly updates stock/price and timestamp.
      </p>
      <Dashboard fetcher={fetcher} intervalMs={2500} />
    </div>
  );
}
