# Shatty 2014 — notes for faithful reproduction

## v2 completed (focus: conversation history)
- **Initial screen semantics**: labels and `aria-labels` reinforce that this mock is **conversation history**, not a real-time chat room.
- **Pixel parity through visual inspection**:
  - typography scales were increased to better match old rendering,
  - spacing adjustments by section (top, green bar, tabs, list, footer),
  - dashed separators and message-bubble alignments refined,
  - circular thumbnail overlay added on the third conversation to mirror the reference.
- **Explicit list semantics**:
  - third conversation tagged with `data-last-message-by="self"` and an inline code comment explaining that the overlaid photo appears because the last message was sent by the user themself;
  - last conversation marked as a group (`data-conversation-type="group"`) and preview starting with the sender (`Eduardo:`), matching the mock.

## Icon/glyph state
- Kept as textual/Unicode fallback to preserve offline portability.
- Optional next step: map exact glyphs based on legacy fonts (IcoMoon/Fontello/FA 3-4) and convert to a local subset.

## Suggested next upgrade
- ✅ Implemented: local visual comparison mode with:
  - grid toggle (`show-grid`),
  - reference-image overlay toggle (`data-reference-visible`),
  - opacity control via slider (`--reference-opacity`).
- Usage: save the reference at `apps/web/reference/shatty-history-reference.png` and open `shatty-2014.html`.
