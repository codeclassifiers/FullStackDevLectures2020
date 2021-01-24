// Get the button that opens the modal
const buttonElement = document.querySelector("#popUpOpenButton");

// When the user clicks on the button, open the modal
function handlePopUpButtonClick() {
    const modalPopupContainer = document.getElementById("modalContainer");
    console.log(modalPopupContainer);
    modalPopupContainer.style.display = "flex";
}

buttonElement.onclick = handlePopUpButtonClick;

// When the user clicks on <span> (x), close the modal
const closeButtonElement = document.querySelector(".close-button");

function handleCloseButtonClick() {
    const modalPopupContainer = document.getElementById("modalContainer");
    console.log(modalPopupContainer);
    modalPopupContainer.style.display = "none";
}

closeButtonElement.onclick = handleCloseButtonClick;