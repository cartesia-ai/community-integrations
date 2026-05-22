# Community Integrations

Third-party integration pages for [Cartesia documentation](https://docs.cartesia.ai). If you've built something something that integrates your product with Cartesia,  and want it listed on our docs site, this is where you submit it.

## How it works

1. Fork this repo
2. Copy `TEMPLATE.mdx` into `submissions/your-integration-name.mdx`
3. Write your page following the template and [Style Guide](STYLE_GUIDE.md)
4. Self-review against the checklist in [SKILL.md](SKILL.md)
5. Open a pull request, and then let us know which one is yours.

A Cartesia team member will review your PR using the same SKILL.md checklist. We may have  
 feedback — we hold a high quality bar. Once approved and merged, we'll publish the page to `docs.cartesia.ai/integrations/community/your-integration-name`.

## What belongs here

A community integration page shows developers how to use Cartesia **with** your tool or platform. It should include a working code example that a developer can copy-paste and run.

You're welcome to link to your product and docs — just don't turn the page into a sales pitch.

This is **not** the place to re-document Cartesia's API, pitch your product, or write a tutorial that happens to mention Cartesia.

## Requirements

- One MDX file per integration, following `TEMPLATE.mdx` exactly
- Tag which Cartesia product(s) your integration supports via `cartesia_product` in frontmatter (valid values: `tts`, `stt`, `line`)
- All code examples must be complete and runnable (include imports)
- No marketing language — let the code speak
- No images or screenshots — if your integration needs a visual walkthrough, link to your own docs for that
- Multiple languages are welcome using Mintlify `[<Tabs>](https://mintlify.com/docs/content/components/tabs)` but not required
- Read the [Style Guide](STYLE_GUIDE.md) before writing

## Maintenance policy

You own your page. Here's what that means:

- Each page has a `last_verified` date in its frontmatter
- **At 6 months** without re-verification: we email you asking to confirm the page is still accurate
- **At 6 months + 2 weeks**, no response: a "community-maintained — last verified [date]" banner appears on the page
- **At 12 months** without re-verification: we email again — the page will be unpublished in 2 weeks if not re-verified
- **At 12 months + 2 weeks**, no response: the page is unpublished

To re-verify, open a PR updating the `last_verified` date (and fix anything that's changed). This resets the clock. Use [SKILL.md](SKILL.md) as your self-review checklist before submitting.

## Questions?

Open an issue on this repo.