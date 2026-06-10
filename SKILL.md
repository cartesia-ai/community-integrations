# Integration Review Skill

This checklist serves two audiences:

- **Contributors**: Self-check before opening your PR
- **Cartesia reviewers**: QA checklist when reviewing PRs

Before using this checklist, read the [README](README.md) and [Style Guide](STYLE_GUIDE.md).

A submission must pass every item marked **[REQUIRED]** to be merged. Items marked **[RECOMMENDED]** improve quality but won't block a merge.

---

## Template conformance

- **[REQUIRED]** File is in `submissions/` directory with kebab-case name (e.g., `langchain-cartesia.mdx`)
- **[REQUIRED]** All required frontmatter fields present: `title`, `description`, `last_verified`, `contributor`, `contributor_email`
- **[REQUIRED]** Metadata frontmatter fields present: `developer`, `developer_website`, `developer_docs`
- **[REQUIRED]** `cartesia_product` is a list containing only one or more of these valid values: `tts`, `stt`, `line`
- **[REQUIRED]** `last_verified` date is within the last 30 days
- **[REQUIRED]** Equivalent required content sections are present: overview, prerequisites, installation instructions, at least one runnable quick start example, and resources (exact heading names may vary, e.g., "Getting started" instead of "Quick start")
- **[REQUIRED]** If images/screenshots are used, they are minimal and support setup clarity (avoid image-heavy walkthroughs)
- **[REQUIRED]** If images/screenshots are used, store them in `assets/images/<submission-name>/`, where `<submission-name>` must match `submissions/<submission-name>.mdx`; reference them from the page using `/assets/images/<submission-name>/<file>` (example: `submissions/truefoundry.mdx` -> `assets/images/truefoundry/`)
- **[RECOMMENDED]** Optional sections (Configuration) included only if they add value — deleted if empty
- **[RECOMMENDED]** If multiple languages are shown, Mintlify `[<Tabs>](https://mintlify.com/docs/content/components/tabs)` component is used

## Code quality

- **[REQUIRED]** At least one quick start / getting started example is complete and runnable (includes all imports)
- **[REQUIRED]** Code uses descriptive variable names (`voice_id`, `audio_chunk`, not `x`, `data`)
- **[REQUIRED]** Cartesia SDK usage is correct (valid method names, parameter names, model IDs)
- **[REQUIRED]** Setup snippets (HTML containers, config files) appear before code that references them
- **[REQUIRED]** Runtime assumptions are noted (e.g., top-level `await` requires ES modules or an async wrapper)
- **[RECOMMENDED]** Comments are used only for non-obvious lines
- **[RECOMMENDED]** Expected output shown where it aids understanding

## Content quality

- **[REQUIRED]** Overview is 1-2 sentences, states what the integration enables
- **[RECOMMENDED]** Avoid marketing adjectives ("powerful", "seamless", "cutting-edge", "easy", "simple"); prefer factual, verifiable statements
- **[REQUIRED]** Does not re-document Cartesia's API — focuses on the *integration* use case
- **[REQUIRED]** Active voice, present tense throughout
- **[REQUIRED]** No filler phrases ("in order to", "it's important to note", "as mentioned above")
- **[REQUIRED]** Key product terms (Cartesia and third-party) are linked to authoritative developer docs (not marketing homepages) on first mention
- **[RECOMMENDED]** Page fits on a single screen when rendered (aim for concise)

## Accuracy

Cross-check Cartesia-specific claims against [docs.cartesia.ai/skill.md](https://docs.cartesia.ai/skill.md).

- **[REQUIRED]** Cartesia model IDs referenced are current and valid (cross-check against [docs.cartesia.ai/llms.txt](https://docs.cartesia.ai/llms.txt) and current Cartesia docs)
- **[REQUIRED]** Cartesia SDK methods referenced exist in the current SDK version
- **[REQUIRED]** For each product listed in `cartesia_product`, include a runnable example for that product (or remove the product from frontmatter)
- **[REQUIRED]** Prerequisites list is complete — nothing missing that would prevent the example from running
- **[REQUIRED]** Prerequisites are specific — include version constraints (e.g., "Python 3.10+"), required env vars (e.g., `CARTESIA_API_KEY`), account setup with signup URLs, and any API keys needed from third-party services with links to where to get them
- **[REQUIRED]** Links in Resources section are valid and point to correct destinations
- **[REQUIRED]** External links use HTML with target="_blank"
- **[REQUIRED]** Resource links use canonical URLs (no unnecessary file suffixes like `.md`)
- **[REQUIRED]** Page includes a visible "Last verified" date and contributor attribution
- **[REQUIRED]** Frontmatter URLs (`contributor_url`, `developer_website`, `developer_docs`) are valid

## Scope

- **[REQUIRED]** Submission is one `.mdx` integration page in `submissions/` (supporting image assets are allowed when used sparingly for setup clarity)
- **[REQUIRED]** No pricing, competitive comparisons, or product pitches
- **[REQUIRED]** No claims about Cartesia's performance, roadmap, or capabilities beyond what's documented

---

## For Cartesia reviewers only

After the checklist above passes:

- Verify the integration actually works (if feasible — run the quick start)
- Check for duplicate/overlapping content with existing integration pages
- Confirm the integration is relevant to Cartesia users (not a stretch)
- Draft reply to contributor with any feedback (use PR comments)
- Once merged: migrate the page to docs repo under `integrations/community/` and copy image assets to `assets/images/<submission-name>/` (example: `submissions/truefoundry.mdx` -> `assets/images/truefoundry/`); verify all `/assets/images/...` links resolve, add nav entry to `docs.json`, deploy

