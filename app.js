// Ex 3: the gender question is now its own function

function getGender() {

    let gender = prompt("Enter your gender (male/female):");

    return gender;

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

}