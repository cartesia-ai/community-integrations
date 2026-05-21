# Community Integrations

Third-party integration pages for [Cartesia documentation](https://docs.cartesia.ai). If you've built something with Cartesia and want it listed on our docs site, this is where you submit it.

## How it works

1. Fork this repo
2. Copy `TEMPLATE.mdx` into `submissions/your-integration-name.mdx`
3. Write your page following the template and [Style Guide](STYLE_GUIDE.md)
4. Self-review against the checklist in [SKILL.md](SKILL.md)
5. Open a pull request

A Cartesia team member will review your PR using the same SKILL.md checklist. Expect feedback — we hold a high quality bar. Once approved and merged, we'll publish the page to `docs.cartesia.ai/integrations/community/your-integration-name`.

## What belongs here

A community integration page shows developers how to use Cartesia **with** your tool or platform. It should include a working code example that a developer can copy-paste and run.

This is **not** the place to re-document Cartesia's API, pitch your product, or write a tutorial that happens to mention Cartesia.

## Requirements

- One MDX file per integration, following `TEMPLATE.mdx` exactly
- All code examples must be complete and runnable (include imports)
- No marketing language — let the code speak
- Tag which Cartesia product(s) your integration supports via `cartesia_product` in frontmatter (valid values: `tts`, `stt`, `line`)
- No images or screenshots — if your integration needs a visual walkthrough, link to your own docs for that
- Multiple languages are welcome using Mintlify `<Tabs>` but not required
- Read the [Style Guide](STYLE_GUIDE.md) before writing

## Maintenance policy

You own your page. Here's what that means:

- Each page has a `last_verified` date in its frontmatter
- **At 6 months** without re-verification: we email you asking to confirm the page is still accurate
- **At 6 months + 2 weeks**, no response: a "community-maintained — last verified [date]" banner appears on the page
- **At 12 months** without re-verification: we email again — the page will be unpublished in 2 weeks if not re-verified
- **At 12 months + 2 weeks**, no response: the page is unpublished

To re-verify, open a PR updating the `last_verified` date (and fix anything that's changed). This resets the clock.

## Questions?

Open an issue or email devrel@cartesia.ai.
