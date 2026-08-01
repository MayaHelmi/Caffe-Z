// Ex 3: the gender question is now its own function

function getGender() {

    let gender = prompt("Enter your gender (male/female):");

    return gender;

}


// Ex 4: build the order details with the DOM and write them back to the page
// div > p > ol > li

function showOrder(name, gender, temperature, drink) {

    let container = document.getElementById("orderDetails");

    container.innerHTML = ""; // clear the previous order first

    let div = document.createElement("div");
    div.className = "order-card";

    let paragraph = document.createElement("p");
    paragraph.textContent = name;
    div.appendChild(paragraph);

    let list = document.createElement("ol");

    let genderItem = document.createElement("li");
    genderItem.textContent = "Gender : " + gender;
    list.appendChild(genderItem);

    let temperatureItem = document.createElement("li");
    temperatureItem.textContent = "Temperature : " + temperature;
    list.appendChild(temperatureItem);

    let drinkItem = document.createElement("li");
    drinkItem.textContent = "Order : " + drink;
    list.appendChild(drinkItem);

    div.appendChild(list);

    container.appendChild(div);

}


function order() {

    let name = prompt("Enter your name:");

    let gender = getGender(); // calling the gender function in the proper place

    if (gender == "male") {
        alert("Welcome Mr " + name);
    } 
    
    else if (gender == "female") {
        alert("Welcome Ms " + name);
    } 
    
    else {
        alert("Welcome " + name);
    }

    let temperature = prompt("Do you want hot or cold drink?");

    let drink = prompt("What drink do you want?");

    alert("Your " + temperature + " " + drink + " is getting prepared");

    console.log(name + " ordered a " + temperature + " " + drink);

    showOrder(name, gender, temperature, drink); // write the inputs to the html page

}