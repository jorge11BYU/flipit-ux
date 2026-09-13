"use strict";

const icons = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  back: '<path d="m14 6-6 6 6 6"/>',
  message:
    '<path d="M21 11a8 8 0 0 1-8 8H6l-4 3V11a9 9 0 0 1 19 0Z"/><path d="M7 10h10M7 14h6"/>',
  tag: '<path d="m3 3 8 0 10 10-8 8L3 11Z"/><circle cx="7.5" cy="7.5" r="1"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  shield:
    '<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Z"/><path d="m8 12 3 3 5-6"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  trend: '<path d="m3 17 6-6 4 4 8-10M15 5h6v6"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  send: '<path d="m22 2-7 20-4-9L2 9 22 2ZM11 13 22 2"/>',
  box: '<path d="m3 7 9-5 9 5v10l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v10M7 4l10 6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  refresh: '<path d="M20 7a9 9 0 1 0 1 9M20 2v5h-5"/>',
  users:
    '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M17 5a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 6"/>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',
};
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.tag}</svg>`;
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const money = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
const initialState = () => ({
  items: [
    {
      id: "chair",
      title: "The Sunday lounge chair",
      category: "Furniture · Lounge chair",
      price: 180,
      image: "assets/chair.jpg",
      status: "available",
      messages: 12,
      condition: "Excellent condition",
      location: "Provo, UT · 2 miles away",
      description:
        "A good book’s favorite seat. Rich brown leather, classic rolled arms, and brass-tone details. Gently used in a smoke-free home. Making room for a new space, so it’s ready for its next reading corner.",
      unread: 3,
    },
    {
      id: "table",
      title: "Round accent table",
      category: "Furniture · Side table",
      price: 65,
      image: "assets/table.jpg",
      status: "reserved",
      messages: 5,
      condition: "Good condition",
      location: "Provo, UT",
      unread: 1,
    },
    {
      id: "lamp",
      title: "Reading lamp",
      category: "Lighting · Table lamp",
      price: 45,
      image: "assets/lamp.jpg",
      status: "available",
      messages: 3,
      condition: "Like new",
      location: "Provo, UT",
      unread: 0,
    },
  ],
  threads: [
    {
      id: "t1",
      item: "chair",
      buyer: "Alex Morgan",
      initials: "AM",
      color: "mint",
      score: 98,
      offer: { amount: 160, pickup: "Today, 5–6 PM", status: "active" },
      unread: true,
      messages: [
        {
          from: "buyer",
          text: "Hi! This would be perfect for my reading corner. Is it still available?",
          time: "10:24 AM",
        },
        {
          from: "seller",
          text: "It is! The chair is in great shape. When were you thinking of picking it up?",
          time: "10:28 AM",
        },
        {
          from: "buyer",
          text: "I can come by today between 5 and 6. I’ve sent an offer for $160.",
          time: "10:31 AM",
        },
      ],
    },
    {
      id: "t2",
      item: "chair",
      buyer: "Jamie Chen",
      initials: "JC",
      color: "lilac",
      score: 94,
      offer: { amount: 180, pickup: "Saturday, 10–11 AM", status: "active" },
      unread: true,
      messages: [
        {
          from: "buyer",
          text: "Love the chair! I can offer the asking price if Saturday morning works for pickup.",
          time: "10:42 AM",
        },
      ],
    },
    {
      id: "t3",
      item: "chair",
      buyer: "Sam Rivera",
      initials: "SR",
      color: "sand",
      score: 87,
      offer: { amount: 170, pickup: "Tomorrow, 12–1 PM", status: "active" },
      unread: false,
      messages: [
        {
          from: "buyer",
          text: "Would you take $170? I can pick it up tomorrow around noon.",
          time: "9:56 AM",
        },
      ],
    },
    {
      id: "t4",
      item: "chair",
      buyer: "Taylor Brooks",
      initials: "TB",
      color: "rose",
      score: 96,
      offer: null,
      unread: true,
      messages: [
        {
          from: "buyer",
          text: "Hi! Would this fit in the back of a small SUV?",
          time: "11:02 AM",
        },
      ],
    },
    {
      id: "t5",
      item: "table",
      buyer: "Casey Ellis",
      initials: "CE",
      color: "mint",
      score: 97,
      offer: { amount: 60, pickup: "Tomorrow, 4–5 PM", status: "accepted" },
      unread: true,
      messages: [
        {
          from: "buyer",
          text: "$60 works for me. I can pick it up tomorrow afternoon.",
          time: "9:15 AM",
        },
        {
          from: "seller",
          text: "Sounds good! I’ve reserved it for you.",
          time: "9:20 AM",
        },
      ],
    },
    {
      id: "t6",
      item: "table",
      buyer: "Robin Lee",
      initials: "RL",
      color: "lilac",
      score: 92,
      offer: { amount: 55, pickup: "Saturday, 1–2 PM", status: "active" },
      unread: false,
      messages: [
        {
          from: "buyer",
          text: "Let me know if the table becomes available. I can pick it up this weekend.",
          time: "9:32 AM",
        },
      ],
    },
    {
      id: "t7",
      item: "lamp",
      buyer: "Jordan Bell",
      initials: "JB",
      color: "sand",
      score: 95,
      offer: null,
      unread: false,
      messages: [
        {
          from: "buyer",
          text: "Does the bulb come with it?",
          time: "Yesterday",
        },
      ],
    },
  ],
  sales: [{ id: "sale-table", item: "table", thread: "t5", stage: "accepted" }],
});
const storageKey = "flipit-demo-v1";
let state;
try {
  state = JSON.parse(sessionStorage.getItem(storageKey)) || initialState();
  if (
    !Array.isArray(state.items) ||
    !Array.isArray(state.threads) ||
    !Array.isArray(state.sales)
  )
    state = initialState();
} catch {
  state = initialState();
}
let selectedItem = "chair",
  selectedThread = "t1",
  selectedSale = "sale-table",
  filter = "all",
  mobilePanel = "items",
  galleryIndex = 0,
  toastTimer;
const main = document.querySelector("main"),
  modal = document.querySelector("#modal");
const itemById = (id) => state.items.find((x) => x.id === id);
const threadById = (id) => state.threads.find((x) => x.id === id);
const activeOffers = (id) =>
  state.threads.filter((t) => t.item === id && t.offer?.status === "active");
const save = () => {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    /* The in-memory demo still works when storage is unavailable. */
  }
};
const statusTag = (item) =>
  `<span class="tag ${item.status === "reserved" ? "pending" : item.status === "sold" ? "sold" : "available"}">${item.status === "reserved" ? "Pending pickup" : item.status === "sold" ? "Sold" : "Available"}</span>`;
const avatar = (t) =>
  `<span class="avatar ${t.color || ""}" aria-hidden="true">${t.initials}</span>`;
const heading = (number, label, start, end, view) =>
  `<div class="page-heading"><div><p class="eyebrow">${number} / ${label}</p><h1>${start.replace("moving—", '<span class="no-break">moving—</span>')}<br><span>${end}</span></h1></div><span class="view-label">${icon(view === "Buyer view" ? "eye" : "box")}${view}</span></div>`;
function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("visible"), 4500);
}
function route() {
  return ["listing", "inbox", "sales"].includes(location.hash.slice(2))
    ? location.hash.slice(2)
    : "listing";
}
function render() {
  const page = route();
  document.querySelectorAll("[data-nav]").forEach((el) => {
    if (el.dataset.nav === page) el.setAttribute("aria-current", "page");
    else el.removeAttribute("aria-current");
  });
  document.querySelector("#pending-count").textContent = state.sales.filter(
    (s) => !["completed", "cancelled"].includes(s.stage),
  ).length;
  main.innerHTML =
    page === "listing" ? listing() : page === "inbox" ? inbox() : sales();
  document.title = `Flipit — ${{ listing: "Item listing", inbox: "Seller inbox", sales: "Pending sales" }[page]}`;
}
function listingFreshness(item) {
  const updated = item.availabilityUpdatedAt;
  const minutes = updated
    ? Math.max(0, Math.floor((Date.now() - updated) / 60000))
    : null;
  const age =
    minutes === null
      ? null
      : minutes < 1
        ? "Just now"
        : minutes < 60
          ? `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`
          : minutes < 1440
            ? `${Math.floor(minutes / 60)} ${minutes < 120 ? "hour" : "hours"} ago`
            : new Date(updated).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
  const title =
    item.status === "sold"
      ? "Seller marked this item sold"
      : item.status === "reserved"
        ? "Seller reserved this item"
        : item.availabilityAction === "reopened"
          ? "Seller reconfirmed availability"
          : "Seller confirmed availability";
  const explanation =
    item.status === "sold"
      ? "This item is no longer available."
      : item.status === "reserved"
        ? "A pickup is pending. Other offers are backups."
        : "No offer has been accepted. You can still make yours.";
  return `<div class="listing-freshness ${item.status}" aria-label="Listing freshness">${icon(item.status === "available" ? "check" : item.status === "reserved" ? "clock" : "tag")}<div><strong>${title}</strong><span>${age || (item.status === "available" ? "2 hours ago" : "Current listing status")} · Sample activity</span><p>${explanation}</p></div></div>`;
}
function listing() {
  const item = itemById("chair"),
    offers = activeOffers("chair"),
    ownAccepted = state.threads.some(
      (t) => t.id === "demo-buyer" && t.offer?.status === "accepted",
    );
  return `${heading("01", "Item listing", "No more guessing if", "an item is still available.", "Buyer view")}
  <article class="listing-grid card" aria-label="The Sunday lounge chair listing"><section class="listing-visual" aria-label="Item photographs and description">
    <div class="photo-main"><img src="${item.image}" alt="Brown leather lounge chair with rolled arms and brass-tone trim" style="object-position:${["50% 50%", "25% 50%", "75% 50%"][galleryIndex]};${galleryIndex ? "transform:scale(1.35)" : ""}"><span class="photo-caption">${icon("image")}${["Full view", "Arm detail · cropped view", "Seat detail · cropped view"][galleryIndex]}</span><span class="photo-counter">${galleryIndex + 1} / 3</span></div>
    <div class="thumbs" aria-label="Photo views">${[0, 1, 2].map((n) => `<button class="thumb" data-action="photo" data-index="${n}" aria-label="${["Full photo", "Arm crop", "Seat crop"][n]}" aria-pressed="${n === galleryIndex}"><img src="${item.image}" alt="" style="${n ? "transform:scale(1.3)" : ""}"></button>`).join("")}<span class="gallery-note">One photograph.<br>Three closer looks.</span></div>
    <div class="description"><h3>A little about the chair</h3><p>${item.description}</p></div>
    <div class="seller-card"><span class="avatar rose" aria-hidden="true">JD</span><div><strong>Listed by Jamie Davis</strong><p>Member since 2022 · 18 completed sales</p></div><span class="verified">${icon("shield")}Verified profile</span></div>
  </section><section class="listing-detail" aria-label="Listing and offers"><div class="listing-meta"><span class="small muted">${item.category}</span>${statusTag(item)}</div>
    <div class="item-title-row"><h2>${item.title}</h2><strong class="price">${money(item.price)}</strong></div><p class="location">${icon("pin")}${item.location}</p>
    <div class="item-facts"><span>${item.condition}</span><span>Local pickup</span></div>
    ${listingFreshness(item)}
    <div class="interest-box"><h3>${icon("trend")}A clear view of the interest</h3><div class="interest-stats"><div><strong>${item.messages}</strong><span>messages in the past 48 hours</span></div><div><strong>${offers.length}</strong><span>${item.status === "reserved" ? "backup" : "active"} offers</span></div></div><p class="interest-note">Messages include follow-ups, not just unique buyers. Only an accepted offer reserves the item.</p></div>
    <div class="offers-heading"><h3>${item.status === "reserved" ? "Backup offers" : "Current offers"}</h3><span>Highest price first</span></div>
    <div class="public-offers">${
      [...offers]
        .sort((a, b) => b.offer.amount - a.offer.amount)
        .map(
          (t) =>
            `<div class="public-offer"><span class="offer-dot">${icon("tag")}</span><strong>${money(t.offer.amount)}</strong><small>${escapeHTML(t.offer.pickup)}</small></div>`,
        )
        .join("") || '<p class="small muted">No active offers.</p>'
    }</div>
    <p class="private-note">${icon("lock")}Only amounts and pickup windows are public. Names and conversations stay private.</p>
    ${item.status === "reserved" ? `<p class="notice">${ownAccepted ? "Your offer was accepted! The chair is reserved for you. Coordinate pickup with the seller." : "Reserved for another buyer. You can send a backup offer in case plans change."}</p>` : ""}
    <div class="listing-actions"><button class="btn" data-action="message" ${item.status === "sold" ? "disabled" : ""}>${icon("message")}Message seller</button><button class="btn primary" data-action="offer" ${item.status === "sold" || ownAccepted ? "disabled" : ""}>${ownAccepted ? "Your offer is accepted" : item.status === "reserved" ? "Send backup offer" : "Make an offer"}${icon("arrow")}</button></div><p class="action-note">${item.status === "sold" ? "This item has found its next home." : "An offer starts a conversation. It doesn’t reserve the item."}</p>
    <div class="mobile-listing-details description"><h3>A little about the chair</h3><p>${item.description}</p><p class="mobile-seller">Listed by Jamie Davis · 18 completed sales</p></div>
  </section></article>`;
}
function inbox() {
  const item = itemById(selectedItem),
    all = state.threads.filter((t) => t.item === selectedItem),
    threads = all.filter(
      (t) => filter === "all" || (filter === "offers" ? t.offer : !t.offer),
    );
  if (!threads.some((t) => t.id === selectedThread))
    selectedThread = threads[0]?.id;
  const t = threadById(selectedThread);
  return `${heading("02", "Seller inbox", "Compare buyers and", "choose your next sale.", "Seller view")}
  <div class="inbox-shell card" data-panel="${mobilePanel}">
    <aside class="item-column" aria-label="Your listed items"><div class="column-heading"><h2>Your listings</h2><span class="count-pill">${state.items.length}</span></div>
      <div class="item-list">${state.items
        .map((i) => {
          const unread = state.threads.filter(
            (t) => t.item === i.id && t.unread,
          ).length;
          return `<button class="item-row ${i.id === selectedItem ? "selected" : ""}" data-action="select-item" data-item="${i.id}" aria-pressed="${i.id === selectedItem}"><img src="${i.image}" alt=""><span><strong>${i.title}</strong><small>${money(i.price)}${i.status === "reserved" ? " · Pending" : i.status === "sold" ? " · Sold" : ""}</small></span>${unread ? `<span class="unread-count">${unread}<span class="sr-only"> unread conversations</span></span>` : ""}</button>`;
        })
        .join("")}</div>
      <div class="inbox-tip">${icon("lock")}<p>One item, one place.<br>Your conversations stay together.</p></div>
    </aside>
    <section class="buyers-column" aria-label="Interested buyers"><div class="column-heading"><button class="icon-button mobile-back" data-action="panel" data-panel="items" aria-label="Back to items">${icon("back")}</button><div><h2>Interested buyers</h2><p>${all.length} conversations · ${activeOffers(selectedItem).length} ${item.status === "reserved" ? "backup" : "active"} offers</p></div></div>
      <div class="filter-tabs" role="group" aria-label="Filter conversations">${["all", "offers", "messages"].map((f) => `<button data-action="filter" data-filter="${f}" aria-pressed="${filter === f}">${f[0].toUpperCase() + f.slice(1)}</button>`).join("")}</div>
      <div class="buyer-list">${threads.map((b) => `<button class="buyer-row ${b.id === selectedThread ? "selected" : ""}" data-action="select-thread" data-thread="${b.id}" aria-pressed="${b.id === selectedThread}"><span class="buyer-top">${avatar(b)}<span class="buyer-name"><strong>${escapeHTML(b.buyer)}</strong><span class="tag ${b.offer ? "offer" : "message"}">${b.offer ? "Official offer" : "Message"}</span></span>${b.unread ? '<span class="unread-dot" aria-label="Unread"></span>' : ""}</span>${b.offer ? `<span class="buyer-offer"><strong>${money(b.offer.amount)}</strong><span>${escapeHTML(b.offer.pickup)}</span></span>` : ""}<span class="buyer-preview">${escapeHTML(b.messages.at(-1)?.text || "Sent an official offer.")}</span>${b.offer && b.offer.status !== "active" ? `<span class="offer-state">${{ accepted: "Reserved for this buyer", declined: "Previous offer · Sale fell through", closed: "Offer closed", completed: "Sale completed" }[b.offer.status] || ""}</span>` : ""}</button>`).join("") || '<div class="empty-state small">No conversations in this filter.</div>'}</div>
    </section>
    <section class="conversation-column" aria-label="Selected conversation">${t ? conversation(t, item) : '<div class="empty-state"><h3>No conversation selected</h3><p>Choose another filter to see your buyers.</p></div>'}</section>
  </div><p class="under-panel">${icon("info")}You choose the best fit. A higher offer doesn’t always mean an easier pickup.</p>`;
}
function conversation(t, item) {
  const offer = t.offer;
  return `<div class="conversation-header"><button class="icon-button mobile-back" data-action="panel" data-panel="buyers" aria-label="Back to buyers">${icon("back")}</button>${avatar(t)}<div class="conversation-person"><h2>${escapeHTML(t.buyer)}</h2><p>About ${item.title.toLowerCase()}</p></div><button class="reliability" data-action="score" data-thread="${t.id}" aria-label="Reliability score ${t.score} out of 100, sample. View explanation">${icon("shield")}<strong>${t.score}</strong><span>/100 · sample</span>${icon("info")}</button></div>
  ${offer ? `<div class="offer-summary"><div class="offer-summary-label"><span class="tag offer">${icon("tag")}Official offer</span><span class="small muted">${offer.status === "active" ? "Awaiting your decision" : offer.status === "accepted" ? "Accepted" : offer.status === "declined" ? "Sale fell through" : offer.status === "completed" ? "Completed" : "Closed"}</span></div><div class="offer-summary-value"><strong>${money(offer.amount)}</strong><span>${icon("calendar")}${escapeHTML(offer.pickup)}</span></div>${item.status === "available" && offer.status === "active" ? `<button class="btn primary full" data-action="accept" data-thread="${t.id}">Accept offer${icon("arrow")}</button>` : item.status === "reserved" ? `<p class="small muted">${offer.status === "accepted" ? "This item is reserved for this buyer." : "This offer is a backup while another pickup is pending."}</p><button class="btn full" data-action="view-sale" data-item="${item.id}">View pending sale${icon("arrow")}</button>` : ""}</div>` : '<div class="message-context">' + icon("message") + "Just a conversation. No official offer yet.</div>"}
  <div class="chat-messages" aria-label="Message history"><div class="chat-date"><span>Today · Sample conversation</span></div>${t.messages.map((m) => (m.from === "system" ? `<div class="system-message">${icon("info")}<span>${escapeHTML(m.text)}</span></div>` : `<div class="message-group ${m.from === "seller" ? "outgoing" : "incoming"}"><div class="bubble">${escapeHTML(m.text)}</div><span class="message-time">${m.from === "seller" ? "You · " : ""}${m.time}</span></div>`)).join("") || '<p class="small muted">No messages yet. Start the conversation below.</p>'}</div>
  <form id="reply-form" class="reply-form" data-thread="${t.id}"><label class="sr-only" for="reply-text">Reply to ${escapeHTML(t.buyer)}</label><input id="reply-text" name="reply" placeholder="Write a reply…" required maxlength="1000" autocomplete="off"><button class="btn primary" aria-label="Send reply" type="submit">${icon("send")}</button></form><p class="chat-privacy">${icon("lock")}Only you and this buyer can see these messages.</p>`;
}
function sales() {
  const list = state.sales.filter((s) => s.stage !== "cancelled");
  if (!list.some((s) => s.id === selectedSale)) selectedSale = list[0]?.id;
  const sale = list.find((s) => s.id === selectedSale),
    pending = list.filter((s) => s.stage !== "completed").length;
  return `${heading("03", "Pending sales", "Keep your sale moving—", "even if plans change.", "Seller view")}
  <div class="sales-grid"><aside class="sale-list-column" aria-label="Your pending sales"><div class="sales-list-title"><h2>Your pickups</h2><span class="count-pill">${pending} pending</span></div>
  ${
    list
      .map((s) => {
        const i = itemById(s.item),
          t = threadById(s.thread);
        return `<button class="sale-card card ${s.id === selectedSale ? "selected" : ""}" data-action="select-sale" data-sale="${s.id}" aria-pressed="${s.id === selectedSale}"><span class="sale-card-top"><img src="${i.image}" alt=""><span><strong>${i.title}</strong><span class="sale-card-price">${money(t.offer.amount)} <small>agreed price</small></span></span></span><span class="sale-card-divider"></span><span class="sale-card-bottom"><span>${icon("calendar")}${escapeHTML(t.offer.pickup)}</span><span class="tag ${s.stage === "completed" ? "available" : s.stage === "confirmed" ? "offer" : "pending"}">${s.stage === "completed" ? "Completed" : s.stage === "confirmed" ? "Confirmed" : "To confirm"}</span></span></button>`;
      })
      .join("") ||
    '<div class="card empty-state"><h3>No pending pickups</h3><p>Accept an offer to get your next sale moving.</p><a class="btn primary" href="#/inbox">Go to seller inbox</a></div>'
  }
  <div class="sale-tip">${icon("shield")}<div><strong>A plan everyone can see.</strong><p>Once you accept an offer, the item is reserved. Other interested buyers can stay as backups.</p></div></div></aside>
  <section class="sale-detail card" aria-label="Selected sale">${sale ? saleDetails(sale) : '<div class="empty-state"><h3>Your next sale starts with an offer.</h3><p>Choose a buyer in your inbox. Their pickup plan will appear here.</p></div>'}</section></div>`;
}
function saleDetails(s) {
  const i = itemById(s.item),
    t = threadById(s.thread),
    backups = state.threads.filter(
      (b) =>
        b.item === s.item &&
        b.id !== t.id &&
        (!b.offer || b.offer.status === "active"),
    ),
    isComplete = s.stage === "completed";
  return `<div class="sale-detail-header"><div><p class="eyebrow">${isComplete ? "A successful handoff" : "Reserved · Local pickup"}</p><h2>${i.title}</h2></div>${statusTag(i)}</div>
  <div class="pickup-panel"><div class="pickup-icon">${icon(isComplete ? "check" : "calendar")}</div><div><p>${isComplete ? "Pickup completed" : s.stage === "confirmed" ? "Your pickup is confirmed" : "Next up: confirm your pickup"}</p><h3>${escapeHTML(t.offer.pickup)}</h3><span>${icon("pin")}Provo, UT · Agree on a public meetup spot in chat</span></div></div>
  <div class="sale-buyer">${avatar(t)}<div><strong>${escapeHTML(t.buyer)}</strong><span>Buyer · ${money(t.offer.amount)} agreed</span></div><button class="btn" data-action="open-chat" data-thread="${t.id}">${icon("message")}Message</button></div>
  <div class="timeline" aria-label="Sale progress">${[
    "Offer accepted",
    "Pickup confirmed",
    "Sale completed",
  ]
    .map((label, n) => {
      const stageIndex =
          s.stage === "accepted" ? 0 : s.stage === "confirmed" ? 1 : 2,
        done = n <= stageIndex;
      return `<div class="timeline-step ${done ? "done" : ""} ${n === stageIndex + 1 ? "next" : ""}"><span class="timeline-marker">${done ? icon("check") : n + 1}</span><div><strong>${label}</strong><p>${n === 0 ? "Item reserved for one buyer." : n === 1 ? (done ? "Pickup time agreed with your buyer." : "Confirm the time after chatting with your buyer.") : done ? "Another item, a new home." : "Mark sold after the item has been picked up."}</p></div>${n === stageIndex + 1 ? '<span class="next-label">Next step</span>' : ""}</div>`;
    })
    .join("")}</div>
  ${!isComplete ? `<div class="sale-primary-actions"><button class="btn primary" data-action="${s.stage === "accepted" ? "confirm-pickup" : "complete-sale"}" data-sale="${s.id}">${icon(s.stage === "accepted" ? "calendar" : "check")}${s.stage === "accepted" ? "Confirm pickup" : "Mark sold"}</button><button class="btn subtle" data-action="fallthrough" data-sale="${s.id}">Sale fell through</button></div>` : '<div class="completion-banner">' + icon("check") + "Sale completed. Other offers are now closed.</div>"}
  <div class="backup-section"><div class="backup-title"><h3>${icon("users")}${isComplete ? "Other conversations" : `${backups.length} interested ${backups.length === 1 ? "buyer" : "buyers"} waiting`}</h3>${!isComplete ? '<span class="tag message">Your backup plan</span>' : ""}</div><p>${isComplete ? "The listing is marked sold, so everyone can see it’s no longer available." : "If plans change, reopen the listing and let these buyers know in one step."}</p>${!isComplete ? backups.map((b) => `<button class="backup-row" data-action="open-chat" data-thread="${b.id}">${avatar(b)}<span><strong>${escapeHTML(b.buyer)}</strong><small>${b.offer ? `${money(b.offer.amount)} · ${escapeHTML(b.offer.pickup)}` : "Asked about this item"}</small></span>${icon("chevron")}</button>`).join("") : ""}</div>`;
}
function openModal(title, body) {
  modal.innerHTML = `<div class="dialog-header"><h2 id="modal-title">${title}</h2><button class="icon-button" data-action="close" aria-label="Close dialog">${icon("close")}</button></div>${body}`;
  modal.showModal();
}
function formButtons(label) {
  return `<div class="dialog-actions"><button type="button" class="btn" data-action="close">Cancel</button><button class="btn primary" type="submit">${label}${icon("arrow")}</button></div>`;
}
function buyerThread() {
  let t = state.threads.find(
    (x) => x.item === "chair" && x.buyer === "You (demo buyer)",
  );
  if (!t) {
    t = {
      id: "demo-buyer",
      item: "chair",
      buyer: "You (demo buyer)",
      initials: "YOU",
      color: "lilac",
      score: 95,
      offer: null,
      unread: true,
      messages: [],
    };
    state.threads.push(t);
  }
  return t;
}
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const action = el.dataset.action;
  if (action === "close") modal.close();
  if (action === "photo") {
    galleryIndex = Number(el.dataset.index);
    render();
    main.querySelector(`[data-index="${galleryIndex}"]`).focus();
  }
  if (action === "message")
    openModal(
      "Start a conversation",
      `<p class="dialog-intro">Ask Jamie about the lounge chair. Your message stays private and won’t count as an official offer.</p><form id="message-form"><div class="field"><label for="message-text">Your message</label><textarea id="message-text" name="message" required maxlength="1000" placeholder="Hi Jamie! I have a question about the chair…"></textarea></div>${formButtons("Send message")}</form>`,
    );
  if (action === "offer") {
    const old = state.threads.find((t) => t.id === "demo-buyer")?.offer;
    if (old?.status === "accepted" || itemById("chair").status === "sold")
      return;
    openModal(
      itemById("chair").status === "reserved"
        ? "Send a backup offer"
        : "Make it an official offer",
      `<p class="dialog-intro">Share your price and when you can pick up. Only those details will be visible to other buyers.</p><form id="offer-form"><div class="field"><label for="offer-amount">Your offer (USD)</label><input id="offer-amount" name="amount" type="number" min="1" max="100000" step="1" value="${old?.amount || 180}" required></div><div class="field"><label for="offer-pickup">Pickup window</label><select id="offer-pickup" name="pickup" required><option value="">Choose a time</option><option>Today, 5–6 PM</option><option>Tomorrow, 12–1 PM</option><option>Tomorrow, 4–5 PM</option><option>Saturday, 10–11 AM</option></select></div><div class="field"><label for="offer-note">Private note <span class="muted">(optional)</span></label><textarea id="offer-note" name="note" maxlength="1000" placeholder="Anything you’d like the seller to know"></textarea></div><p class="small muted">${old ? "Submitting replaces your previous offer." : "The seller chooses which offer to accept."}</p>${formButtons(old ? "Update offer" : "Send offer")}</form>`,
    );
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "message-form") {
    e.preventDefault();
    const data = new FormData(e.target),
      text = String(data.get("message")).trim();
    if (!text) {
      e.target.elements.message.setCustomValidity("Please enter a message.");
      e.target.elements.message.reportValidity();
      return;
    }
    const t = buyerThread();
    t.messages.push({ from: "buyer", text, time: "Just now" });
    t.unread = true;
    itemById("chair").messages++;
    save();
    modal.close();
    render();
    toast("Message sent. Your conversation is private.");
  }
  if (e.target.id === "offer-form") {
    e.preventDefault();
    const data = new FormData(e.target),
      t = buyerThread();
    t.offer = {
      amount: Number(data.get("amount")),
      pickup: String(data.get("pickup")),
      status: "active",
    };
    t.unread = true;
    const text = String(data.get("note")).trim();
    if (text) {
      t.messages.push({ from: "buyer", text, time: "Just now" });
      itemById("chair").messages++;
    }
    save();
    modal.close();
    render();
    toast("Offer sent. You can find it in the seller inbox.");
  }
});
document.addEventListener("input", (e) => {
  if (e.target.setCustomValidity) e.target.setCustomValidity("");
});
function openConversation(id) {
  const t = threadById(id);
  selectedItem = t.item;
  selectedThread = id;
  filter = "all";
  mobilePanel = "chat";
  t.unread = false;
  save();
  if (route() === "inbox") render();
  else location.hash = "/inbox";
}
function pendingSaleFor(item) {
  return state.sales.find(
    (s) => s.item === item && !["cancelled", "completed"].includes(s.stage),
  );
}
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const a = el.dataset.action;
  if (a === "select-item") {
    selectedItem = el.dataset.item;
    filter = "all";
    selectedThread = state.threads.find((t) => t.item === selectedItem)?.id;
    mobilePanel = "buyers";
    render();
  }
  if (a === "select-thread") {
    selectedThread = el.dataset.thread;
    threadById(selectedThread).unread = false;
    mobilePanel = "chat";
    save();
    render();
  }
  if (a === "filter") {
    filter = el.dataset.filter;
    render();
    main.querySelector(`[data-filter="${filter}"]`).focus();
  }
  if (a === "panel") {
    mobilePanel = el.dataset.panel;
    render();
  }
  if (a === "score") {
    const t = threadById(el.dataset.thread);
    openModal(
      "Pickup reliability",
      `<p class="dialog-intro">${escapeHTML(t.buyer)} · Illustrative score</p><div class="score-number">${t.score}<span> / 100</span></div><p class="small">This concept’s score represents follow-through after an offer is accepted: completing agreed pickups and responding when plans change.</p><p class="score-footnote">All scores are fictional examples. A real system would need verified outcomes and a way to correct mistakes. This demo does not calculate scores, detect ghosting, or penalize anyone.</p><div class="dialog-actions"><button class="btn primary" data-action="close">Got it</button></div>`,
    );
  }
  if (a === "accept") {
    const t = threadById(el.dataset.thread),
      i = itemById(t.item);
    if (i.status !== "available" || t.offer?.status !== "active") return;
    openModal(
      "Reserve it for this buyer?",
      `<p class="dialog-intro">Accepting reserves the item immediately. Other buyers can still send backup offers, but you can only accept one at a time.</p><div class="dialog-summary"><p><span>Item</span><strong>${i.title}</strong></p><p><span>Buyer</span><strong>${escapeHTML(t.buyer)}</strong></p><p><span>Offer</span><strong>${money(t.offer.amount)}</strong></p><p><span>Pickup</span><strong>${escapeHTML(t.offer.pickup)}</strong></p></div><div class="dialog-actions"><button class="btn" data-action="close">Keep comparing</button><button class="btn primary" data-action="confirm-accept" data-thread="${t.id}">Accept and reserve${icon("arrow")}</button></div>`,
    );
  }
  if (a === "confirm-accept") {
    const t = threadById(el.dataset.thread),
      i = itemById(t.item);
    if (i.status !== "available" || t.offer?.status !== "active") {
      modal.close();
      return;
    }
    i.status = "reserved";
    i.availabilityUpdatedAt = Date.now();
    i.availabilityAction = "reserved";
    t.offer.status = "accepted";
    t.messages.push({
      from: "system",
      text: "Offer accepted. The item is reserved for this buyer. Confirm the pickup details together.",
      time: "Just now",
    });
    const s = {
      id: `sale-${Date.now()}`,
      item: i.id,
      thread: t.id,
      stage: "accepted",
    };
    state.sales.unshift(s);
    selectedSale = s.id;
    save();
    modal.close();
    location.hash = "/sales";
    toast("Offer accepted. The item is reserved for one buyer.");
  }
  if (a === "select-sale") {
    selectedSale = el.dataset.sale;
    render();
  }
  if (a === "view-sale") {
    const s = pendingSaleFor(el.dataset.item);
    if (s) {
      selectedSale = s.id;
      location.hash = "/sales";
    }
  }
  if (a === "open-chat") openConversation(el.dataset.thread);
  if (a === "confirm-pickup") {
    const s = state.sales.find((s) => s.id === el.dataset.sale);
    if (s?.stage !== "accepted") return;
    const t = threadById(s.thread);
    openModal(
      "Confirm the pickup plan",
      `<p class="dialog-intro">Use this after you and ${escapeHTML(t.buyer.split(" ")[0])} have agreed on the time in your conversation.</p><div class="dialog-summary"><p><span>Pickup window</span><strong>${escapeHTML(t.offer.pickup)}</strong></p></div><div class="dialog-actions"><button class="btn" data-action="close">Not yet</button><button class="btn primary" data-action="confirm-pickup-done" data-sale="${s.id}">Confirm pickup${icon("check")}</button></div>`,
    );
  }
  if (a === "confirm-pickup-done") {
    const s = state.sales.find((s) => s.id === el.dataset.sale);
    if (s?.stage !== "accepted") return;
    s.stage = "confirmed";
    threadById(s.thread).messages.push({
      from: "system",
      text: "Pickup confirmed. You have agreed on the pickup window.",
      time: "Just now",
    });
    save();
    modal.close();
    render();
    toast("Pickup confirmed. You’re one step closer to sold.");
  }
  if (a === "complete-sale") {
    const s = state.sales.find((s) => s.id === el.dataset.sale);
    if (s?.stage !== "confirmed") return;
    openModal(
      "Has the item been picked up?",
      `<p class="dialog-intro">Mark it sold after the handoff is complete. The listing will show Sold and remaining offers will close.</p><div class="dialog-actions"><button class="btn" data-action="close">Not yet</button><button class="btn primary" data-action="complete-sale-done" data-sale="${s.id}">Yes, mark sold${icon("check")}</button></div>`,
    );
  }
  if (a === "complete-sale-done") {
    const s = state.sales.find((s) => s.id === el.dataset.sale);
    if (s?.stage !== "confirmed") return;
    s.stage = "completed";
    itemById(s.item).status = "sold";
    itemById(s.item).availabilityUpdatedAt = Date.now();
    itemById(s.item).availabilityAction = "sold";
    state.threads
      .filter((t) => t.item === s.item)
      .forEach((t) => {
        if (t.offer)
          t.offer.status = t.id === s.thread ? "completed" : "closed";
        t.messages.push({
          from: "system",
          text:
            t.id === s.thread
              ? "Sale completed. Thanks for a smooth pickup!"
              : "This item has been sold. Thanks for your interest.",
          time: "Just now",
        });
      });
    save();
    modal.close();
    render();
    toast("Sold! The listing and all offers have been updated.");
  }
  if (a === "fallthrough") {
    const s = state.sales.find((s) => s.id === el.dataset.sale);
    if (!s || ["completed", "cancelled"].includes(s.stage)) return;
    const count = state.threads.filter(
      (t) =>
        t.item === s.item &&
        t.id !== s.thread &&
        (!t.offer || t.offer.status === "active"),
    ).length;
    openModal(
      "Get your sale moving again",
      `<p class="dialog-intro">Release this reservation and let ${count} other interested ${count === 1 ? "buyer" : "buyers"} know the item is available. Their messages and active offers stay in your inbox.</p><form id="fallthrough-form" data-sale="${s.id}"><div class="field"><label for="fallthrough-reason">What changed? <span class="muted">(optional)</span></label><select id="fallthrough-reason" name="reason"><option value="">Choose a reason</option><option>Buyer stopped responding</option><option>Pickup plans changed</option><option>Buyer no longer wants the item</option><option>Something else</option></select></div><p class="small muted">This note stays private. No reliability scores will change in the demo.</p><div class="dialog-actions vertical"><button class="btn primary full" type="submit">Reopen listing and notify interested buyers</button><button class="btn subtle full" type="button" data-action="close">Keep the reservation</button></div></form>`,
    );
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "reply-form") {
    e.preventDefault();
    const text = String(new FormData(e.target).get("reply")).trim();
    if (!text) {
      e.target.elements.reply.setCustomValidity("Please enter a reply.");
      e.target.elements.reply.reportValidity();
      return;
    }
    const t = threadById(e.target.dataset.thread);
    t.messages.push({ from: "seller", text, time: "Just now" });
    itemById(t.item).messages++;
    save();
    render();
    document.querySelector("#reply-text").focus();
    const chat = document.querySelector(".chat-messages");
    chat.scrollTop = chat.scrollHeight;
    toast("Reply sent in this demo conversation.");
  }
  if (e.target.id === "fallthrough-form") {
    e.preventDefault();
    const s = state.sales.find((s) => s.id === e.target.dataset.sale);
    if (!s || ["cancelled", "completed"].includes(s.stage)) return;
    const previous = threadById(s.thread),
      waiting = state.threads.filter(
        (t) =>
          t.item === s.item &&
          t.id !== s.thread &&
          (!t.offer || t.offer.status === "active"),
      );
    s.stage = "cancelled";
    s.reason = String(new FormData(e.target).get("reason"));
    itemById(s.item).status = "available";
    itemById(s.item).availabilityUpdatedAt = Date.now();
    itemById(s.item).availabilityAction = "reopened";
    previous.offer.status = "declined";
    previous.messages.push({
      from: "system",
      text: "The reservation has been released. This item is available again.",
      time: "Just now",
    });
    waiting.forEach((t) => {
      t.messages.push({
        from: "system",
        text: "Good news! This item is available again. Your interest is still welcome—message the seller if you’d like to pick it up.",
        time: "Just now",
      });
    });
    selectedItem = s.item;
    selectedThread = waiting[0]?.id || previous.id;
    filter = "all";
    mobilePanel = "chat";
    save();
    modal.close();
    location.hash = "/inbox";
    toast(
      `Listing reopened. ${waiting.length} interested ${waiting.length === 1 ? "buyer notified" : "buyers notified"} in the demo.`,
    );
  }
});
modal.addEventListener("close", () => {
  if (document.activeElement === document.body)
    main.focus({ preventScroll: true });
});
modal.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const controls = [
    ...modal.querySelectorAll(
      "button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href]",
    ),
  ];
  const first = controls[0],
    last = controls.at(-1);
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});
document
  .querySelector("#reset-demo")
  .addEventListener("click", () =>
    openModal(
      "Reset the demo?",
      `<p class="dialog-intro">Restore the sample listings, offers, and conversations. Your demo changes will be cleared.</p><div class="dialog-actions"><button class="btn" data-action="close">Keep exploring</button><button class="btn primary" id="confirm-reset">Reset demo</button></div>`,
    ),
  );
document.addEventListener("click", (e) => {
  if (e.target.closest("#confirm-reset")) {
    state = initialState();
    selectedItem = "chair";
    selectedThread = "t1";
    selectedSale = "sale-table";
    filter = "all";
    mobilePanel = "items";
    galleryIndex = 0;
    save();
    modal.close();
    render();
    toast("Demo reset. Ready for a fresh start.");
  }
});
window.addEventListener("hashchange", () => {
  render();
  window.scrollTo(0, 0);
  main.focus({ preventScroll: true });
});
render();
