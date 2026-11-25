import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Monday: 400 unread emails, a deploy stuck at 99%, and a stand-up that should've been a message \u2014 then my own update crashed the call.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
