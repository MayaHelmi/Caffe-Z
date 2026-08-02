// Ex 3: the gender question is still its own function, it just reads the form now

function getGender() {

    let gender = document.getElementById("gender").value;

    return gender;

}


// Ex 4: build the order details with the DOM and write them back to the page

function showOrder(name, age, gender, orderType, temperature) {

    let container = document.getElementById("orderDetails");

    container.innerHTML = "";

    let greeting = document.createElement("p");
    greeting.className = "greeting";

    if (gender == "male") {
        greeting.textContent = "Welcome Mr " + name;
    }

    else if (gender == "female") {
        greeting.textContent = "Welcome Ms " + name;
    }

    else {
        greeting.textContent = "Welcome " + name;
    }

    container.appendChild(greeting);

    let div = document.createElement("div");
    div.className = "order-card";

    let paragraph = document.createElement("p");
    paragraph.textContent = name;
    div.appendChild(paragraph);

    let list = document.createElement("ol");

    let genderItem = document.createElement("li");
    genderItem.textContent = "Gender : " + gender;
    list.appendChild(genderItem);

    let ageItem = document.createElement("li");
    ageItem.textContent = "Age : " + age;
    list.appendChild(ageItem);

    let temperatureItem = document.createElement("li");
    temperatureItem.textContent = "Temperature : " + temperature;
    list.appendChild(temperatureItem);

    let orderItem = document.createElement("li");
    orderItem.textContent = "Order : " + orderType;
    list.appendChild(orderItem);

    div.appendChild(list);

    container.appendChild(div);

}


// Ex 5: the answers come from the form now, so we listen for the submit event

function order(event) {

    event.preventDefault(); // stop the browser from reloading the page

    let name = document.getElementById("username").value;

    let age = document.getElementById("age").value;

    let gender = getGender();

    let orderType = document.getElementById("orderType").value;

    let temperature = document.querySelector("input[name='temperature']:checked").value;

    console.log(name + " ordered a " + temperature + " " + orderType);

    showOrder(name, age, gender, orderType, temperature);

}


let form = document.getElementById("orderForm");

form.addEventListener("submit", order); // run order() when the form is submitted
