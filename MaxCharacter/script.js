<<<<<<< HEAD
const maxChar = str => {
    let obj = {};
    for(let i=0;i<str.length;i++) {
        obj[str[i]] = obj[str[i]] ? ++obj[str[i]]: 1;
    }
    let max = 0, ch='';
    for(let char in obj) {
        if(obj[char] > max)  {
            max = obj[char];
            ch = char;
        }            
    }
    return ch;
}
mocha.setup('bdd');
const{assert} = chai;
describe("Maximum occuring character", () => {
    it("Should return max occuring character", () => {
        assert.equal(maxChar('Hello World'), 'l');
        assert.equal(maxChar('aaabbccaaaaad'), 'a');
    })
})

mocha.run();
=======
const maxChar = str => {
    let obj = {};
    for(let i=0;i<str.length;i++) {
        obj[str[i]] = obj[str[i]] ? ++obj[str[i]]: 1;
    }
    let max = 0, ch='';
    for(let char in obj) {
        if(obj[char] > max)  {
            max = obj[char];
            ch = char;
        }            
    }
    return ch;
}
mocha.setup('bdd');
const{assert} = chai;
describe("Maximum occuring character", () => {
    it("Should return max occuring character", () => {
        assert.equal(maxChar('Hello World'), 'l');
        assert.equal(maxChar('aaabbccaaaaad'), 'a');
    })
})

mocha.run();
>>>>>>> c00316593e10bb7e6f35651bcd78943559b1d783
