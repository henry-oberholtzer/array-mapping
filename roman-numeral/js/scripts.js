// function lessThan4 {
//     let 1 = ["i"];
//     if lessThan4 < [4] 
inputNum = 4
let I = 1
answer = ''

function makeI(inputNum) {
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
function makeX(inputNum) {
    const I = "I";
    const V = "V";
    const X = "X";
    if (inputNum === 9) {
        return I + X;
    } else if (inputNum === 10) {
        return X;
    } else if (inputNum < 14) {
        return X + I.repeat(inputNum % 10) 
    } else if (inputNum === 14) {
        return XIV;
    } else if (inputNum < 19) {
        return X + V + I.repeat(inputNum % 5)
    }
}