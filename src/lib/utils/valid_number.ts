export default function validNumber(number: number) {
  if (isNaN(number) || !isFinite(number)) {
    throw new TypeError(`Invalid input: '${number}' is not a valid number`); 
  }
}