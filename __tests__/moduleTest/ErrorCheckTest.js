import ErrorCheck from '../../src/modules/ErrorCheck';

describe('ErrorCheck 테스트', () => {
  test.each([
    ['123', false],
    ['', true],
    ['true', true],
    [' ', true],
    ['+', true],
    ['1.1', true],
    ['-10', true],
  ])('positiveIntegerString()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.positiveIntegerString(input);
    if (isThrowing) expect(targetFunction).toThrow();
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });

  test.each([
    [1000, false],
    [40000, false],
    [10000, false],
    [2001, true],
    [9999, true],
    [123, true],
    [1, true],
  ])('multiplesOf1000InPositive()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.multiplesOf1000InPositive(input);
    if (isThrowing) expect(targetFunction).toThrow();
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });
});
