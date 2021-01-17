
// console.log(document.getElementById("userData"));
// console.log(document.querySelector("#userData"))
// console.log(document.querySelector(".user-data-class"));


// console.log("1st statement");
// console.log("2st statement");
// console.log("3st statement");   

// fetch API implementation using async await 
const userDataDiv = document.querySelector("#userData");
async function fetchUserData() {
    const userDataRequest = await fetch("https://randomuser.me/api/?results=1");
    let userDataJSON = await userDataRequest.json();
    const firstName = userDataJSON.results[0].name.first;
    userDataDiv.innerText = firstName;
}
fetchUserData()

console.log("4st statement");   

