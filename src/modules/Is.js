class Is {
  static positiveIntegerString(string) {
    if (string.trim() === '') return false;
    if (Number.isNaN(Number(string))) return false;
    if (Number(string) !== parseInt(string)) return false;
    if (Number(string) <= 0) return false;
    return true;
  }

  static positiveMultiplesOf1000(number) {
    if (number % 1000 === 0) return true;
    return false;
  }
}
export default Is;
