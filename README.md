# Caffe-Z ☕

A small JavaScript practice task from the Orange training track: a simple cafe page with an
**Order Drink** button that walks the customer through an order using `prompt()` and `alert()`.

## Live URL

**https://mayahelmi.github.io/Caffe-Z/**

## What it does

Clicking **Order Drink** runs `order()` in `app.js`, which:

1. Asks for the customer's name.
2. Asks for their gender through the `getGender()` function and greets them accordingly —
   `Welcome Mr ...`, `Welcome Ms ...`, or just `Welcome ...` if the answer is neither.
3. Asks whether they want a hot or cold drink.
4. Asks which drink they want.
5. Shows a confirmation: `Your <hot/cold> <drink> is getting prepared`.
6. Logs the order to the browser console.

## Ex 3 update — functions

The gender question was moved out of `order()` into its own function:

```js
function getGender() {
    let gender = prompt("Enter your gender (male/female):");
    return gender;
}
```

It is called inside `order()` in the same place the prompt used to be, so the task works
exactly like it did before — the greeting and the fallback `else` behave the same.

## Files

- `index.html` — the page and the Order Drink button
- `app.js` — the `order()` and `getGender()` functions
- `style.css` — cafe styling (brown palette, centred layout)

## How to Run

1. Open `index.html` in a browser (or use the live URL above).
2. Click **Order Drink**.
3. Follow the prompts.

No build step, no libraries.
