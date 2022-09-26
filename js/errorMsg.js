export const errorBanner = {
    show() {
        document.querySelector(".errorMsg").classList.add("errorAnimation");
        setTimeout(function () {
            document.querySelector(".errorMsg").classList.remove("errorAnimation");
        }, 2000);
    }
}