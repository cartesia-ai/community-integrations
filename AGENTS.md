# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

`CLAUDE.md` is a symlink to this file, and `.agents` is a symlink to `.claude/` — edit the real targets (`AGENTS.md`, files under `.claude/`), never the symlinks. `.claude/settings.json` enables the Mintlify plugin, so you can look up MDX component usage through the `mintlify` skill.

## What this repo is

This is a **content repository**, not a software project. It collects community-contributed integration pages — one MDX file per integration — that document how a third-party product works **with** Cartesia (`docs.cartesia.ai`). Approved pages are later migrated into Cartesia's docs repo and published under `docs.cartesia.ai/integrations/community/<name>`.

There is **no build system, package manager, test suite, or linter** — no `package.json`, `Makefile`, or CI. Don't go looking for commands to build or test; work here is writing, editing, and reviewing MDX prose and code samples against a checklist. The submitted code samples themselves target Python/JS Cartesia SDKs but are not executed by this repo.

## The two tasks done here

Almost all work is one of these, and both are governed by the same rule set:

1. **Creating** a submission — help a contributor draft a new integration page.
2. **Reviewing** a submission — QA a PR against the checklist (Cartesia-reviewer role).

Before doing either, read the governing files, which cross-reference each other:

- `TEMPLATE.mdx` — the exact page skeleton; submissions must follow it (frontmatter + Overview / Prerequisites / Quick start / optional Configuration / Resources).
- `STYLE_GUIDE.md` — voice rules: active voice, present tense, no marketing adjectives, no filler, complete runnable code, markdown links only (no HTML `<a>`).
- `SKILL.md` — the authoritative `[REQUIRED]` / `[RECOMMENDED]` checklist, used by both contributors (self-check) and reviewers. A submission must pass every `[REQUIRED]` item to merge. Its "For Cartesia reviewers only" section is the review-side gate.
- `README.md` — contributor-facing fork → copy → PR flow; PRs are tagged `@zeuslawyer` for review.

When reviewing, the checklist in `SKILL.md` is the source of truth — apply it item by item rather than reviewing by feel.

## Submission conventions (the contract)

- One file per integration at `submissions/<kebab-case-name>.mdx` (e.g. `tavily-cartesia-line.mdx`). `submissions/genesys-tts-connector-cartesia-sonic.mdx` is the fullest worked example — model new setup-walkthrough/image-heavy pages on it.
- Required frontmatter: `title`, `description`, `last_verified`, `contributor`, `contributor_email`, plus metadata `developer`, `developer_website`, `developer_docs`.
- `cartesia_product` is a list whose only valid values are `tts`, `stt`, `line`. Each listed product needs its own runnable example, or it should be dropped from the list.
- `last_verified` must be within the last 30 days at submission time (this also drives the maintenance/re-verification clock described in `README.md`).
- Images (used sparingly, for setup clarity only) live at `submissions/assets/images/<submission-name>/` where `<submission-name>` matches the `.mdx` filename, and are referenced by the submission-relative path `assets/images/<submission-name>/<file>` (no leading slash). Everything a contributor adds therefore stays inside `submissions/`; the docs-site paths are produced later by the merge step. Each image is wrapped in a `<Frame>` containing an `<img>`.
- MDX uses Mintlify components (`<Steps>`, `<Step>`, `<Tabs>`, `<Frame>`).

## Hard constraint: scope of changes

A submission PR must **only add or modify files inside `submissions/` — its own page (`submissions/<name>.mdx`) and its own image assets (`submissions/assets/images/<name>/`)**. Do not touch repo infrastructure (`README.md`, `TEMPLATE.mdx`, `STYLE_GUIDE.md`, `SKILL.md`, `LICENSE`, `AGENTS.md`/`CLAUDE.md`, `.claude/`) or any other contributor's files. This is enforced deliberately to prevent a submission from deleting or altering other files — keep it front of mind when drafting or applying changes on behalf of a contributor.

## Accuracy cross-checks

When writing or reviewing Cartesia-specific claims (model IDs, SDK method/parameter names), verify against the live sources rather than memory:

- `https://docs.cartesia.ai/skill.md`
- `https://docs.cartesia.ai/llms.txt`

## Internal merge flow (reviewer-only)

After a PR passes review and is merged, the page is migrated into Cartesia's docs repo using the gitignored skill at `internal/skills/merge/SKILL.md` (the `internal/` directory is excluded via `.gitignore` and not available to contributors). The merge copies the page to `integrations/community/<name>.mdx`, copies the asset directory `submissions/assets/images/<name>/` into the docs site's `assets/images/integrations/<name>/`, and rewrites the page's submission-relative image refs (`assets/images/<name>/<file>`) to the docs-site form (`/assets/images/integrations/<name>/<file>`). It also adds a `docs.json` nav entry. Submissions deliberately keep their assets self-contained under `submissions/`, so this path rewrite is part of the merge.

## Reference

Use [genesys-tts-connector-cartesia-sonic.mdx](submissions/genesys-tts-connector-cartesia-sonic.mdx) as an example that follows many best practices.
