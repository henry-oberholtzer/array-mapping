function make1to8(inputNum) {
    const I = "I";
    const V = "V"
    if (inputNum < 4) {
        return I.repeat(inputNum)
    } else if (inputNum === 4) {
        return I + V;
    } else if (inputNum < 9) {
        return V + I.repeat(inputNum % 5)
    }
}
// currently working 9-39!!!
function make9to19(inputNum) {
    const X = "X";
    if (inputNum > 30) {
        return "XX" + make9to19(inputNum % 20)
    } else if (inputNum === 30) {
        return "XXX"
    } else if (inputNum > 20) {
        return "X" + make9to19(inputNum % 20)
    } else if (inputNum === 20) {
        return "X" + make9to19(inputNum / 2)
    } else if (inputNum === 9) {
        return "IX";
    } else if (inputNum % 10 < 9) {
        return X + make1to8(inputNum % 10)
    } else if (inputNum % 10 === 9) {
        return X + make9to19(inputNum % 10)
    }
}