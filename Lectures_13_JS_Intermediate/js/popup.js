// alert("Hello User");

const buttonElement = document.querySelector("#popUpOpenButton");

function handlePopUpButtonClick() {
    const modalPopupContainer = document.getElementById("modalContainer");
    console.log(modalPopupContainer);
    modalPopupContainer.style.display = "flex";
}

buttonElement.onclick = handlePopUpButtonClick;

const closeButtonElement = document.querySelector(".close-button");

function handleCloseButtonClick() {
    const modalPopupContainer = document.getElementById("modalContainer");
    console.log(modalPopupContainer);
    modalPopupContainer.style.display = "none";
}

closeButtonElement.onclick = handleCloseButtonClick;