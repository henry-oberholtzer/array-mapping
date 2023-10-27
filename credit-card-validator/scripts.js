//test value:
//const cardNum = "0998445533334452";
//test valid number = 4102080860435620. works. my MC doesn't?!
function strToArray(cardNum) {
    const cardArray = cardNum.split('');
    return arrayReverse(cardArray);
}
function arrayReverse(cardArray) {
    const reversedArray = cardArray.reverse();
    return arrayDouble(reversedArray);
}
function arrayDouble(reversedArray) {
    const doubledArray = reversedArray.map(function (element, index) {
        const num = parseInt(element);
        if (index % 2 === 0) {
            return num * 2;
        } else {
            return num;
        }
    });
    return toSingleDigit(doubledArray);
}
function toSingleDigit(doubledArray) {
    const singleDigitArray = [];
    doubledArray.forEach(function (number) {
        if (number > 9) {
            let strNum = number.toString();
            const strNumArray = strNum.split('');
            let sumVariable = 0;
            strNumArray.forEach(function (num) {
                let makeInt = parseInt(num)
                sumVariable += makeInt;
            })
            singleDigitArray.push(sumVariable);
        } else {
            singleDigitArray.push(number);
        }
    });
    return arraySum(singleDigitArray);
}
function arraySum(singleDigitArray) {
    const summedDigit = singleDigitArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    return zeroCheck(summedDigit);
}
function zeroCheck(summedDigit) {
    let cardNum = document.getElementById("ccNum").value;
    const isZero = summedDigit % 10;
    if (isZero === 0) {
        return lengthVisaMastercardDiscover(cardNum);
    } else {
        return "Error, this is not a valid credit card number";
    };
}

function lengthVisaMastercardDiscover(cardNum) {
    const cardArray = cardNum.split('');
    if (cardArray.length === 15) {
        return firstDigit3(cardArray);
    } else if (cardArray.length === 16) {
        return firstDigit456(cardArray);
    } else {
        return "Error, wrong digit amount";
    }
}
function firstDigit3(cardArray) {
    if (cardArray[0] !== "3") {
        return null
    }
    if (cardArray[1] === "4" || cardArray[1] === "7") {
        return "AmEx"
    };
};
function firstDigit456(cardArray) {
    if (cardArray[0] === "4") {
        return "This is a Visa card."
    }
    if (cardArray[0] === "5") {
        return "This is a Master Card"
    }
    if (cardArray[0] === "6") {
        return "This is a Discover card."
    } else {
        return "Check your number; this is not a valid number."
    }
};
//UI LOGIC
function handleSelect(event) {
    event.preventDefault();
    let cardNum = document.getElementById("ccNum").value;
    let result = strToArray(cardNum);
    // if (zeroCheck()) {
    //     let result = 0
    // } else {
    //     let result = "Not a valid credit card number";
    // }
    const pElement = document.createElement("p");
    pElement.append(result);
    const div = document.getElementById("results");
    div.append(pElement);
}
window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", handleSelect);
});