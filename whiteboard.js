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
factorArray([2, 3, 4, 5, 6], 20) // => [2,4,5]
factorArray([2, 3, 4, 5, 6], 35) // => [5]
factorArray([10, 15, 20, 25], 5) // => []

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
