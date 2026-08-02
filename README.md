# Caffe-Z ☕

A small JavaScript practice task from the Orange training track: a simple cafe page where the
customer fills in an order form and the order is written back into the page with the DOM.

## Live URL

**https://mayahelmi.github.io/Caffe-Z/**

## What it does

The visitor fills in the form — name, age, gender, order type, and a hot / cold radio button —
and presses **Order Drink**. That fires the form's `submit` event, and `order()` in `app.js`:

1. Stops the browser from reloading the page (`event.preventDefault()`).
2. Reads all five answers from the form.
3. Greets the customer — `Welcome Mr ...`, `Welcome Ms ...`, or just `Welcome ...`.
4. Builds the order card with the DOM and writes it into the page.
5. Logs the order to the browser console.

## Ex 3 update — functions

The gender question was moved out of `order()` into its own function:

```js
function getGender() {
    let gender = document.getElementById("gender").value;
    return gender;
}
```

It is still its own function and still called from inside `order()` — it just reads the form's
gender field now instead of showing a prompt.

## Ex 4 update — DOM

The order is no longer only shown in alerts, it is also written back into the page.

- `index.html` now has a hero section with an introduction paragraph about the website,
  and an empty `<div id="orderDetails">` that JavaScript can read.
- `app.js` has a `showOrder()` function that builds the elements with the DOM
  (`div` > `p` > `ol` > `li`), fills them with the data the user entered, and appends
  them to that div.

```
<div class="order-card">
    <p>Maya</p>
    <ol>
        <li>Gender : female</li>
        <li>Age : 22</li>
        <li>Temperature : cold</li>
        <li>Order : Tea</li>
    </ol>
</div>
```

## Ex 5 update — events

The questions are asked with a **form** now instead of `prompt()`.

- `index.html` has a `<form id="orderForm">` with a text input for the name, a number input
  for the age, a select for the gender, a select for the order type, and two radio buttons
  for hot / cold.
- `app.js` listens for the form's `submit` event:

```js
let form = document.getElementById("orderForm");

form.addEventListener("submit", order);
```

- `order(event)` starts with `event.preventDefault()`. Without it the browser would reload
  the page when the form is submitted, and the order card would disappear immediately.
- The values are read with `.value` — and the chosen radio button with
  `document.querySelector("input[name='temperature']:checked").value`.
- The fields are marked `required`, so the browser blocks an empty submit on its own.

## Files

- `index.html` — hero section, the order form, and the `orderDetails` div
- `app.js` — the `order()`, `getGender()` and `showOrder()` functions
- `style.css` — cafe styling (brown palette, centred layout), the form, and the order card

## How to Run

1. Open `index.html` in a browser (or use the live URL above).
2. Fill in the form.
3. Click **Order Drink** and your order appears under the form.

No build step, no libraries.
