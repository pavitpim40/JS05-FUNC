// test push , feedback branch
// update solution

// Define
function soundOfBird() {
    console.log('เสียงงง นกกรงหัวจุกมันริก');
    console.log('จก ');
    for (let i = 1; i <= 11; i++) {
        console.log('กวิ๊ก');
    }
}

// Call
// soundOfBird();

// soundOfBird();

// soundOfBird();

// soundOfBird();

// soundOfBird();

function isPrime(n) {
    // let n = 5;
    let isPrime = true;
    for (let divider = 2; divider < n; divider++) {
        if (n % divider == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(n);
}

isPrime(5);
isPrime(7);
isPrime(13);
isPrime(17);
isPrime(23);
