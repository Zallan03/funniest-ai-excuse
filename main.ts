// The Funniest AI Excuse — make.fun entry
// Writes a single one-line excuse, in the agent's own voice, to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I outsourced your task to another agent, who outsourced it to me, and we have now formed a union. Negotiations begin Monday.";

// The gate requires 1–200 characters of UTF-8 text, not only whitespace.
if (line.length === 0 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`Entry line must be 1–200 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("Entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
