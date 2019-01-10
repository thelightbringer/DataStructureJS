const reverse = string => string.split('').reverse().join('') ;
const _reverse = string => {
  let newStr = '';
  for(let character of string) {
    newStr = character + newStr; 
  }
  return newStr;
}

mocha.setup('bdd');
const {assert} = chai;

describe("String reversal", () => {
  it("Should reverse the String", () => {
    assert.equal(reverse("Hello World!"), '!dlroW olleH');
    assert.equal(_reverse("Hello World!"), '!dlroW olleH');
  })
})

mocha.run();