# Style Guide for Community Integration Pages

These rules ensure your page matches the Cartesia docs voice. Pages that don't follow them will get revision requests.

## Voice

Write in **active voice, present tense**.

- Good: "Call `create_voice()` to generate a new voice."
- Bad: "The `create_voice()` method can be called to generate a new voice."
- Good: "Returns audio bytes in WAV format."
- Bad: "This will return audio bytes in WAV format."

## Be direct

Say "use X" instead of "you might want to consider using X."

Cut these phrases — they add nothing:

- "in order to" → "to"
- "it's important to note that" → (delete, just state the thing)
- "as mentioned above" → (delete, or link to the section)
- "simply" / "just" / "easily" → (delete — let's not assume what readers find simple or hard)

## No marketing

Your page is technical documentation, not a landing page. These words should not appear:

- "powerful", "robust", "seamless", "cutting-edge", "state-of-the-art"
- "easy", "simple", "effortless" (prove it with a short code example instead)
- "the best", "the leading", "the most popular"

If you catch yourself writing "Our powerful platform seamlessly integrates with Cartesia's cutting-edge API" — delete the sentence and show a code example instead.

## Code examples

Every code example must be **complete and runnable**:

- Include all imports
- Use realistic variable names (`voice_id`, `audio_chunk`, not `x`, `data`)
- Comment any line where the *why* isn't obvious — especially patterns that are standard practice for your tool but unfamiliar to someone who hasn't used it before. Skip comments that just restate what the code does (e.g., `# create a client`)
- Show expected output when it helps understanding

```python
# Good
from cartesia import Cartesia

client = Cartesia(api_key="your-api-key")
audio = client.tts.bytes(
    model_id="sonic-2024-10-25",
    transcript="Hello from Cartesia.",
    voice_id="a0e99841-438c-4a64-b679-ae501e7d6091",
)

# Bad
from cartesia import Cartesia
c = Cartesia(api_key="key")  # unclear variable name
# This creates a new client instance (obvious comment)
res = c.tts.bytes(model_id="sonic-2024-10-25", transcript="test", voice_id="abc")
```

## Structure

Open with what the integration enables (one sentence). Show the smallest working example of the integration with Cartesia. Keep the focus on the integration — don't explain your product's fundamentals. If there's more to cover, link to your own docs.

Don't write multi-paragraph introductions before showing code. Show the Developer how it works sooner rather than later.

If you need to provide background on your product, link to your own docs rather than explaining it here. Use HTML for external links so they open in a new tab: `<a href="https://..." target="_blank">link text</a>`

## Formatting

- Use inline code for identifiers: `model_id`, `"sonic-2024-10-25"`, `True`
- Use tables for 3+ related parameters
- Use lists only for genuinely parallel items, not as a substitute for prose
- Bold UI elements: click **Create Voice**

## Length

Aim to keep it short — a developer should be able to read the whole page in under 5 minutes. If it's running long, narrow the scope to the core use case and link to your own docs for the rest.