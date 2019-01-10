const reduceStr = string => {
    const validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
        return string.toLowerCase().split('').reduce((acc, val) => {
            return validChars.indexOf(val) != -1 ? acc+val: acc;
        });
}
const charCounter = string => {
    let obj = {};
    string.split('').forEach(element => {
        obj[element] = obj[element] ? ++obj[element] : 1;
    });

    return obj;
}
const anagrams = (str1, str2) => {
    return Object.keys(charCounter(reduceStr(str1))).length ===Object.keys(charCounter(reduceStr(str2))).length;
}

mocha.setup('bdd');
const {assert} = chai;
describe('Anagrams', () => {
    it('Should have same number of chars', () => {
        assert.equal(anagrams('hello world', 'wrold olelh'), true);
        assert.equal(anagrams('hello world', 'hi worldsss!'), false);
        assert.equal(anagrams('hello world', 'hellow man how are you'), false);
    });
});

mocha.run();