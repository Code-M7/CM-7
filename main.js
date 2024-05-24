function showContent(buttonElement) {
    const hiddenContent = buttonElement.parentElement.nextElementSibling;

    if (hiddenContent.style.height === "10rem") {
        hiddenContent.style.height = "0";
        buttonElement.style.transform = "rotate(0deg)";
    } else {
        hiddenContent.style.height = "10rem";
        buttonElement.style.transform = "rotate(90deg)";
    }
}
function showContentTwo(buttonElement) {
    const hiddenContent = buttonElement.parentElement.nextElementSibling;

    if (hiddenContent.style.height === "10rem") {
        hiddenContent.style.height = "0";
        buttonElement.style.transform = "rotate(180deg)";
    } else {
        hiddenContent.style.height = "10rem";
        buttonElement.style.transform = "rotate(90deg)";
    }
}