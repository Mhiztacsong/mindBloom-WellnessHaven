document.addEventListener("DOMContentLoaded", () => {
    const dialogBox = document.getElementById("dialog-box");
    const dialogText = document.getElementById("dialog-text");
    const dialogImage = document.getElementById("dialog-image")
    const closeModal = document.querySelector(".close");
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            dialogText.textContent = button.getAttribute("data-info");
            dialogImage.src = button.getAttribute("data-image");
            dialogBox.showModal()
        });
    });

    closeModal.addEventListener("click", () => {
        dialogBox.close();
    });

    window.addEventListener("click", (event) => {
        if (event.target === dialogBox) {
            dialogBox.close();
        }
    });
});