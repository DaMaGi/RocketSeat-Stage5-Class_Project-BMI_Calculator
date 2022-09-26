export const Modal = {
    modalNode: document.getElementsByClassName("modalContainer")[0],
    closeBtn: document.querySelector("modal-text img"),
    modalResultTxt: document.querySelector("modal-text span"),
    // open() and close() are both methods, just written with alternative syntaxes.
    open: function() {
        this.modalNode.style.display = "grid";
    },
    close() {
        this.modalNode.style.display = "none";
    }
}

Modal.closeBtn.addEventListener("click", () => Modal.close());

document.addEventListener("keydown", ev => {
    if (ev.key === "Escape") {
        Modal.close();
    }
});
