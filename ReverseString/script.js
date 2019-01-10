<<<<<<< HEAD
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

=======
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

>>>>>>> c00316593e10bb7e6f35651bcd78943559b1d783
mocha.run();