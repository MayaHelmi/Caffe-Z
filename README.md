# Caffe-Z

A small JavaScript practice task from the Orange training track: a simple cafe page with an
**Order Drink** button that walks the customer through an order using `prompt()` and `alert()`.

## Live demo

**https://mayahelmi.github.io/Caffe-Z/**

## What it does

Clicking **Order Drink** runs `order()` in `app.js`, which:

1. Asks for the customer's name.
2. Asks for their gender and greets them accordingly — `Welcome Mr ...`, `Welcome Ms ...`,
   or just `Welcome ...` if the answer is neither (`if / else if / else`).
3. Asks whether they want a hot or cold drink.
4. Asks which drink they want.
5. Shows a confirmation: `Your <hot/cold> <drink> is getting prepared`.
6. Logs the order to the browser console: `<name> ordered <drink>`.

## Files

- `index.html` — the page and the Order Drink button
- `app.js` — the `order()` function
- `style.css` — cafe styling (brown palette, centred layout)

No build step, no libraries. Open `index.html` in a browser.
