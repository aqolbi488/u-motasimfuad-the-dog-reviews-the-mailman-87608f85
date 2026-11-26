import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Five stars when he pays the biscuit toll at my gate, one star when he sneaks past empty-handed like my barking is free.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
