/**
 * SECURE YOUR CODE JS
 * TCSS 483
 * Taylor Merwin
 * Winter 24 
 */

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
 * Validates Name
 * @param {String} name 
 */
export function validateName(name) {
  const nameRegex = /^[a-zA-Z]{1,50}$/;
  return nameRegex.test(name);
}

/**
 * Validates "Integer"
 */
export function validateInt(number) {
  const intValue = Number(number);
  return Number.isInteger(intValue) && intValue >= -2147483648 && intValue <= 2147483647;
}

/**
 * Validates Input File Name
 */
export function validateInputFileName(name) {
  const txtExtensionPattern = /\.txt$/i;
  const isValidLength = name.length <= 34;
  const isLongEnough = name.length >= 5;
  const hasSingleExtension = (name.match(/\./g) || []).length === 1;
  const validChars = /^[a-zA-Z0-9_.-]*$/;
  return txtExtensionPattern.test(name) && isValidLength && isLongEnough && validChars.test(name) && hasSingleExtension;
}

/**
 * Validates Output File Name
 */
export function validateOutputFileName(name) {
  const jsonExtensionPattern = /\.json$/i;
  const isValidLength = name.length <= 35;
  const isLongEnough = name.length >= 6;
  const hasSingleExtension = (name.match(/\./g) || []).length === 1;
  const validChars = /^[a-zA-Z0-9_.-]*$/;
  return jsonExtensionPattern.test(name) && isValidLength && isLongEnough && validChars.test(name) && hasSingleExtension;
}

/**
 * Checks numbers for "overflow"
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