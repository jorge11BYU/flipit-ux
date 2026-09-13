# Flipit verification

The checks below exercise the actual interactive prototype with fictional data.

## Functional journeys

- Sending an ordinary message increases the activity count without creating an official offer.
- A submitted offer displays the chosen price and pickup window in both the listing and seller inbox.
- Accepting the new offer reserves the chair and creates its Pending sales entry.
- Another buyer's offer cannot be accepted while that reservation exists.
- The illustrative reliability score opens an explanation and makes no claim to enforce a scoring algorithm.
- A failed sale releases the reservation, preserves backup offers, and adds availability notices to the waiting conversations.
- A backup offer can then be accepted.
- Pickup confirmation advances the timeline; marking sold closes the listing and remaining offers.
- Message-only filtering displays the message-only buyer and no acceptance action.
- Seller replies appear in their conversation.
- Reset restores 12 sample messages, 3 chair offers, and the preloaded table reservation.

## Interface checks

- Real photographs load from local assets.
- Native modal dialogs have labeled fields, required input validation, focus containment, and Escape dismissal.
- Mobile inbox supports listing → buyer → conversation navigation and back controls.
- Phone layouts and dialogs fit without horizontal page overflow.
- The dominant action sentence stays above the working surface on all three routes.

The prototype does not validate real buyer reliability, deliver notifications, or execute transactions. Relative dates and activity are intentionally fixed demo content.
