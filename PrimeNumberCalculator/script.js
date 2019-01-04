const primes = num => {
    const arr = Array(num).fill(true);
    arr[0] = false;
    arr[1] = false;
    for(let i=2;i<Math.sqrt(num);i++) {
        for(let j=2;i*j<num;j++) {
            arr[i*j] = false;
        }
    }
    return arr.reduce((acc, val, index) => 
        val ? acc.concat(index):acc, []);

    //return arr.reduce((primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),[]);

}

mocha.setup("bdd");
const {assert} = chai;

describe("Sieve of Eratosthenes", () => {
    it("Should return all prime numbers", () => {
     assert.deepEqual(primes(10), [2, 3, 5, 7]);
    });
   });
mocha.run();