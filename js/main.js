import { errorBanner } from "./errorMsg.js";
import { Modal } from "./modal.js";
import { invalidInput, calcBMI } from "./utils.js";

const submitValues = function (ev) {
    ev.preventDefault(); // keeps calcBtn from reloading the screen.
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if (invalidInput(weight) || invalidInput(height)) {
        errorBanner.show();
        return;
    }

    Modal.modalResultTxt.setHTML(calcBMI(weight, height).toFixed(2));
    Modal.open();
}

const calcBtn = document.getElementsByTagName("button")[0];
calcBtn.addEventListener("click", submitValues);
