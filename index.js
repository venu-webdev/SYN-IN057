
// arrow function that returns true if interger is prime
const isPrime = (n) => {

    // if integer is <= 1 
    if (n <= 1) return false;

    // if integer is 2 or 3
    if (n <= 3) return true;

    // if integer divisible by 2 or 3
    if (n % 2 == 0 || n % 3 == 0) return false;

    // if integer divisible by 5 upto sqrt(n)
    i = 5;
    while (i * i <= n) {

        if (n % i == 0 || n % (i + 2) == 0) return false;

        i += 6;

    }

    return true;

}

// checking for prime
console.log(isPrime(13));
console.log(isPrime(20));
console.log(isPrime(83));