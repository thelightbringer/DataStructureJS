const isPalindrome = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    let stringChar = string.toLowerCase().split('').reduce((acc, val) => {
        return validCharacters.indexOf(val) != -1? acc+val: acc;
    })
    return stringChar.split('').reverse().join('') == stringChar;
}

const _isPalindrome = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    let trimString = string.toLowerCase().split('').reduce((acc, val) => {
        return validCharacters.indexOf(val) != -1? acc+val: acc;
    });
    let result = '';
    for(let chars of trimString) {
        result = chars + result;
    }
    return result == trimString;
}

const __isPalindrome = string => {
    let newStr = string.toLowerCase().replace(/[^a-z]/g,'');
    return newStr.split('').reverse().join('') == newStr;
}

mocha.setup('bdd');

const {assert} = chai;

describe('String is Palidrome', () => {
    it('Should check the reverse string is equal to string and return true', () => {
        assert.equal(isPalindrome('MADAM'), true);  
        assert.equal(_isPalindrome('Cigar? Toss it in a can. It is so tragic '), true);
        assert.equal(__isPalindrome('Cigar? Toss it in a can. It is so tragic '), true);
    });
    it('Should check the reverse string is equal to string and return false', () => {
        assert.equal(isPalindrome('hello world!!!'), false);  
        assert.equal(_isPalindrome('Caesar? Toss it in a can. It is so tragic '), false);
        assert.equal(__isPalindrome('Caesar? Toss it in a can. It is so tragic '), false);
    });
})

mocha.run();