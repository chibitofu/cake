let isValid = require('./index');
let assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Math', () => {
  it('should return true for 3 * 3 == 9', () => {
    assert(3 * 3 == 9, true);
  })

  it('should return true for (3-4) * 8 = -8', () => {
    assert((3-4) * 8 == -8, true);
  })
})

describe('isValid', () => {
  const test1 = "[()]{}{[()()]()}";
  const test2 = "[(])";
  const test3 = "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]";
  const test4 = "";
  const test5 = ")";
  const test6 = "()";

  const testCase = [
                      [test1, true],
                      [test2, false],
                      [test3, true],
                      [test4, true],
                      [test5, false],
                      [test6, true]
                  ]

  testCase.map((item) => {
    const test = item[0];
    const expected = item[1];

    it(`should return ${expected} for ${test}`, () => {
      assert.strictEqual(isValid(test), expected);
    })
  })

})