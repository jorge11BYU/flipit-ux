# Flipit design history

## Revision 3 — Copy cleanup

- Removed repeated screen-name headings, gallery filler, sidebar taglines, and the footer slogan.
- Shortened section headings, item description, empty states, and success messages.
- Kept the dominant headlines, buyer/seller perspective labels, availability signals, privacy information, and actionable reservation guidance.
- Preserved existing demo interactions and session data.

## Revision 2 — Listing grouping and availability clarity

- Grouped photographs, seller information, and listing details inside one shared card, with a subtle divider between the two desktop columns.
- Changed the main listing sentence to “No more guessing if an item is still available.”
- Added a seller-confirmed availability signal, explicitly labeled as sample activity.
- Kept availability separate from buyer interest: messages and submitted offers do not reserve an item; an accepted offer does.
- Updated the availability signal when a demo item is reserved, reopened, or sold. These status updates persist through refresh in the same browser tab.

The initial “2 hours ago” confirmation is fictional seed content. Later status timestamps reflect local demo interactions, not a real seller or an external verification service.

## Revision 1 — Initial three-screen prototype

[Initial creation commit](https://github.com/jorge11BYU/flipit-ux/commit/f0e6fa6c96c2b0e11ecd37c9478c37b3c14ed62c)

Created and published the item listing, seller inbox, and pending-sales screens, including messaging, offers, reservations, pickup confirmation, sale completion, and failed-sale recovery.

Each revision is a separate commit and push. The initial creation remains unchanged in Git history.
