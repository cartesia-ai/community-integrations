# Integration Review Skill

This checklist serves two audiences:

- **Contributors**: Self-check before opening your PR
- **Cartesia reviewers**: QA checklist when reviewing PRs

A submission must pass every item marked **[REQUIRED]** to be merged. Items marked **[RECOMMENDED]** improve quality but won't block a merge.

---

## Template conformance

- [ ] **[REQUIRED]** File is in `submissions/` directory with kebab-case name (e.g., `langchain-cartesia.mdx`)
- [ ] **[REQUIRED]** All required frontmatter fields present: `title`, `description`, `last_verified`, `contributor`, `contributor_email`
- [ ] **[REQUIRED]** `last_verified` date is within the last 30 days
- [ ] **[REQUIRED]** All template sections present (Overview, Prerequisites, Installation, Quick start, Resources)
- [ ] **[RECOMMENDED]** Optional sections (Configuration, Troubleshooting) included only if they add value — deleted if empty

## Code quality

- [ ] **[REQUIRED]** Quick start example is complete and runnable (includes all imports)
- [ ] **[REQUIRED]** Code uses realistic variable names (`voice_id`, `audio_chunk`, not `x`, `data`)
- [ ] **[REQUIRED]** Cartesia SDK usage is correct (valid method names, parameter names, model IDs)
- [ ] **[RECOMMENDED]** Comments are used only for non-obvious lines
- [ ] **[RECOMMENDED]** Expected output shown where it aids understanding

## Content quality

- [ ] **[REQUIRED]** Overview is 1-2 sentences, states what the integration enables
- [ ] **[REQUIRED]** No marketing language ("powerful", "seamless", "cutting-edge", "easy", "simple")
- [ ] **[REQUIRED]** Does not re-document Cartesia's API — focuses on the *integration* use case
- [ ] **[REQUIRED]** Active voice, present tense throughout
- [ ] **[REQUIRED]** No filler phrases ("in order to", "it's important to note", "as mentioned above")
- [ ] **[RECOMMENDED]** Page fits on a single screen when rendered (aim for concise)

## Accuracy

- [ ] **[REQUIRED]** Cartesia model IDs referenced are current and valid
- [ ] **[REQUIRED]** Cartesia SDK methods referenced exist in the current SDK version
- [ ] **[REQUIRED]** Prerequisites list is complete — nothing missing that would prevent the example from running
- [ ] **[REQUIRED]** Links in Resources section are valid and point to correct destinations

## Scope

- [ ] **[REQUIRED]** Submission is a single `.mdx` file (no additional assets, images, or folders)
- [ ] **[REQUIRED]** No pricing, competitive comparisons, or product pitches
- [ ] **[REQUIRED]** No claims about Cartesia's performance, roadmap, or capabilities beyond what's documented

---

## For Cartesia reviewers only

After the checklist above passes:

- [ ] Verify the integration actually works (if feasible — run the quick start)
- [ ] Check for duplicate/overlapping content with existing integration pages
- [ ] Confirm the integration is relevant to Cartesia users (not a stretch)
- [ ] Draft reply to contributor with any feedback (use PR comments)
- [ ] Once merged: copy MDX to private docs repo under `integrations/community/`, add nav entry to `docs.json`, deploy
