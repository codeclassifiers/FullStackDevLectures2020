// Regular/Vanilla javascript
// document.getElementById("root").innerText = "Sample text";
// document.querySelector(".root-class").innerHTML = "<p>Sample text</p>";

function openAlert() {
  alert("Hello World");
}
const buttonElement = document.getElementById("open-alert");
buttonElement.addEventListener("click", openAlert);

// Jquery
// $("#root").text("Sample text");
$(".root-class").html("<h1>Sample text</h1>");
// console.log($("#open-alert"));
// $("#open-alert").on("click", openAlert);

// String
const studentName = "basant";
const name = `${studentName} is a student`;
