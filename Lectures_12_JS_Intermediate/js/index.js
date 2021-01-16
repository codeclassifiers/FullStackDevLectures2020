// Iterate over array in JSONs
const userDetails = {
    'name': 'Jane Doe',
    'age': 12,
    'hobbies': ['Writing', 'Dancing', 'Coding']
}

const hobbiesArray = userDetails.hobbies;
// console.log(userDetails.hobbies[2]);

// for(let hobbyIndex in hobbiesArray) {
//     console.log(hobbyIndex, hobbiesArray[hobbyIndex])
// }

// for(let userDetailKey in userDetails) {
//     console.log(userDetailKey, userDetails[userDetailKey]);
// }


// setTimeOut method
function wakeUpUser(firstName, lastName) {
    console.log(`Wake up the user ${firstName} ${lastName}`);
}
// wakeUpUser("Dave", "Sampson");
// setTimeout(functionName, delay, parameters)
// const wakingUpLogic = setTimeout(wakeUpUser, 2000, "John", "Doe");
// clearTimeout(wakingUpLogic, 1000);

// setInterval method

// function incrementSeconds() {
//     if(seconds > 0) {
//         --seconds;
//         console.log(`The current value of seconds is: ${seconds}`);
//     } else {
//         seconds = 5;
//     } 
// }

// setInterval(functionName, delay, parameter)

// let seconds = 5;
// let d = new Date();
// console.log(d.toLocaleTimeString());
// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     console.log(t);
// }
// // myTimer();
// const timerPrinter = setInterval(myTimer, 2000);

// setTimeout(function() {
//     clearInterval(timerPrinter);
// }, 5000);


// DOM manipulation in Javascript
const timerDiv = document.getElementById("timer");

function myTimer() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        timerDiv.innerText = `The current time is ${t}`;
}

// const timerPrinter = setInterval(myTimer, 1000);



// Iterate over a JSON array
const fruitsArray = ['apple', 'oranges'];
const fruitsJSONArray = [
    {
        'name': 'apple',
        'pricePerKg': 200,
        'source': 'Mumbai' 
    },
    {
        'name': 'oranges',
        'pricePerKg': 150,
        'source': 'Nashik'
    }
];

const fruitSource = fruitsJSONArray[1].source;
const sourceDiv = document.getElementById("fruitsource");
console.log(fruitSource, sourceDiv);
sourceDiv.innerHTML = fruitSource;

const userDataFromServer = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "hobbies": ["cycling", "trekking"]
    },
];

const name = userDataFromServer[1].name;
const city = userDataFromServer[1].address.city;
const userDetailsDiv = document.getElementById("userDetail");
console.log(name, city);
// name lives in city
userDetailsDiv.innerHTML = `${name} lives in ${city}`;


