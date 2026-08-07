import { readdir, readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const docsJsonPath = new URL("docs.json", root);
const submissionsPath = new URL("submissions/", root);

const pages = (await readdir(submissionsPath, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
  .map((entry) => `submissions/${entry.name.slice(0, -4)}`)
  .sort();

const current = await readFile(docsJsonPath, "utf8");
const config = JSON.parse(current);
config.navigation = { pages };

const generated = `${JSON.stringify(config, null, 2)}\n`;

if (process.argv.includes("--check")) {
  if (current !== generated) {
    console.error(
      "docs.json is out of date. Run: node scripts/update-docs-json.mjs",
    );
    process.exit(1);
  }
} else {
  await writeFile(docsJsonPath, generated);
}
