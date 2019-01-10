const vowels = string => {
    let newStr = string.toLowerCase().replace(/[aeiou]/g,'');
    return string.length - newStr.length;
}
const _vowels = string => {
    const vowel = 'aeiou'.split('');
    let count = 0;
    for(let char of string.toLowerCase()) {
        if(vowel.includes(char))
            count++;
    }
    return count;
}
mocha.setup('bdd');

const {assert} = chai;

describe("Vowels", () => {
    it("Should count vowels", () => {
     assert.equal(vowels("hello world"), 3);
     assert.equal(_vowels("hello world"), 3);
     assert.equal(vowels("my name is Abhijit"), 6);
     assert.equal(_vowels("my name is Abhijit"), 6)
    });
   });

mocha.run();