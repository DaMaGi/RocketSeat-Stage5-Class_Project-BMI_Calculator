export const invalidInput = (inp) => {
    return (isNaN(inp) || inp == "");
}

export const calcBMI = function (weight, height) {
    return (weight / (height / 100) ** 2)
}