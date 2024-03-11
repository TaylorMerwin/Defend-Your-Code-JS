/**
 * 
 * @param {String} password 
 */
export function validatePassword(password) {
  if (password == null) return false;
  const isLongEnough = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return isLongEnough && hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
}

/**
 * 
 * @param {String} name 
 */
export function validateName(name) {
  const nameRegex = /^[a-zA-Z]{1,50}$/;
  return nameRegex.test(name);
}

export function validateInt(integer) {
  const intValue = Number(integer);
  return Number.isInteger(intValue) && intValue >= -2147483648 && intValue <= 2147483647;
}

export function validateInputFileName(name) {
  const txtExtensionPattern = /\.txt$/i;
  const isValidLength = name.length <= 34;
  return txtExtensionPattern.test(name) && isValidLength;
}

export function validateOutputFileName(name) {
  const jsonExtensionPattern = /\.json$/i;
  const isValidLength = name.length <= 35;
  return jsonExtensionPattern.test(name) && isValidLength;
}

/**
 * 
 * @param {Number} firstInt 
 * @param {Number} secondInt 
 * @returns True if overflow will occur based on addition or multiplication of parameter integers
 */
export function checkOverflow(firstInt, secondInt) {
  const num1 = Number(firstInt);
  const num2 = Number(secondInt);
  // Check for overflow in case of addition or multiplication for 4-byte signed int range
  const addition = num1 + num2;
  const multiplication = num1 * num2;
  return addition < -2147483648 || multiplication < -2147483648 || addition > 2147483647 || multiplication > 2147483647;
}