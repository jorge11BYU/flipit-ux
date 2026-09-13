# Flipit

A three-screen interactive UX class prototype for a more transparent local marketplace.

**[Open the demo](https://jorge11byu.github.io/flipit-ux/)**

## The need

Sellers receiving several messages and offers need a clearer way to choose a buyer, reserve an item, and return to interested buyers if a sale falls through. Flipit explores that workflow without building a production marketplace.

## Three screens

See [CHANGELOG.md](../CHANGELOG.md) for the design revision history and the original creation commit.

1. **Item listing** — view a chair, compare anonymous official offers, message the seller, or submit an offer.
2. **Seller inbox** — select a listing, filter messages and offers, compare pickup details, reply, and accept one offer.
3. **Pending sales** — confirm pickup, mark an item sold, or reopen a failed sale and notify the remaining buyers in the demo.

Each screen leads with an action-focused affordance sentence. The responsive desktop interface becomes a sequential inbox on phones.

## Try a complete journey

1. On Item listing, send a message. It increases message activity without creating an offer.
2. Submit an official offer with a price and pickup time.
3. Open Seller inbox, select **You (demo buyer)**, and accept the offer.
4. The chair is reserved immediately and appears in Pending sales.
5. Confirm the pickup, then mark it sold. Alternatively, use **Sale fell through** to reopen the item and add availability notices to other conversations.

The accent table starts with a pending sale, so the third screen is useful without completing the first two. **Reset demo** restores all sample data. Changes survive refresh in the same browser tab through `sessionStorage`; storage failure falls back to in-memory operation.

## Run locally

No install or build step is required. From the repository root, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. Hash routes (`#/listing`, `#/inbox`, and `#/sales`) work on static hosts and survive refresh.

## What is simulated

- All people, activity counts, offer amounts, profile claims, reliability scores, locations, and conversations are fictional sample data. Photographs illustrate the listings; no pictured item is actually for sale.
- This is a shared-state demo: navigation lets a reviewer explore the buyer and seller perspectives. It is not authentication or a multi-user service.
- Messages, notifications, and transactions never reach another person. There are no accounts, payments, databases, analytics, Facebook integrations, or backend APIs.
- Message counts include buyer and seller messages, not unique buyers. System status notices are excluded. The 48-hour window and relative pickup times are fixed demonstration data, not live timers.
- Offer prices and pickup windows are publicly visible within the demo. Names, private notes, and conversation contents appear only on the seller screens.
- Reliability scores are illustrative. This demo does not detect ghosting, calculate penalties, or evaluate real people.
- The gallery uses a full photograph and two clearly labeled crops of that same photograph.
- Seller-confirmed availability is sample activity. The initial “2 hours ago” confirmation is seeded; subsequent availability timestamps reflect local reservation, reopening, and sale-completion actions.

## Assets

Photos are used under the [Pexels license](https://www.pexels.com/license/). Local copies keep item images available without relying on a third-party image server.

| Asset              | Photographer    | Original                                                                                               |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------ |
| `assets/chair.jpg` | Ksenia Chernaya | [Brown leather chair](https://www.pexels.com/photo/a-brown-leather-chair-on-a-white-surface-11112729/) |
| `assets/table.jpg` | Lisa Fotios     | [Round wooden end table](https://www.pexels.com/photo/round-brown-wooden-end-table-1444424/)           |
| `assets/lamp.jpg`  | Artem Podrez    | [White table lamp](https://www.pexels.com/photo/a-white-lamp-on-the-table-4612402/)                    |

Typography: Manrope and DM Sans via Google Fonts, with sans-serif fallbacks. The icon outlines and Flipit arrow favicon are defined in the source. No AI-generated imagery is used.

## Deployment

GitHub Pages serves the repository root from the `main` branch. `.nojekyll` enables plain static-file publishing. No credentials, environment files, or private data are required.

## Verification

The prototype is checked in a browser for the offer, reservation, completion, and fallback journeys; message/offer separation; prevention of double acceptance; keyboard dialog behavior; session refresh and reset; and desktop/mobile layouts. See [QA.md](../QA.md) for the recorded checks.
