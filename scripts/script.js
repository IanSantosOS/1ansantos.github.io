const textElement = document.querySelectorAll(".change-color");

function updateTextColor(element) {
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    const isBackgroundBlack = backgroundColor === "#212121";

    if (isBackgroundBlack) {
        element.style.color = "#000";
    } else {
        element.style.color = "#fff";
    }
}

// Initial call to set the correct text color based on initial background
textElement.forEach(element => {
    updateTextColor(element);
});

// Call the function whenever the window is resized
window.addEventListener("resize", updateTextColor);