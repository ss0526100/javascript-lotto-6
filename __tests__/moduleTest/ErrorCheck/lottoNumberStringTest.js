import ErrorCheck from '../../src/modules/ErrorCheck';

const ERROR_FORMAT = '[ERROR]';

test.each([
  ['5', false],
  ['15', false],
  ['', true],
  ['true', true],
  [' ', true],
  ['+', true],
  ['1.1', true],
  ['-10', true],
  ['46', true],
  ['0', true],
])('lottoNumberString()', (input, isThrowing) => {
  const targetFunction = () => ErrorCheck.lottoNumberString(input);
  if (isThrowing) expect(targetFunction).toThrow(ERROR_FORMAT);
  if (!isThrowing) expect(targetFunction).not.toThrow();
});
