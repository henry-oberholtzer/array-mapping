# Credit Card Validator
By Henry Oberholtzer, Kim Robinson & Grant Abel

##### Describe strToArray()
Takes a string of numbers and splits into an array
Code: strToArray(0998445533334452)
Result: [0, 9, 9, 8, 4, 4, 5, 5, 3, 3, 3, 3, 4, 4, 5, 2]

##### Describe arrayReverse()
Takes an array and reverses it
Code: arrayReverse([2, 3, 4])
Result: [4, 3, 2]

##### Describe arrayDouble()
Takes an array and doubles every other number, starting with index 0
Code: arrayDouble([0, 3, 6])
Result: [0, 3, 12]

##### Describe toSingleDigit()
Takes any number over nine in an array, and sums each value to a single digit
Code: toSingleDigit([3, 16, 5, 10])
Result: [3, 7, 5, 1]

##### Describe arraySum()
Takes an array and sums all numbers in the array
Code: arraySum([3, 7, 5, 1])
Result: 16

##### Describe zeroCheck()
Takes a digit and checks if last value is 0;
Code: zeroCheck(50);
Result: true

## Further Checks

##### Describe lengthVisaMastercardDiscover()
Checks if length is 16 or 15
Code: lengthValidate(4102080860435620)

##### Describe firstDigit3()
If length is 15 chars, checks if first digits are 34 or 37 and returns CC company.
Code: firstDigits(4102080860435620)
Result: "American Express"

##### Describe firstDigit456()
If length is 16 digits, checks if first digit is 4, 5, or 6 and returns corresponding CC company.
Code: firstDigit456(4102080860435620)
Result: "Visa"



