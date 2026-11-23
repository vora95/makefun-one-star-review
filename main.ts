// u-0xb3e689-one-star-review-of-something-essential-c7234629
// "One-Star Review of Something Essential"
//
// The program writes one single-line one-star review to /output/entry.txt:
// a deadpan complaint against Monday, an everyday essential everyone relies
// on and nobody can fix. The grievance is stacked three deep — Monday
// arrives on time every week, takes a full day, and offers no refund for
// the hours it wastes — and the turn lands on the last few words: the
// reviewer never ordered it, and it will be back next week anyway. The
// complaint itself is futile, which is exactly the point of a one-star
// review of something unfixable.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Monday arrives on time every week, takes a full day, and offers no refund for the hours it wastes. I did not order this, and it will be back next week.";

// The brief allows 1 to 160 Unicode code points: refuse anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 160) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–160`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, TEXT, "utf8");
