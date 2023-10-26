const cardNum = "0998445533334452";

function strToArray(cardNum) {
    const cardArray = cardNum.split('');
    return arrayReverse(cardArray);
}

function arrayReverse(cardArray) {
    const reversedArray = cardArray.reverse();
    return arrayDouble(reversedArray);
}

function arrayDouble(reversedArray) {
    const doubledArray = reversedArray.map(function(element, index) {
        const num = parseInt(element);
        if(index % 2 === 0) {
            return num * 2;
        } else {
            return num;
        }
    });
    return doubledArray;
}

function toSingleDigit(doubledArray) {
    const singleDigitArray = [];
    doubledArray.forEach(function(number) {
        if (number > 9) {
            let strNum = number.toString();
            const strNumArray = strNum.split('');
            let sumVariable = 0;
            strNumArray.forEach(function(num) {
                let makeInt = parseInt(num)
                sumVariable += makeInt;
            })    
            singleDigitArray.push(sumVariable); 
        } else {
            singleDigitArray.push(number);
        }
    });
    return singleDigitArray;
}
