/**
 * Updates the table to display the inputted data
 * @param {string} inputType 
 * @param {string} value 
 */
export function updateInputValue(inputType, value) {
  let enteredId = "";
  let valueId = "";

  switch (inputType) {
    case 'Name':
      enteredId = "nameEntered";
      valueId = "nameValue";
      break;
    case 'Numbers':
      valueId = "numbersValue";
      break;
    case 'I/O Files':
      enteredId = "filesEntered";
      valueId = "filesValue";
      break;
    case 'Password':
      enteredId = "passwordEntered";
      valueId = "passwordValue";
      break;
    case 'Import':
      enteredId = "importEntered";
      valueId = "importValue";
      break;
    default:
      console.error("Invalid input type");
      return;
  }
  const enteredCell = document.getElementById(enteredId);
  enteredCell.textContent = '✅';
  enteredCell.style.color = 'green';
  const valueCell = document.getElementById(valueId);
  valueCell.textContent = value;
}