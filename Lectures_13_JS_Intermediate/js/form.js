// function to handle click event of button
function handleSubmitClick() {
    const inputElement = document.getElementById("userNameInput");
    const inputElementValue = inputElement.value;
    const userNameOutputDiv = document.getElementById("userNameOutput");
    userNameOutputDiv.innerText = `The user typed ${inputElementValue} in browser`;
}

const buttonId = document.querySelector("#submitButton");
// console.log(buttonId)
// buttonId.onclick = handleSubmitClick;
// buttonId.addEventListener("click", handleSubmitClick);
