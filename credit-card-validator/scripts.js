const cardNum = "0998445533334452";

function strToArray(cardNum) {
    const cardArray = cardNum.split('');
    arrayReverse(cardArray);
}

function arrayReverse(cardArray) {
    const reversedArray = cardArray.reverse();
    return reversedArray;
}

function arrayDouble(reversedArray) {
    const doubledArray = reversedArray.map(function(element, index) {
        const num = parseInt(element);
        if(index % 2 === 0) {
            return num * 2;
        } else {
            return 0;
        }
    });
}