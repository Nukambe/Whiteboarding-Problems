function logBetween(min, max) {
    let cache = [];

    for (let i = min; i <= max; i++) {
        cache.push(i);
    }
    console.log(cache);
    return cache;
}
// logBetween(-1, 2);  // => [-1, 0, 1, 2]
// logBetween(14, 6);  // => []
// logBetween(4, 6);  // => [4, 5, 6]

function logBetweenStepper(min, max, step) {
    let cache = [];

    for (let i = min; i <= max; i += step) {
        cache.push(i);
    }
    console.log(cache);
    return cache;
}
// logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
// logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]

function printReverse(min, max) {
    let cache = [];

    for (let i = max - 1; i > min; i--) {
        cache.push(i);
    }
    console.log(cache);
    return cache;
}
// printReverse(13, 18) // => [17, 16, 15, 14]
// printReverse(90, 94) // => [93, 92, 91]

function fizzBuzz(max) {
    let cache = [];

    for (let i = 0; i < max; i++) {
        if (((i % 3 === 0) || (i % 5 === 0)) && !((i % 5 === 0) && (i % 3 === 0))) {
            cache.push(i);
        }
    }
    console.log(cache);
    return cache;
}
// fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]

function isPrime(number) {
    if ((number > 2) && (number % 2 === 0)) return false;
    for (let i = number - 1; i > 1; i--) {
        if (number % i === 0) return false;
    }
    return true;
}
// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(9));
// console.log(isPrime(2017));

function maxValue(array) {
    if (!array[0]) return null;

    console.log(array.reduce((max, num) => {
        if (num > max) return num;
        return max;
    }));
}
// maxValue([12, 6, 43, 2]);  // => 43
// maxValue([]);  // => null
// maxValue([-4, -10, 0.43]);  // => 0.43

function myIndexOf(array, target) {
    let found = -1;
    array.forEach((num, index) => {
        if (num === target) {
            found = index;
        }
    });
    return found;
}
// console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
// console.log(myIndexOf([5, 6, 7, 8], 2)); // => -1

function factorArray(array, number) {
    const result = [];

    for (const num of array) {
        if (number % num === 0) {
            result.push(num);
        }
    }
    console.log(result);
    return result;
}
// factorArray([2, 3, 4, 5, 6], 20) // => [2,4,5]
// factorArray([2, 3, 4, 5, 6], 35) // => [5]
// factorArray([10, 15, 20, 25], 5) // => []

function oddRange(end) {
    let cache = [];

    for (let i = 1; i <= end; i += 2) {
        cache.push(i);
    }
    console.log(cache);
    return cache;
}
// oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
// oddRange(6);  // => [ 1, 3, 5 ]

function reverseHyphenString(string) {
    console.log(string.split('-').reverse().join('-'));
}
// reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
// reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"

function intersect(arr1, arr2) {
    return arr1.filter((element) => arr2.includes(element));
}
// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
// console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []

function mirrorArray(array) {
    return array.concat(array.slice().reverse());
}

// console.log(mirrorArray([1, 2, 3]));
// // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(['a', 'b', 'c', 'd']));
//   // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

// Function to abbreviate words longer than 4 characters by removing vowels
function abbreviate(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const words = sentence.split(' ');

    const abbreviatedWords = words.map((word) => {
        if (word.length > 4) {
            return word
                .split('')
                .filter((char) => !vowels.includes(char))
                .join('');
        }
        return word;
    });

    return abbreviatedWords.join(' ');
}

// console.log(abbreviate('the bootcamp is fun')); // Output: 'the btcmp is fun'
// console.log(abbreviate('programming is fantastic')); // Output: 'prgrmmng is fntstc'
// console.log(abbreviate('hello world')); // Output: 'hll wrld'
// console.log(abbreviate('how are you')); // Output: 'how are you'

// Function to filter out names of people who have an age of 18 or higher
function adults(people) {
    return people.filter((person) => person.age >= 18).map((person) => person.name);
}

// let ppl = [
//     { name: 'John', age: 20 },
//     { name: 'Jim', age: 13 },
//     { name: 'Jane', age: 18 },
//     { name: 'Bob', age: 7 }
// ];

// console.log(adults(ppl)); // Output: [ 'John', 'Jane' ]

// Function to count scores for each person
function countScores(people) {
    const scoreCount = {};

    people.forEach((person) => {
        if (scoreCount.hasOwnProperty(person.name)) {
            scoreCount[person.name] += person.score;
        } else {
            scoreCount[person.name] = person.score;
        }
    });

    return scoreCount;
}

// ppl = [
//     { name: "Anthony", score: 10 },
//     { name: "Fred", score: 10 },
//     { name: "Anthony", score: -8 },
//     { name: "Winnie", score: 12 }
// ];

// console.log(countScores(ppl)); // Output: { Anthony: 2, Fred: 10, Winnie: 12 }

// const peeps = [
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 }
// ];

// console.log(countScores(peeps)); // Output: { Anthony: 4, Fred: 4, Winnie: 6 }

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Function to return the first n prime numbers
function firstNPrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

console.log(firstNPrimes(0)); // Output: []
console.log(firstNPrimes(1)); // Output: [2]
console.log(firstNPrimes(4)); // Output: [2, 3, 5, 7]

// Function to find the indices of peaks in an array
function peakFinder(array) {
    const peaks = [];

    for (let i = 0; i < array.length; i++) {
        if (
            (i === 0 && array[i] > array[i + 1]) ||
            (i === array.length - 1 && array[i] > array[i - 1]) ||
            (array[i] > array[i - 1] && array[i] > array[i + 1])
        ) {
            peaks.push(i);
        }
    }

    return peaks;
}

console.log(peakFinder([1, 2, 3, 2, 1])); // Output: [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // Output: [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // Output: [2, 6, 8]

// Function to find pairs of indices whose elements sum to a multiple of three
function divisibleByThreePairSum(array) {
    const pairs = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % 3 === 0) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
}

let arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1); // Output: [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

let arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2); // Output: [[1, 3]]

// Function to zip two arrays together
function zipArray(arr1, arr2) {
    const zippedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        zippedArray.push([arr1[i], arr2[i]]);
    }

    return zippedArray;
}

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // Output: [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

// Function to calculate the total sum of elements in a 2D array
function twoDimensionalTotal(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            total += array[i][j];
        }
    }

    return total;
}

arr1 = [
    [5, 2, 5, 3],
    [12, 13],
];

console.log(twoDimensionalTotal(arr1)); // Output: 40

arr1 = [
    [2],
    [1, 9],
    [1, 1, 1]
];

console.log(twoDimensionalTotal(arr2)); // Output: 15

// Function to count occurrences of elements in a 2D array
function countInnerElement(arr) {
    const count = {};

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const element = arr[i][j];
            if (count.hasOwnProperty(element)) {
                count[element] += 1;
            } else {
                count[element] = 1;
            }
        }
    }

    return count;
}

arr1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
];

console.log(countInnerElement(arr1)); // Output: {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

arr2 = [
    ['a', 'b', 'c', 'd'],
    ['a', 'b'],
    ['a', 'c', 'd', 'a']
];

console.log(countInnerElement(arr2)); // Output: {a: 4, b: 2, c: 2, d: 2}

// Function to find pairs of indices where the difference between the numbers is 2
function twoDiff(array) {
    const pairs = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (Math.abs(array[i] - array[j]) === 2) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
}

console.log(twoDiff([2, 3, 4, 6, 1, 7])); // Output: [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5])); // Output: [[0, 1], [1, 2], [3, 4]]
console.log(twoDiff([])); // Output: []

// Function to return elements from arr1 that are not in arr2
function arrayDiff(arr1, arr2) {
    const diff = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            diff.push(arr1[i]);
        }
    }

    return diff;
}

let array1 = [1, 23, 2, 43, 3, 4];
let array2 = [3, 23];

console.log(arrayDiff(array1, array2)); // Output: [1, 2, 43, 4]

const array3 = ['a', 'ab', 'c', 'd', 'c'];
const array4 = ['d'];

console.log(arrayDiff(array3, array4)); // Output: ['a', 'ab', 'c', 'c']

// Function to count the number of times a value repeats in an object
function valueCounter(obj, val) {
    let count = 0;

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === val) {
            count++;
        }
    }

    return count;
}

let obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' };

console.log(valueCounter(obj1, 'Anne')); // Output: 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };

console.log(valueCounter(obj2, 88)); // Output: 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' };

console.log(valueCounter(pairs, 'Roman')); // Output: 2

// Function to count the occurrences of elements in an array
function elementCount(array) {
    const count = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (count.hasOwnProperty(element)) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    return count;
}

console.log(elementCount(["a", "a", "b", "b"])); // Output: { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // Output: { "c": 2, "a": 2, "b": 1 }

// Function to find the next two prime numbers greater than a given number
function nextTwoPrimes(num) {
    const primes = [];

    function isPrime(n) {
        if (n < 2) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    let currentNum = num + 1;

    while (primes.length < 2) {
        if (isPrime(currentNum)) {
            primes.push(currentNum);
        }
        currentNum++;
    }

    return primes;
}

console.log(nextTwoPrimes(2)); // Output: [ 3, 5 ]
console.log(nextTwoPrimes(3)); // Output: [ 5, 7 ]
console.log(nextTwoPrimes(7)); // Output: [ 11, 13 ]
console.log(nextTwoPrimes(8)); // Output: [ 11, 13 ]
console.log(nextTwoPrimes(20)); // Output: [ 23, 29 ]
console.log(nextTwoPrimes(97)); // Output: [ 101, 103 ]

// Function to find pairs of indices whose elements multiply to a target number
function pairProduct(arr, num) {
    const pairs = [];
    let i = 0;

    while (i < arr.length) {
        let j = i + 1;

        while (j < arr.length) {
            if (arr[i] * arr[j] === num) {
                pairs.push([i, j]);
            }
            j++;
        }

        i++;
    }

    return pairs;
}

console.log(pairProduct([1, 2, 3, 4, 5], 4)); // Output: [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // Output: [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // Output: [ [ 1, 3 ], [ 2, 4 ] ]

// Function to calculate the total number of elements in a 2D array
function twoDimensionalSize(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        count += array[i].length;
    }

    return count;
}

arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

console.log(twoDimensionalSize(arr1)); // Output: 9

arr2 = [
    ['a'],
    ['b', 'c', 'd', 'e']
];

console.log(twoDimensionalSize(arr2)); // Output: 5

// Function to count the number of words longer than 7 characters in a string
function longWordCount(string) {
    const words = string.split(' ');
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 7) {
            count++;
        }
    }

    return count;
}

console.log(longWordCount("")); // Output: 0
console.log(longWordCount("short words only")); // Output: 0
console.log(longWordCount("one reallylong word")); // Output: 1
console.log(longWordCount("two reallylong words inthisstring")); // Output: 2
console.log(longWordCount("allwordword longwordword wordswordword")); // Output: 3
console.log(longWordCount("seventy schfifty five")); // Output: 1

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(1)); // Output: 1
console.log(factorial(4)); // Output: 24
console.log(factorial(5)); // Output: 120
console.log(factorial(10)); // Output: 3628800

// Function to calculate the least common multiple (LCM) of two numbers
function lcm(num1, num2) {
    const max = Math.max(num1, num2);
    let lcm = max;

    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            break;
        }
        lcm += max;
    }

    return lcm;
}

console.log(lcm(2, 3)); // Output: 6
console.log(lcm(6, 10)); // Output: 30
console.log(lcm(24, 26)); // Output: 312

// Function to remove the last vowel from a word
function hipsterfyWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lastVowelIndex = -1;

    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i].toLowerCase())) {
            lastVowelIndex = i;
            break;
        }
    }

    if (lastVowelIndex !== -1) {
        return word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);
    }

    return word;
}

console.log(hipsterfyWord('proper')); // Output: 'propr'
console.log(hipsterfyWord('tonic')); // Output: 'tonc'
console.log(hipsterfyWord('PANTHER')); // Output: 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')); // Output: 'BACKWRDS'

// Function to hipsterfy a sentence by removing the last vowel from each word
function hipsterfy(sentence) {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = hipsterfyWord(words[i]);
    }

    return words.join(' ');
}

console.log(hipsterfy("proper")); // Output: "propr"
console.log(hipsterfy("proper tonic panther")); // Output: "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // Output: "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // Output: "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // Output: "turtl cheeseburgr fris"

// Function to convert a char count object to a string representation
function objectToString(count) {
    let str = '';

    for (const char in count) {
        if (count.hasOwnProperty(char)) {
            const occurrences = count[char];
            str += char.repeat(occurrences);
        }
    }

    return str;
}

console.log(objectToString({ a: 2, b: 4, c: 1 })); // Output: 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })); // Output: 'boot'

// Function to find the shortest word in a sentence
function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    return shortest;
}

console.log(shortestWord('app academy is cool')); // Output: 'is'
console.log(shortestWord('programming bootcamp')); // Output: 'bootcamp'

// Function to find the greatest common factor (GCF) of two numbers
function greatestCommonFactor(num1, num2) {
    let gcf = 1;
    const smallerNum = Math.min(num1, num2);

    for (let i = 2; i <= smallerNum; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcf = i;
        }
    }

    return gcf;
}

console.log(greatestCommonFactor(15, 25)); // Output: 5
console.log(greatestCommonFactor(16, 24)); // Output: 8
console.log(greatestCommonFactor(7, 11)); // Output: 1

// Function to check if the average assessment score is passing (at least 70)
function isPassing(assessments) {
    if (assessments.length === 0) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < assessments.length; i++) {
        sum += assessments[i].score;
    }

    const average = sum / assessments.length;

    return average >= 70;
}

const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
];

console.log(isPassing(assessments1)); // Output: true

const assessments2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 }
];

console.log(isPassing(assessments2)); // Output: false

// Function to concatenate array elements with their corresponding values from an object
function valueConcat(array, obj) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (obj.hasOwnProperty(element)) {
            newArray.push(element + obj[element]);
        } else {
            newArray.push(element);
        }
    }

    return newArray;
}

arr1 = ['alex', 'maurice', 'meagan', 'ali'];
obj1 = { alex: 'bronca', ali: 'harris' };

console.log(valueConcat(arr1, obj1)); // Output: [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })); // Output: [ 'a', 'b2', 'c3' ]

// Function to check if the array contains three consecutive numbers that are the same
function threeInARow(arr) {
    for (let i = 0; i <= arr.length - 3; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            return true;
        }
    }

    return false;
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // Output: true
console.log(threeInARow([10, 9, 20, 33, 3, 3])); // Output: false

// Function to convert an array of words into a mixCased variable name
function variableNameify(words) {
    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join('');
}

console.log(variableNameify(['is', 'prime'])); // Output: 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])); // Output: 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])); // Output: 'maxValue'

// Function to check if an array contains three consecutive numbers in increasing order
function threeIncreasing(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i] + 2) {
            return true;
        }
    }

    return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // Output: true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // Output: false

// Function to reverse the elements of a 2D array and return a string representation
function reverse2D(array) {
    let reversedString = '';

    for (let i = array.length - 1; i >= 0; i--) {
        const innerArray = array[i];
        const reversedInnerArray = innerArray.reverse();
        reversedString += reversedInnerArray.join('');
    }

    return reversedString;
}

arr1 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
];

console.log(reverse2D(arr1)); // Output: 'ihgfedcba'

arr2 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
];

console.log(reverse2D(arr2)); // Output: 'PatrickOscarMikeMattJulian'

// Function to add the characters after the last vowel to the word
function reverb(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lastVowelIndex = -1;

    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            lastVowelIndex = i;
            break;
        }
    }

    if (lastVowelIndex !== -1) {
        const repeatedCharacters = word.slice(lastVowelIndex + 1).repeat(2);
        return word + repeatedCharacters;
    } else {
        return word;
    }
}

console.log(reverb('running')); // Output: 'runninging'
console.log(reverb('wild')); // Output: 'wildild'
console.log(reverb('debugged')); // Output: 'debuggeded'
console.log(reverb('my')); // Output: 'my'

// Function to count the number of letters that appear more than once in a string
function countRepeats(string) {
    const letterCount = {};

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (letterCount[char]) {
            letterCount[char] += 1;
        } else {
            letterCount[char] = 1;
        }
    }

    let count = 0;

    for (const char in letterCount) {
        if (letterCount[char] > 1) {
            count++;
        }
    }

    return count;
}

console.log(countRepeats('calvin')); // Output: 0
console.log(countRepeats('caaaalvin')); // Output: 1
console.log(countRepeats('pops')); // Output: 1
console.log(countRepeats('mississippi')); // Output: 3
console.log(countRepeats('hellobootcampprep')); // Output: 4

// Function to convert an array of pairs into a string
function pairsToString(arr) {
    let string = '';

    for (let i = 0; i < arr.length; i++) {
        const pair = arr[i];
        const char = pair[0];
        const count = pair[1];
        string += char.repeat(count);
    }

    return string;
}

array1 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
];

console.log(pairsToString(array1)); // Output: 'aaabcc'

array2 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
];

console.log(pairsToString(array2)); // Output: 'food!'

// Function to count the number of times that two adjacent numbers in an array add up to n
function countAdjacentSums(arr, n) {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }

    return count;
}

console.log(countAdjacentSums([1, 5, 1], 6)); // Output: 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // Output: 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // Output: 3

// Function to count the number of times adjacent numbers in the array switch signs
function signFlipCount(nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] >= 0 && nums[i + 1] < 0) || (nums[i] < 0 && nums[i + 1] >= 0)) {
            count++;
        }
    }

    return count;
}

console.log(signFlipCount([5, 6, 10, 3])); // Output: 0
console.log(signFlipCount([-12, 0, -3, -5])); // Output: 0
console.log(signFlipCount([-12, 10, -3, -5])); // Output: 2
console.log(signFlipCount([1, -2, -3, -4])); // Output: 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // Output: 3

// Function to generate a power sequence with the given base and length
function powerSequence(base, length) {
    const result = [base];

    for (let i = 1; i < length; i++) {
        const previousNumber = result[i - 1];
        const nextNumber = previousNumber * base;
        result.push(nextNumber);
    }

    return result;
}

console.log(powerSequence(3, 4)); // Output: [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6)); // Output: [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3)); // Output: [ 8, 64, 512 ]

// Function to collapse streaks of consecutive characters in a string
function collapseString(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === str[i + 1]) {
            continue;
        }

        result += char;
    }

    return result;
}

console.log(collapseString('apple')); // Output: 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // Output: 'Aalvin!'
console.log(collapseString('hello   app academy')); // Output: 'helo ap academy'

// Function to remove words with an odd number of characters from a sentence
function oddWordsOut(sentence) {
    const words = sentence.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.length % 2 === 0) {
            result += word + ' ';
        }
    }

    return result.trim();
}

console.log(oddWordsOut('go to the store and buy milk')); // Output: 'go to milk'
console.log(oddWordsOut('what is the answer')); // Output: 'what is answer'

// Function to find the length of the longest consecutive streak of 'P' and 'Q' in a string
function mindPsAndQs(str) {
    let currentStreak = 0;
    let longestStreak = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === 'P' || char === 'Q') {
            currentStreak++;

            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
    }

    return longestStreak;
}

console.log(mindPsAndQs('BOOTCAMP')); // Output: 1
console.log(mindPsAndQs('APCDQQPPC')); // Output: 4
console.log(mindPsAndQs('PQPQ')); // Output: 4
console.log(mindPsAndQs('PPPXQPPPQ')); // Output: 5

// Function to find the common factors between two numbers
function commonFactors(num1, num2) {
    const factors1 = findFactors(num1);
    const factors2 = findFactors(num2);
    const commonFactors = [];

    for (const factor of factors1) {
        if (factors2.includes(factor)) {
            commonFactors.push(factor);
        }
    }

    return commonFactors;
}

// Helper function to find the factors of a number
function findFactors(num) {
    const factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

console.log(commonFactors(12, 50)); // Output: [1, 2]
console.log(commonFactors(6, 24)); // Output: [1, 2, 3, 6]
console.log(commonFactors(11, 22)); // Output: [1, 11]
console.log(commonFactors(45, 60)); // Output: [1, 3, 5, 15]

// Function to find the common prime factors between two numbers
function commonPrimeFactors(num1, num2) {
    const primeFactors1 = findPrimeFactors(num1);
    const primeFactors2 = findPrimeFactors(num2);
    const commonPrimeFactors = [];

    for (const factor of primeFactors1) {
        if (primeFactors2.includes(factor)) {
            commonPrimeFactors.push(factor);
        }
    }

    return commonPrimeFactors;
}

// Helper function to find the prime factors of a number
function findPrimeFactors(num) {
    const primeFactors = [];

    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num /= i;
        }
    }

    return primeFactors;
}

console.log(commonPrimeFactors(12, 50)); // Output: [2]
console.log(commonPrimeFactors(6, 24)); // Output: [2, 3]
console.log(commonPrimeFactors(11, 22)); // Output: [11]
console.log(commonPrimeFactors(45, 60)); // Output: [3, 5]

// Function to split an array into two halves, excluding the middle element if the array length is odd
function splitHalfArray(array) {
    const middleIndex = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middleIndex);
    const secondHalf = array.slice(middleIndex + (array.length % 2));

    return [firstHalf, secondHalf];
}

console.log(splitHalfArray([1, 2, 3, 4, 5])); // Output: [[1, 2], [4, 5]]
console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f'])); // Output: [['a', 'b', 'c'], ['d', 'e', 'f']]

// Function to check if a string contains at least three different vowels
function threeUniqueVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const uniqueVowels = [];

    for (let i = 0; i < string.length; i++) {
        const char = string[i].toLowerCase();

        if (vowels.includes(char) && !uniqueVowels.includes(char)) {
            uniqueVowels.push(char);

            if (uniqueVowels.length === 3) {
                return true;
            }
        }
    }

    return false;
}

console.log(threeUniqueVowels('delicious')); // Output: true
console.log(threeUniqueVowels('the bootcamp')); // Output: true
console.log(threeUniqueVowels('bootcamp')); // Output: false
console.log(threeUniqueVowels('dog')); // Output: false
console.log(threeUniqueVowels('go home')); // Output: false

// Function to replace every vowel in a sentence with the next vowel in the alphabet
function vowelShift(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return sentence
        .split('')
        .map((char) => {
            if (vowels.includes(char)) {
                const vowelIndex = vowels.indexOf(char);
                const nextVowelIndex = (vowelIndex + 1) % vowels.length;
                return vowels[nextVowelIndex];
            } else {
                return char;
            }
        })
        .join('');
}

console.log(vowelShift('bootcamp')); // Output: 'buutcemp'
console.log(vowelShift('hello world')); // Output: 'hillu wurld'
console.log(vowelShift('on the hunt')); // Output: 'un thi hant'

// Function to check if an array has symmetry
function hasSymmetry(array) {
    const length = array.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (array[i] !== array[length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // Output: true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // Output: false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // Output: true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // Output: false

// Function to replace each number with the sum of all even numbers less than or equal to that number
function evenSumArray(array) {
    return array.map((num) => {
        let sum = 0;
        for (let i = 2; i <= num; i += 2) {
            sum += i;
        }
        return sum;
    });
}

console.log(evenSumArray([6, 7, 5])); // Output: [12, 12, 6]
console.log(evenSumArray([2, 8, 3, 5])); // Output: [2, 20, 2, 6]

// Function to replace each digit character with its "word" representation
function numsToWords(numString) {
    const digitWords = {
        '0': 'Zero',
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
    };

    return numString
        .split('')
        .map((char) => digitWords[char])
        .join('');
}

console.log(numsToWords('42')); // Output: 'FourTwo'
console.log(numsToWords('123')); // Output: 'OneTwoThree'
console.log(numsToWords('159598')); // Output: 'OneFiveNineFiveNineEight'

// Function to check if a string contains more dots ('.') than dashes ('-')
function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            dotCount++;
        } else if (str[i] === '-') {
            dashCount++;
        }
    }

    return dotCount > dashCount;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.')); // Output: true
console.log(moreDotLessDash('.-.-.')); // Output: true
console.log(moreDotLessDash('.-')); // Output: false
console.log(moreDotLessDash('..--')); // Output: false
